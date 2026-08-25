(() => {
  if (window.__instaticFormRuntimeLoaded) return;
  window.__instaticFormRuntimeLoaded = true;

  const CMS_FORM_SELECTOR = 'form[data-instatic-form-mode="cms"][data-instatic-form-id]';

  for (const form of document.querySelectorAll(CMS_FORM_SELECTOR)) attachForm(form);

  const handleSubmit = (event) => {
    const form = event.target;
    if (!isCmsForm(form)) return;
    event.preventDefault();
    attachForm(form);
    submitForm(form);
  };

  // Hole fragments insert forms after load — attach on first interaction so
  // labels/messages/challenge are prepared before the visitor submits.
  const handleFocusIn = (event) => {
    const target = event.target;
    const form = target && target.closest ? target.closest(CMS_FORM_SELECTOR) : null;
    if (form) attachForm(form);
  };

  const handleInput = (event) => {
    const control = event.target;
    const form = control && control.closest ? control.closest(CMS_FORM_SELECTOR) : null;
    if (!form || !control.hasAttribute('data-instatic-field-id')) return;
    const fieldId = control.getAttribute('data-instatic-field-id') || '';
    control.removeAttribute('aria-invalid');
    const message = form.querySelector('[data-instatic-form-error-for="' + cssEscape(fieldId) + '"]');
    if (message) message.hidden = true;
    if (control instanceof HTMLInputElement && control.type === 'file') {
      const uploads = form.__instaticAttachmentUploads;
      if (uploads) uploads.delete(control);
      const status = attachmentStatusList(control);
      if (status) status.remove();
    }
  };

  document.addEventListener('submit', handleSubmit);
  document.addEventListener('focusin', handleFocusIn);
  document.addEventListener('input', handleInput);
  // Used by hot reload and browser-runtime tests to release delegated
  // listeners before evaluating a fresh copy of this self-contained script.
  window.__instaticFormRuntimeCleanup = () => {
    document.removeEventListener('submit', handleSubmit);
    document.removeEventListener('focusin', handleFocusIn);
    document.removeEventListener('input', handleInput);
    delete window.__instaticFormRuntimeLoaded;
    delete window.__instaticFormRuntimeCleanup;
  };

  function isCmsForm(el) {
    return !!el && el.tagName === 'FORM'
      && el.getAttribute('data-instatic-form-mode') === 'cms'
      && !!el.getAttribute('data-instatic-form-id');
  }

  function attachForm(form) {
    if (form.__instaticFormRuntimeAttached) return;
    form.__instaticFormRuntimeAttached = true;
    applyBindingPrefixes(form);
    connectLabels(form);
    connectFieldMessages(form);
    ensureStatusMessage(form);
    prepareMessages(form);
    prefetchChallenge(form);
  }

  function applyBindingPrefixes(form) {
    for (const fragment of form.querySelectorAll('[data-instatic-component="reusable-form-fragment"][data-instatic-binding-prefix]')) {
      if (fragment.__instaticBindingPrefixApplied) continue;
      fragment.__instaticBindingPrefixApplied = true;
      const raw = fragment.getAttribute('data-instatic-binding-prefix') || '';
      const prefix = raw.trim().toLowerCase().replace(/[^a-z0-9_-]+/g, '-').replace(/^-+|-+$/g, '');
      if (!prefix) continue;
      for (const control of fragment.querySelectorAll('[data-instatic-field-id]')) {
        const fieldId = control.getAttribute('data-instatic-field-id') || '';
        if (!fieldId) continue;
        const nextId = prefix + '-' + fieldId;
        control.setAttribute('data-instatic-field-id', nextId);
        if (control.id === fieldId) control.id = nextId;
        if (!control.name || control.name === fieldId) control.name = nextId;
      }
      for (const label of fragment.querySelectorAll('label[for]')) {
        const target = label.getAttribute('for') || '';
        if (target) label.setAttribute('for', prefix + '-' + target);
      }
      for (const message of fragment.querySelectorAll('[data-instatic-form-help-for], [data-instatic-form-error-for]')) {
        for (const attr of ['data-instatic-form-help-for', 'data-instatic-form-error-for']) {
          const target = message.getAttribute(attr);
          if (target) message.setAttribute(attr, prefix + '-' + target);
        }
      }
    }
  }

  async function submitForm(form) {
    const formId = form.getAttribute('data-instatic-form-id') || '';
    const pageId = form.getAttribute('data-instatic-page-id') || '';
    const pageToken = form.getAttribute('data-instatic-page-token') || '';
    if (!formId || !pageId || !pageToken) {
      setState(form, 'error', 'This form is missing its published form link.');
      return;
    }

    setBusy(form, true);
    clearFieldErrors(form);
    setState(form, 'pending', 'Sending...');

    try {
      const attachmentValues = await uploadFormAttachments(form, {
        pageId,
        formId,
        pageToken,
      });
      const challenge = await takeChallenge(form);
      await postJson('/_instatic/form/submit', {
        pageId,
        formId,
        token: challenge.token,
        challenge: challenge.challenge,
        values: collectValues(form, attachmentValues),
      });

      const redirectUrl = form.getAttribute('data-instatic-success-redirect') || '';
      if (redirectUrl) {
        window.location.assign(redirectUrl);
        return;
      }

      setState(form, 'success', form.getAttribute('data-instatic-success-message') || 'Thanks. Your submission was received.');
      if (form.getAttribute('data-instatic-reset-on-success') !== 'false') form.reset();
    } catch (err) {
      const message = err instanceof Error && err.message ? err.message : 'Form submission failed.';
      applyFieldErrors(form, Array.isArray(err && err.formErrors) ? err.formErrors : []);
      setState(form, 'error', message);
      focusFirstInvalid(form);
    } finally {
      setBusy(form, false);
      if (form.isConnected) prefetchChallenge(form);
    }
  }

  function prefetchChallenge(form) {
    if (form.__instaticFormChallenge || form.__instaticFormChallengePromise) return form.__instaticFormChallengePromise;
    const request = requestChallenge(form)
      .then((challenge) => {
        form.__instaticFormChallenge = challenge;
        form.__instaticFormChallengePromise = null;
        return challenge;
      })
      .catch((err) => {
        form.__instaticFormChallenge = null;
        form.__instaticFormChallengePromise = null;
        throw err;
      });
    form.__instaticFormChallengePromise = request;
    request.catch(() => {});
    return request;
  }

  async function takeChallenge(form) {
    const existing = form.__instaticFormChallenge;
    if (existing && challengeIsFresh(existing)) {
      form.__instaticFormChallenge = null;
      return existing;
    }
    form.__instaticFormChallenge = null;
    const challenge = await prefetchChallenge(form);
    form.__instaticFormChallenge = null;
    return challenge;
  }

  function requestChallenge(form) {
    const formId = form.getAttribute('data-instatic-form-id') || '';
    const pageId = form.getAttribute('data-instatic-page-id') || '';
    const pageToken = form.getAttribute('data-instatic-page-token') || '';
    if (!formId || !pageId || !pageToken) {
      return Promise.reject(new Error('This form is missing its published form link.'));
    }
    return postJson('/_instatic/form/challenge', { pageId, formId, pageToken });
  }

  function challengeIsFresh(challenge) {
    const expiresAt = Date.parse(challenge && challenge.expiresAt ? challenge.expiresAt : '');
    return !Number.isFinite(expiresAt) || Date.now() < expiresAt - 10000;
  }

  async function postJson(path, payload) {
    const response = await fetch(path, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const body = await readJson(response);
    if (!response.ok) {
      const error = new Error(errorMessage(body));
      error.formErrors = Array.isArray(body.errors) ? body.errors : [];
      throw error;
    }
    return body;
  }

  async function readJson(response) {
    const text = await response.text();
    if (!text) return {};
    try {
      return JSON.parse(text);
    } catch (_err) {
      return { error: 'Form submission failed.' };
    }
  }

  function errorMessage(body) {
    if (Array.isArray(body.errors) && body.errors.length > 0) {
      return body.errors.map((entry) => entry && entry.message ? entry.message : '').filter(Boolean).join('\n') || 'Invalid form values.';
    }
    return typeof body.error === 'string' && body.error ? body.error : 'Form submission failed.';
  }

  async function uploadFormAttachments(form, context) {
    const inputs = Array.from(form.querySelectorAll('input[type="file"][data-instatic-field-id]'));
    if (inputs.length === 0) return {};
    if (!form.__instaticAttachmentUploads) form.__instaticAttachmentUploads = new Map();
    const values = {};
    const pending = [];

    for (const input of inputs) {
      const files = Array.from(input.files || []);
      const fieldId = input.getAttribute('data-instatic-field-id') || '';
      const name = input.name || fieldId;
      const maxFiles = positiveInteger(input.getAttribute('data-instatic-attachment-max-files'), input.multiple ? 5 : 1);
      const maxBytes = positiveInteger(input.getAttribute('data-instatic-attachment-max-bytes'), 10 * 1024 * 1024);
      if (files.length > maxFiles || (!input.multiple && files.length > 1)) {
        const error = new Error('Choose no more than ' + (input.multiple ? maxFiles : 1) + ' file' + (maxFiles === 1 ? '' : 's') + '.');
        error.formErrors = [{ fieldId, code: 'too_many_attachments', message: error.message }];
        throw error;
      }
      const oversized = files.find((file) => file.size > maxBytes);
      if (oversized) {
        const error = new Error(oversized.name + ' exceeds the ' + maxBytes + '-byte limit.');
        error.formErrors = [{ fieldId, code: 'file_too_large', message: error.message }];
        throw error;
      }
      const existing = form.__instaticAttachmentUploads.get(input);
      const fingerprint = files.map(fileFingerprint).join('|');
      const state = existing && existing.fingerprint === fingerprint
        ? existing
        : { fingerprint, entries: files.map((file) => ({ file, status: 'pending', reference: '', retry: null })) };
      form.__instaticAttachmentUploads.set(input, state);
      renderAttachmentEntries(input, state.entries);
      for (const entry of state.entries) {
        if (entry.status !== 'success') pending.push({ input, entry, context });
      }
      values[name] = state.entries.map((entry) => entry.reference).filter(Boolean);
    }

    let complete = 0;
    for (const task of pending) {
      setState(form, 'pending', 'Uploading file ' + (complete + 1) + ' of ' + pending.length + '…');
      await runAttachmentUpload(form, task.input, task.entry, task.context, complete, pending.length);
      complete += 1;
    }

    for (const input of inputs) {
      const fieldId = input.getAttribute('data-instatic-field-id') || '';
      const name = input.name || fieldId;
      const state = form.__instaticAttachmentUploads.get(input);
      const refs = state ? state.entries.map((entry) => entry.reference).filter(Boolean) : [];
      values[name] = input.multiple ? refs : refs[0];
    }
    return values;
  }

  async function runAttachmentUpload(form, input, entry, context, completed, total) {
    entry.status = 'uploading';
    entry.error = '';
    renderAttachmentEntries(input, form.__instaticAttachmentUploads.get(input).entries);
    try {
      let result;
      if (entry.retry) {
        result = await postJson('/_instatic/form/attachment/scan', {
          pageId: context.pageId,
          formId: context.formId,
          pageToken: context.pageToken,
          fieldId: input.getAttribute('data-instatic-field-id') || '',
          uploadId: entry.retry.uploadId,
          retryToken: entry.retry.retryToken,
        });
      } else {
        result = await uploadAttachmentRequest(input, entry.file, context, (loaded, size) => {
          const percent = size > 0 ? Math.min(100, Math.round((loaded / size) * 100)) : 0;
          entry.progress = percent;
          renderAttachmentEntries(input, form.__instaticAttachmentUploads.get(input).entries);
          setState(form, 'pending', 'Uploading file ' + (completed + 1) + ' of ' + total + ': ' + percent + '%');
        });
      }
      entry.reference = result.attachment && result.attachment.reference ? result.attachment.reference : '';
      if (!entry.reference) throw new Error('Attachment upload returned no safe reference.');
      entry.status = 'success';
      entry.progress = 100;
      entry.retry = null;
      renderAttachmentEntries(input, form.__instaticAttachmentUploads.get(input).entries);
    } catch (err) {
      entry.status = 'error';
      entry.error = err instanceof Error && err.message ? err.message : 'File upload failed.';
      entry.retry = err && err.retry ? err.retry : entry.retry;
      renderAttachmentEntries(input, form.__instaticAttachmentUploads.get(input).entries);
      const fieldId = input.getAttribute('data-instatic-field-id') || '';
      const wrapped = new Error(entry.error);
      wrapped.formErrors = [{ fieldId, code: 'attachment_upload_failed', message: entry.error }];
      throw wrapped;
    }
  }

  function uploadAttachmentRequest(input, file, context, onProgress) {
    return new Promise((resolve, reject) => {
      const body = new FormData();
      body.set('pageId', context.pageId);
      body.set('formId', context.formId);
      body.set('pageToken', context.pageToken);
      body.set('fieldId', input.getAttribute('data-instatic-field-id') || '');
      body.set('file', file, file.name);
      const request = new XMLHttpRequest();
      request.open('POST', '/_instatic/form/attachment/upload');
      request.setRequestHeader('accept', 'application/json');
      request.withCredentials = true;
      request.upload.addEventListener('progress', (event) => {
        onProgress(event.loaded, event.lengthComputable ? event.total : file.size);
      });
      request.addEventListener('load', () => {
        let response = {};
        try {
          response = request.responseText ? JSON.parse(request.responseText) : {};
        } catch (_err) {}
        if (request.status >= 200 && request.status < 300) {
          resolve(response);
          return;
        }
        const error = new Error(errorMessage(response));
        error.retry = response && response.retry ? response.retry : null;
        reject(error);
      });
      request.addEventListener('error', () => reject(new Error('File upload failed.')));
      request.addEventListener('abort', () => reject(new Error('File upload was cancelled.')));
      request.send(body);
    });
  }

  function renderAttachmentEntries(input, entries) {
    let list = attachmentStatusList(input);
    if (!list) {
      list = document.createElement('ul');
      list.setAttribute('data-instatic-attachment-status', '');
      list.setAttribute('aria-live', 'polite');
      input.insertAdjacentElement('afterend', list);
    }
    list.replaceChildren();
    entries.forEach((entry, index) => {
      const item = document.createElement('li');
      item.setAttribute('data-instatic-attachment-file', String(index));
      const progress = entry.status === 'uploading' ? ' ' + (entry.progress || 0) + '%' : '';
      const state = entry.status === 'success'
        ? ' ready'
        : entry.status === 'error'
          ? ' failed: ' + entry.error
          : progress;
      item.append(document.createTextNode(entry.file.name + state));
      if (entry.status === 'error') {
        const retry = document.createElement('button');
        retry.type = 'button';
        retry.textContent = 'Retry';
        retry.addEventListener('click', () => {
          const form = input.closest(CMS_FORM_SELECTOR);
          if (!form) return;
          const context = {
            pageId: form.getAttribute('data-instatic-page-id') || '',
            formId: form.getAttribute('data-instatic-form-id') || '',
            pageToken: form.getAttribute('data-instatic-page-token') || '',
          };
          retry.disabled = true;
          runAttachmentUpload(form, input, entry, context, 0, 1)
            .then(() => setState(form, 'pending', 'File is ready to submit.'))
            .catch((err) => setState(form, 'error', err.message || 'File upload failed.'));
        });
        item.append(document.createTextNode(' '), retry);
      }
      list.appendChild(item);
    });
  }

  function attachmentStatusList(input) {
    const next = input.nextElementSibling;
    return next && next.hasAttribute('data-instatic-attachment-status') ? next : null;
  }

  function fileFingerprint(file) {
    return [file.name, file.size, file.type, file.lastModified].join(':');
  }

  function positiveInteger(value, fallback) {
    const parsed = Number(value);
    return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
  }

  function collectValues(form, attachmentValues) {
    const values = {};
    const data = new FormData(form);
    for (const [name, value] of data.entries()) {
      if (typeof value !== 'string') continue;
      const normalized = typeof value === 'string' ? value : value.name;
      if (values[name] === undefined) {
        values[name] = normalized;
      } else if (Array.isArray(values[name])) {
        values[name].push(normalized);
      } else {
        values[name] = [values[name], normalized];
      }
    }
    for (const [name, value] of Object.entries(attachmentValues || {})) {
      if (value !== undefined) values[name] = value;
    }
    return values;
  }

  function connectLabels(form) {
    const elements = Array.from(form.querySelectorAll('label[data-instatic-label-target="auto"], input:not([type="hidden"]):not([data-instatic-honeypot]), textarea, select'));
    let counter = 0;
    for (const element of elements) {
      if (element.tagName.toLowerCase() !== 'label') continue;
      const index = elements.indexOf(element);
      const control = elements.slice(index + 1).find((candidate) => candidate.tagName.toLowerCase() !== 'label');
      if (!control) continue;
      if (!control.id) {
        counter += 1;
        control.id = 'instatic-form-' + safeToken(form.getAttribute('data-instatic-form-id') || 'form') + '-' + counter;
      }
      element.setAttribute('for', control.id);
    }
  }

  function connectFieldMessages(form) {
    const messages = form.querySelectorAll('[data-instatic-form-help-for], [data-instatic-form-error-for]');
    let counter = 0;
    for (const message of messages) {
      const fieldId = message.getAttribute('data-instatic-form-help-for')
        || message.getAttribute('data-instatic-form-error-for')
        || '';
      if (!fieldId) continue;
      const control = form.querySelector('[data-instatic-field-id="' + cssEscape(fieldId) + '"]');
      if (!control) continue;
      if (!message.id) {
        counter += 1;
        message.id = 'instatic-form-' + safeToken(form.getAttribute('data-instatic-form-id') || 'form')
          + '-message-' + counter;
      }
      const describedBy = new Set((control.getAttribute('aria-describedby') || '').split(/\s+/).filter(Boolean));
      describedBy.add(message.id);
      control.setAttribute('aria-describedby', Array.from(describedBy).join(' '));
      if (message.hasAttribute('data-instatic-form-error-for')) {
        control.setAttribute('aria-errormessage', message.id);
        message.hidden = true;
      }
    }
  }

  function cssEscape(value) {
    if (window.CSS && typeof window.CSS.escape === 'function') return window.CSS.escape(value);
    return String(value).replace(/["\\]/g, '\\$&');
  }

  function clearFieldErrors(form) {
    for (const control of form.querySelectorAll('[aria-invalid="true"]')) {
      control.removeAttribute('aria-invalid');
    }
    for (const message of form.querySelectorAll('[data-instatic-form-error-for]')) {
      message.hidden = true;
      message.textContent = message.getAttribute('data-instatic-default-text') || '';
    }
  }

  function applyFieldErrors(form, errors) {
    for (const entry of errors) {
      const fieldId = entry && typeof entry.fieldId === 'string' ? entry.fieldId : '';
      if (!fieldId || fieldId === '*') continue;
      const control = form.querySelector('[data-instatic-field-id="' + cssEscape(fieldId) + '"]');
      if (control) control.setAttribute('aria-invalid', 'true');
      const message = form.querySelector('[data-instatic-form-error-for="' + cssEscape(fieldId) + '"]');
      if (!message) continue;
      message.textContent = entry && typeof entry.message === 'string' ? entry.message : 'Check this field.';
      message.hidden = false;
    }
  }

  function focusFirstInvalid(form) {
    const first = form.querySelector('[aria-invalid="true"]');
    if (!first) return;
    for (const disclosure of ancestorDisclosures(first, form)) {
      disclosure.open = true;
    }
    const panel = first.closest('[data-instatic-tab-panel]');
    if (panel && form.contains(panel)) {
      if (typeof window.__instaticActivateTabPanel === 'function') {
        window.__instaticActivateTabPanel(panel, false);
      } else {
        panel.hidden = false;
      }
    }
    if (typeof first.focus === 'function') first.focus();
  }

  function ancestorDisclosures(control, form) {
    const disclosures = [];
    let current = control.parentElement;
    while (current && current !== form) {
      if (current.tagName === 'DETAILS') disclosures.push(current);
      current = current.parentElement;
    }
    return disclosures;
  }

  function safeToken(value) {
    return String(value).replace(/[^a-zA-Z0-9_-]+/g, '-').replace(/^-+|-+$/g, '') || 'form';
  }

  function setBusy(form, busy) {
    form.setAttribute('aria-busy', busy ? 'true' : 'false');
    const buttons = form.querySelectorAll('button, input[type="submit"], input[type="button"]');
    for (const button of buttons) {
      if (busy) {
        if (button.disabled) button.setAttribute('data-instatic-was-disabled', 'true');
        button.disabled = true;
      } else if (!button.hasAttribute('data-instatic-was-disabled')) {
        button.disabled = false;
      } else {
        button.removeAttribute('data-instatic-was-disabled');
      }
    }
  }

  function prepareMessages(form) {
    for (const message of formMessages(form)) {
      if (!message.hasAttribute('data-instatic-default-text')) {
        message.setAttribute('data-instatic-default-text', message.textContent || '');
      }
      const kind = message.getAttribute('data-instatic-form-message') || 'status';
      if (kind === 'success' || kind === 'error') message.hidden = true;
    }
  }

  function ensureStatusMessage(form) {
    const existing = formMessages(form).some((message) => {
      return !message.hasAttribute('data-instatic-form-help-for')
        && !message.hasAttribute('data-instatic-form-error-for')
        && (message.getAttribute('data-instatic-form-message') || 'status') === 'status';
    });
    if (existing) return;
    const message = document.createElement('div');
    message.setAttribute('data-instatic-form-message', 'status');
    message.setAttribute('data-instatic-runtime-message', 'true');
    message.setAttribute('role', 'status');
    message.hidden = true;
    form.appendChild(message);
  }

  function setState(form, state, text) {
    form.setAttribute('data-instatic-form-state', state);
    const messages = formMessages(form).filter((message) => {
      return !message.hasAttribute('data-instatic-form-help-for')
        && !message.hasAttribute('data-instatic-form-error-for');
    });
    const messageKind = state === 'error' ? 'error' : state === 'success' ? 'success' : 'status';
    const hasExactMessage = messages.some((message) => (message.getAttribute('data-instatic-form-message') || 'status') === messageKind);

    for (const message of messages) {
      if (!message.hasAttribute('data-instatic-default-text')) {
        message.setAttribute('data-instatic-default-text', message.textContent || '');
      }
      const kind = message.getAttribute('data-instatic-form-message') || 'status';
      const shouldShow = kind === messageKind || (!hasExactMessage && kind === 'status');
      if (!shouldShow) {
        message.hidden = true;
        continue;
      }
      message.textContent = text || message.getAttribute('data-instatic-default-text') || '';
      message.hidden = !message.textContent;
    }
  }

  function formMessages(form) {
    const formId = form.getAttribute('data-instatic-form-id') || '';
    return Array.from(document.querySelectorAll('[data-instatic-form-message]')).filter((message) => {
      return form.contains(message) || (formId && message.getAttribute('data-instatic-form-id') === formId);
    });
  }
})();(() => {
  if (window.__instaticFormDraftRuntimeLoaded) return;
  window.__instaticFormDraftRuntimeLoaded = true;

  const FORM_SELECTOR = 'form[data-instatic-form-mode="cms"][data-instatic-draft-mode]';
  const timers = new WeakMap();
  for (const form of document.querySelectorAll(FORM_SELECTOR)) attach(form);

  const onFocus = (event) => {
    const form = closestForm(event.target);
    if (form) attach(form);
  };
  const onInput = (event) => {
    const form = closestForm(event.target);
    if (!form) return;
    attach(form);
    if (form.getAttribute('data-instatic-draft-mode') !== 'session') return;
    clearTimeout(timers.get(form));
    timers.set(form, setTimeout(() => saveSession(form), 250));
  };
  const onClick = (event) => {
    const action = event.target && event.target.closest
      ? event.target.closest('[data-instatic-draft-action]')
      : null;
    const form = action ? action.closest(FORM_SELECTOR) : null;
    if (!action || !form) return;
    event.preventDefault();
    attach(form);
    const kind = action.getAttribute('data-instatic-draft-action');
    if (kind === 'save-draft') savePersistent(form, action);
    if (kind === 'delete-draft') deletePersistent(form, action);
    if (kind === 'next-step') moveStep(form, 1);
    if (kind === 'previous-step') moveStep(form, -1);
  };
  document.addEventListener('focusin', onFocus);
  document.addEventListener('input', onInput);
  document.addEventListener('change', onInput);
  document.addEventListener('click', onClick);

  window.__instaticFormDraftRuntimeCleanup = () => {
    document.removeEventListener('focusin', onFocus);
    document.removeEventListener('input', onInput);
    document.removeEventListener('change', onInput);
    document.removeEventListener('click', onClick);
    delete window.__instaticFormDraftRuntimeLoaded;
    delete window.__instaticFormDraftRuntimeCleanup;
  };

  function closestForm(target) {
    return target && target.closest ? target.closest(FORM_SELECTOR) : null;
  }

  function attach(form) {
    if (form.__instaticDraftAttached) return;
    form.__instaticDraftAttached = true;
    form.__instaticDraft = { id: '', token: '', revision: 0 };
    initWizard(form);
    if (form.getAttribute('data-instatic-draft-mode') === 'session') {
      loadSession(form);
    } else {
      loadPersistent(form);
    }
  }

  function storageKey(form) {
    return 'instatic:form-draft:v1:' + window.location.origin + ':'
      + (form.getAttribute('data-instatic-page-id') || '') + ':'
      + (form.getAttribute('data-instatic-form-id') || '');
  }

  function context(form) {
    return {
      pageId: form.getAttribute('data-instatic-page-id') || '',
      formId: form.getAttribute('data-instatic-form-id') || '',
      pageToken: form.getAttribute('data-instatic-page-token') || '',
    };
  }

  function saveSession(form) {
    const record = {
      version: 1,
      values: collectValues(form, true),
      wizard: wizardState(form),
      savedAt: new Date().toISOString(),
    };
    try {
      window.sessionStorage.setItem(storageKey(form), JSON.stringify(record));
      announce(form, 'Progress saved for this browser session.');
    } catch (_err) {
      announce(form, 'Session draft could not be saved.');
    }
  }

  function loadSession(form) {
    try {
      const raw = window.sessionStorage.getItem(storageKey(form));
      if (!raw) return;
      const record = JSON.parse(raw);
      if (!record || record.version !== 1) return;
      applyValues(form, record.values || {});
      applyWizard(form, record.wizard || {});
      announce(form, 'Session progress restored.');
    } catch (_err) {
      announce(form, 'Session progress could not be restored.');
    }
  }

  async function loadPersistent(form) {
    const stored = readRecovery(form);
    if (stored) form.__instaticDraft = stored;
    const payload = {
      ...context(form),
      ...(stored && stored.id ? { draftId: stored.id } : {}),
      ...(stored && stored.token ? { recoveryToken: stored.token } : {}),
    };
    if (!payload.pageId || !payload.formId || !payload.pageToken) {
      announce(form, 'Persistent recovery is unavailable on this page.');
      return;
    }
    try {
      const result = await post('/_instatic/form/draft/load', payload);
      applyDraftResult(form, result, 'Draft restored.');
    } catch (err) {
      if (err.code !== 'draft_not_found') {
        announce(form, err.message || 'Saved progress could not be restored.');
      }
    }
  }

  async function savePersistent(form, button) {
    if (window.navigator.onLine === false) {
      announce(form, 'You are offline. Progress was not saved to the server.');
      return;
    }
    setActionBusy(button, true);
    const state = form.__instaticDraft || { id: '', token: '', revision: 0 };
    try {
      const result = await post('/_instatic/form/draft/save', {
        ...context(form),
        ...(state.id ? { draftId: state.id } : {}),
        ...(state.token ? { recoveryToken: state.token } : {}),
        ...(state.revision ? { revision: state.revision } : {}),
        values: collectValues(form, false),
        wizard: wizardState(form),
      });
      applyDraftResult(form, result, 'Draft saved.');
    } catch (err) {
      if (err.code === 'draft_conflict') {
        announce(form, 'A newer draft exists. Reload it before saving; your current fields were not overwritten.');
      } else {
        announce(form, err.message || 'Draft could not be saved.');
      }
    } finally {
      setActionBusy(button, false);
    }
  }

  async function deletePersistent(form, button) {
    const state = form.__instaticDraft;
    if (!state || !state.id || !state.revision) {
      announce(form, 'There is no persistent draft to delete.');
      return;
    }
    setActionBusy(button, true);
    try {
      await post('/_instatic/form/draft/delete', {
        ...context(form),
        draftId: state.id,
        ...(state.token ? { recoveryToken: state.token } : {}),
        revision: state.revision,
      });
      window.localStorage.removeItem(storageKey(form));
      clearRecoveryHash();
      form.__instaticDraft = { id: '', token: '', revision: 0 };
      announce(form, 'Saved draft deleted.');
    } catch (err) {
      announce(form, err.code === 'draft_conflict'
        ? 'A newer draft exists. Reload it before deleting.'
        : err.message || 'Draft could not be deleted.');
    } finally {
      setActionBusy(button, false);
    }
  }

  function applyDraftResult(form, result, fallbackMessage) {
    const draft = result && result.draft;
    if (!draft) return;
    const old = form.__instaticDraft || {};
    const next = {
      id: draft.id,
      token: result.recoveryToken || old.token || '',
      revision: draft.revision,
    };
    form.__instaticDraft = next;
    writeRecovery(form, next);
    applyValues(form, draft.values || {});
    applyWizard(form, draft.wizard || {});
    const warnings = Array.isArray(draft.warnings) ? draft.warnings : [];
    const message = draft.schemaStatus === 'migrated'
      ? 'Draft restored with form changes. ' + warnings.join(' ')
      : warnings.length ? fallbackMessage + ' ' + warnings.join(' ') : fallbackMessage;
    announce(form, message);
  }

  function collectValues(form, includeSessionOnly) {
    const values = {};
    const controls = Array.from(form.querySelectorAll('[data-instatic-field-id]'));
    for (const control of controls) {
      const fieldId = control.getAttribute('data-instatic-field-id') || '';
      const behavior = control.getAttribute('data-instatic-draft-behavior') || 'include';
      if (!fieldId || behavior === 'exclude' || (!includeSessionOnly && behavior === 'session-only')) continue;
      if (control instanceof HTMLInputElement && ['password', 'file', 'hidden'].includes(control.type)) continue;
      if (control instanceof HTMLInputElement && (control.type === 'checkbox' || control.type === 'radio')) {
        const group = controls.filter((candidate) =>
          candidate.getAttribute('data-instatic-field-id') === fieldId
          && candidate instanceof HTMLInputElement
          && candidate.type === control.type);
        const selected = group.filter((candidate) => candidate.checked).map((candidate) => candidate.value);
        values[fieldId] = control.type === 'checkbox' && group.length === 1
          ? control.checked
          : selected;
        continue;
      }
      if (control instanceof HTMLSelectElement && control.multiple) {
        values[fieldId] = Array.from(control.selectedOptions).map((option) => option.value);
      } else if ('value' in control) {
        values[fieldId] = control.value;
      }
    }
    return values;
  }

  function applyValues(form, values) {
    for (const [fieldId, value] of Object.entries(values || {})) {
      const controls = Array.from(form.querySelectorAll('[data-instatic-field-id]'))
        .filter((control) => control.getAttribute('data-instatic-field-id') === fieldId);
      for (const control of controls) {
        if (control instanceof HTMLInputElement && ['password', 'file', 'hidden'].includes(control.type)) continue;
        if (control instanceof HTMLInputElement && (control.type === 'checkbox' || control.type === 'radio')) {
          control.checked = Array.isArray(value)
            ? value.map(String).includes(control.value)
            : typeof value === 'boolean' ? value : String(value) === control.value;
        } else if (control instanceof HTMLSelectElement && control.multiple) {
          const selected = Array.isArray(value) ? value.map(String) : [String(value)];
          for (const option of control.options) option.selected = selected.includes(option.value);
        } else if ('value' in control && (typeof value === 'string' || typeof value === 'number')) {
          control.value = String(value);
        }
        control.dispatchEvent(new Event('change', { bubbles: false }));
      }
    }
  }

  function initWizard(form) {
    const steps = wizardSteps(form);
    if (steps.length === 0) return;
    form.__instaticWizard = {
      stepId: steps[0].getAttribute('data-instatic-form-step') || '',
      visited: new Set(),
    };
    showStep(form, form.__instaticWizard.stepId);
  }

  function moveStep(form, direction) {
    const steps = wizardSteps(form);
    if (steps.length === 0) return;
    const current = form.__instaticWizard && form.__instaticWizard.stepId;
    const index = Math.max(0, steps.findIndex((step) =>
      step.getAttribute('data-instatic-form-step') === current));
    const next = steps[Math.max(0, Math.min(steps.length - 1, index + direction))];
    if (!next) return;
    const nextId = next.getAttribute('data-instatic-form-step') || '';
    form.__instaticWizard.visited.add(current);
    form.__instaticWizard.stepId = nextId;
    showStep(form, nextId);
    const focusTarget = next.querySelector('input, select, textarea, button, [tabindex]');
    if (focusTarget && typeof focusTarget.focus === 'function') focusTarget.focus();
  }

  function showStep(form, stepId) {
    for (const step of wizardSteps(form)) {
      step.hidden = step.getAttribute('data-instatic-form-step') !== stepId;
    }
  }

  function wizardSteps(form) {
    return Array.from(form.querySelectorAll('[data-instatic-form-step]'));
  }

  function wizardState(form) {
    const wizard = form.__instaticWizard;
    const active = wizard && wizard.stepId ? wizard.stepId : '';
    const step = wizardSteps(form).find((candidate) =>
      candidate.getAttribute('data-instatic-form-step') === active);
    return {
      ...(active ? { stepId: active } : {}),
      visitedStepIds: wizard ? Array.from(wizard.visited) : [],
      review: !!(step && step.getAttribute('data-instatic-form-review') === 'true'),
    };
  }

  function applyWizard(form, value) {
    if (!form.__instaticWizard || !value || typeof value !== 'object') return;
    const ids = new Set(wizardSteps(form).map((step) =>
      step.getAttribute('data-instatic-form-step') || ''));
    if (typeof value.stepId === 'string' && ids.has(value.stepId)) {
      form.__instaticWizard.stepId = value.stepId;
    }
    form.__instaticWizard.visited = new Set(
      Array.isArray(value.visitedStepIds)
        ? value.visitedStepIds.filter((id) => ids.has(id))
        : [],
    );
    showStep(form, form.__instaticWizard.stepId);
  }

  function readRecovery(form) {
    const hash = new URLSearchParams(window.location.hash.replace(/^#/, ''));
    const hashId = hash.get('instatic-draft-id') || '';
    const hashToken = hash.get('instatic-draft-token') || '';
    if (hashId && hashToken) return { id: hashId, token: hashToken, revision: 0 };
    try {
      const parsed = JSON.parse(window.localStorage.getItem(storageKey(form)) || 'null');
      return parsed && parsed.version === 1
        ? { id: parsed.id || '', token: parsed.token || '', revision: parsed.revision || 0 }
        : null;
    } catch (_err) {
      return null;
    }
  }

  function writeRecovery(form, state) {
    try {
      window.localStorage.setItem(storageKey(form), JSON.stringify({ version: 1, ...state }));
    } catch (_err) {}
    if (!state.token) return;
    const hash = new URLSearchParams(window.location.hash.replace(/^#/, ''));
    hash.set('instatic-draft-id', state.id);
    hash.set('instatic-draft-token', state.token);
    window.history.replaceState(
      null,
      '',
      window.location.pathname + window.location.search + '#' + hash.toString(),
    );
  }

  function clearRecoveryHash() {
    const hash = new URLSearchParams(window.location.hash.replace(/^#/, ''));
    hash.delete('instatic-draft-id');
    hash.delete('instatic-draft-token');
    const suffix = hash.toString() ? '#' + hash.toString() : '';
    window.history.replaceState(
      null,
      '',
      window.location.pathname + window.location.search + suffix,
    );
  }

  async function post(path, payload) {
    const response = await fetch(path, {
      method: 'POST',
      credentials: 'same-origin',
      headers: { accept: 'application/json', 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    });
    let body = {};
    try { body = await response.json(); } catch (_err) {}
    if (!response.ok) {
      const error = new Error(body && body.error ? body.error : 'Draft request failed.');
      error.code = body && body.code ? body.code : '';
      error.revision = body && body.revision ? body.revision : 0;
      throw error;
    }
    return body;
  }

  function announce(form, text) {
    let status = form.querySelector('[data-instatic-draft-status]');
    if (!status) {
      status = document.createElement('div');
      status.setAttribute('data-instatic-draft-status', '');
      status.setAttribute('role', 'status');
      status.setAttribute('aria-live', 'polite');
      form.appendChild(status);
    }
    status.textContent = text;
  }

  function setActionBusy(button, busy) {
    if (!button) return;
    button.disabled = busy;
    button.setAttribute('aria-busy', busy ? 'true' : 'false');
  }
})();