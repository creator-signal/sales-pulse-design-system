import{T as g,D as b,a as l,b as d,c as w,d as y,A,e as H,f as N,g as C,j as e,u as D}from"./iframe-C7zCaA2D.js";import{U as f,V as R,W as T,Q as O}from"./server-cdnA_SQe.js";import{c as P}from"./source-CdOEFnsr.js";import{w as S}from"./source-vp4kwhs4.js";import"./preload-helper-x6r9jKQR.js";const{expect:r,userEvent:o,waitFor:k,within:p}=__STORYBOOK_MODULE_TEST__,W=P,B=S,E=new Map(W.concepts.map(t=>[t.id,t]));B.offered.map(t=>({details:t,concept:E.get(t.conceptId)}));const F="https://github.com/creator-signal/sales-pulse/blob/develop/";function c({children:t}){return e.jsx("ul",{children:t.map(n=>e.jsx("li",{children:n},n))})}function I(){const t=D();return e.jsxs("div",{className:"cs-ui-review-stack",children:[e.jsx(g,{label:"Appearance"}),e.jsxs("p",{role:"status",children:["Preference: ",e.jsx("strong",{children:t.preference}),"; resolved: ",e.jsx("strong",{children:t.resolvedTheme})]})]})}function L({id:t}){switch(t){case"disclosure":return e.jsxs(T,{children:[e.jsx(R,{children:"Report options"}),e.jsx("p",{children:"Duplicate or archive this synthetic report."})]});case"tooltip":return e.jsx(f,{content:"Calculated after refunds and marketplace fees.",triggerLabel:"Explain net revenue",children:"What is net revenue?"});case"tabs":return e.jsxs(y,{defaultValue:"overview",children:[e.jsxs(w,{label:"Report sections",children:[e.jsx(d,{value:"overview",children:"Overview"}),e.jsx(d,{value:"orders",children:"Orders"}),e.jsx(d,{disabled:!0,value:"billing",children:"Billing"}),e.jsx(d,{value:"customers",children:"Customers"})]}),e.jsx(l,{value:"overview",children:"Overview combines useful signals."}),e.jsx(l,{value:"orders",children:"Orders explain each signal."}),e.jsx(l,{value:"billing",children:"Billing is unavailable in this synthetic state."}),e.jsx(l,{value:"customers",children:"Customers show repeat behaviour."})]});case"dialog":return e.jsx(b,{actions:e.jsx(O,{variant:"danger",children:"Archive"}),description:"The report leaves the dashboard but can be restored later.",title:"Archive this report?",trigger:"Archive report",children:e.jsx("p",{children:"No source marketplace data will be deleted."})});case"theme-control":return e.jsx(I,{});default:return null}}function i({label:t,children:n}){return e.jsxs("section",{children:[e.jsx("h2",{children:t}),n]})}function h({id:t}){const n=B.offered.find(a=>a.conceptId===t),s=E.get(t);return e.jsxs("main",{className:"cs-dls-shell cs-component-page cs-widget-page","data-widget-id":t,children:[e.jsxs("header",{className:"cs-component-hero",children:[e.jsxs("p",{className:"cs-dls-kicker",children:["DLS · Widgets · ",s.label]}),e.jsx("h1",{children:s.label}),e.jsx("p",{children:s.summary}),e.jsxs("div",{className:"cs-component-meta",children:[e.jsx("span",{children:s.entrypoint}),e.jsxs("span",{children:[s.exports.length," public ",s.exports.length===1?"API":"APIs"]}),e.jsx("span",{children:"Issue #1410"})]})]}),e.jsxs("section",{className:"cs-component-purpose",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs-dls-card-label",children:"Purpose"}),e.jsx("h2",{children:s.purpose})]}),e.jsxs("div",{className:"cs-component-do-dont",children:[e.jsxs("article",{children:[e.jsx("strong",{children:"Use"}),e.jsx(c,{children:s.use})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Do not use"}),e.jsx(c,{children:s.avoid})]})]})]}),e.jsxs("section",{className:"cs-component-specimen",children:[e.jsxs("div",{className:"cs-component-section-heading",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs-dls-card-label",children:"Live implementation"}),e.jsx("h2",{children:"Use the real interaction"})]}),e.jsx("p",{children:"Resize, change theme, zoom and use the keyboard. This is the exported package—not a copied Storybook imitation."})]}),e.jsx("div",{className:"cs-component-live",children:e.jsx(L,{id:t})}),e.jsxs("details",{className:"cs-component-code",children:[e.jsx("summary",{children:"Copy the supported API"}),e.jsx("pre",{children:e.jsx("code",{children:s.exampleCode})})]})]}),e.jsxs("section",{className:"cs-component-guidance","aria-label":`${s.label} guidance`,children:[e.jsx(i,{label:"Composition tree",children:e.jsx(c,{children:n.composition})}),e.jsx(i,{label:"State model",children:e.jsx(c,{children:n.stateModel})}),e.jsx(i,{label:"Content",children:e.jsx(c,{children:s.content})}),e.jsx(i,{label:"Accessibility",children:e.jsx(c,{children:s.accessibility})}),e.jsx(i,{label:"Focus",children:e.jsx(c,{children:n.focus})}),e.jsx(i,{label:"Responsive, RTL and theme",children:e.jsx(c,{children:[...n.responsive,...n.rtl,...n.theme]})}),e.jsx(i,{label:"Motion, forced colours and zoom",children:e.jsx(c,{children:[...n.reducedMotion,...n.forcedColours,...n.zoom]})})]}),e.jsxs("section",{className:"cs-widget-keyboard",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs-dls-card-label",children:"Keyboard contract"}),e.jsx("h2",{children:"Supported transitions"})]}),e.jsxs("table",{children:[e.jsxs("caption",{children:[s.label," keyboard operation"]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Input"}),e.jsx("th",{scope:"col",children:"Result"})]})}),e.jsx("tbody",{children:n.keyboard.map(a=>e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:e.jsx("kbd",{children:a.input})}),e.jsx("td",{children:a.result})]},a.input))})]})]}),e.jsxs("section",{className:"cs-component-api",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs-dls-card-label",children:"Public API and evidence"}),e.jsx("h2",{children:"Owned, tested and traceable"}),e.jsx(c,{children:n.tests})]}),e.jsxs("div",{children:[e.jsxs("table",{children:[e.jsxs("caption",{children:[s.label," public exports"]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Export"}),e.jsx("th",{scope:"col",children:"Level"}),e.jsx("th",{scope:"col",children:"Role"})]})}),e.jsx("tbody",{children:s.exports.map(a=>e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:e.jsx("code",{children:a.name})}),e.jsx("td",{children:a.classification}),e.jsx("td",{children:a.role})]},a.name))})]}),e.jsxs("p",{className:"cs-component-source",children:[e.jsx("strong",{children:"Owner:"})," ",s.owner,e.jsx("br",{}),e.jsx("strong",{children:"Entry:"})," ",e.jsx("code",{children:s.entrypoint}),e.jsx("br",{}),e.jsxs("a",{href:`${F}${s.sourcePath}`,rel:"noreferrer",target:"_blank",children:["View ",s.sourcePath]})]})]})]})]})}const $={title:"DLS/Widgets",component:T,subcomponents:{DisclosureTrigger:R,Tooltip:f,Accordion:C,AccordionItem:N,AccordionTrigger:H,AccordionPanel:A,Tabs:y,TabList:w,Tab:d,TabPanel:l,Dialog:b,ThemeControl:g},tags:["autodocs"],parameters:{docs:{description:{component:"Registry-driven references for the real shared Widget APIs. The separate Widget catalogue owns the cross-widget overview and expected-name dispositions."}}}},m={name:"Disclosure",render:()=>e.jsx(h,{id:"disclosure"}),play:async({canvasElement:t})=>{const s=p(t).getByText("Report options");await o.click(s),await r(s.closest("details")).toHaveAttribute("open"),await o.click(s),await r(s.closest("details")).not.toHaveAttribute("open")}},u={name:"Tooltip",render:()=>e.jsx(h,{id:"tooltip"}),play:async({canvasElement:t})=>{const n=p(t),s=n.getByRole("button",{name:"Explain net revenue"}),a=n.getByRole("tooltip");await o.click(s),await r(s).toHaveFocus(),await k(()=>r(a).toBeVisible()),await r(s).toHaveAttribute("aria-describedby",a.id)}},x={name:"Tabs",render:()=>e.jsx(h,{id:"tabs"}),play:async({canvasElement:t})=>{const n=p(t),s=n.getByRole("tab",{name:"Overview"});s.focus(),await o.keyboard("{ArrowRight}"),await r(n.getByRole("tab",{name:"Orders"})).toHaveAttribute("aria-selected","true"),await o.keyboard("{End}"),await r(n.getByRole("tab",{name:"Customers"})).toHaveFocus(),await o.keyboard("{Home}"),await r(s).toHaveFocus()}},v={name:"Dialog",render:()=>e.jsx(h,{id:"dialog"}),play:async({canvasElement:t})=>{const n=p(t),s=n.getByRole("button",{name:"Archive report"});await o.click(s),await r(n.getByRole("dialog",{name:"Archive this report?"})).toBeVisible(),await o.click(n.getByRole("button",{name:"Close dialog"})),await k(()=>r(s).toHaveFocus())}},j={name:"Theme control",render:()=>e.jsx(h,{id:"theme-control"}),play:async({canvasElement:t})=>{const n=p(t),s=n.getByRole("combobox",{name:/^Appearance/});await o.selectOptions(s,"dark"),await r(n.getByRole("status")).toHaveTextContent("Preference: dark")}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Disclosure",
  render: () => <WidgetReference id="disclosure" />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const summary = canvas.getByText("Report options");
    await userEvent.click(summary);
    await expect(summary.closest("details")).toHaveAttribute("open");
    await userEvent.click(summary);
    await expect(summary.closest("details")).not.toHaveAttribute("open");
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "Tooltip",
  render: () => <WidgetReference id="tooltip" />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", {
      name: "Explain net revenue"
    });
    const tooltip = canvas.getByRole("tooltip");
    await userEvent.click(trigger);
    await expect(trigger).toHaveFocus();
    await waitFor(() => expect(tooltip).toBeVisible());
    await expect(trigger).toHaveAttribute("aria-describedby", tooltip.id);
  }
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "Tabs",
  render: () => <WidgetReference id="tabs" />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const overview = canvas.getByRole("tab", {
      name: "Overview"
    });
    overview.focus();
    await userEvent.keyboard("{ArrowRight}");
    await expect(canvas.getByRole("tab", {
      name: "Orders"
    })).toHaveAttribute("aria-selected", "true");
    await userEvent.keyboard("{End}");
    await expect(canvas.getByRole("tab", {
      name: "Customers"
    })).toHaveFocus();
    await userEvent.keyboard("{Home}");
    await expect(overview).toHaveFocus();
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Dialog",
  render: () => <WidgetReference id="dialog" />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button", {
      name: "Archive report"
    });
    await userEvent.click(trigger);
    await expect(canvas.getByRole("dialog", {
      name: "Archive this report?"
    })).toBeVisible();
    await userEvent.click(canvas.getByRole("button", {
      name: "Close dialog"
    }));
    await waitFor(() => expect(trigger).toHaveFocus());
  }
}`,...v.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Theme control",
  render: () => <WidgetReference id="theme-control" />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const control = canvas.getByRole("combobox", {
      name: /^Appearance/
    });
    await userEvent.selectOptions(control, "dark");
    await expect(canvas.getByRole("status")).toHaveTextContent("Preference: dark");
  }
}`,...j.parameters?.docs?.source}}};const K=["DisclosureReference","TooltipReference","TabsReference","DialogReference","ThemeControlReference"];export{v as DialogReference,m as DisclosureReference,x as TabsReference,j as ThemeControlReference,u as TooltipReference,K as __namedExportsOrder,$ as default};
