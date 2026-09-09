import{j as e,r as y,g as b,f as l,e as d,A as p}from"./iframe-C7zCaA2D.js";import{Q as w}from"./server-cdnA_SQe.js";import{c as R}from"./source-CdOEFnsr.js";import{w as A}from"./source-vp4kwhs4.js";import"./preload-helper-x6r9jKQR.js";const{expect:n,userEvent:i,within:B}=__STORYBOOK_MODULE_TEST__,s=R.concepts.find(({id:a})=>a==="accordion"),r=A.offered.find(({conceptId:a})=>a==="accordion"),f="https://github.com/creator-signal/sales-pulse/blob/develop/";function o({children:a}){return e.jsx("ul",{children:a.map(t=>e.jsx("li",{children:t},t))})}function v({label:a,children:t}){return e.jsxs("section",{children:[e.jsx("h2",{children:a}),t]})}function k(){const[a,t]=y.useState(["insights"]),[c,u]=y.useState(null);return e.jsxs("div",{className:"cs-accordion-examples",children:[e.jsxs("section",{className:"cs-accordion-example","aria-labelledby":"single-accordion-title",children:[e.jsx("h3",{id:"single-accordion-title",children:"Single, uncontrolled expansion"}),e.jsxs(b,{"aria-label":"Delivery evidence",defaultValue:"delivery",children:[e.jsxs(l,{value:"delivery",children:[e.jsx(d,{headingLevel:4,children:"Delivery"}),e.jsxs(p,{children:["Source, Local browser and CI evidence are recorded separately. ",e.jsx("a",{href:"#accordion",children:"Review the delivery evidence contract"}),"."]})]}),e.jsxs(l,{disabled:!0,value:"provider",children:[e.jsx(d,{headingLevel:4,children:"Provider acceptance unavailable"}),e.jsx(p,{children:"Provider work requires separate authorisation."})]}),e.jsxs(l,{value:"recovery",children:[e.jsx(d,{headingLevel:4,children:"Recovery"}),e.jsx(p,{children:"Forward-fix and rollback boundaries remain visible."})]})]})]}),e.jsxs("section",{className:"cs-accordion-example","aria-labelledby":"multiple-accordion-title",children:[e.jsx("h3",{id:"multiple-accordion-title",children:"Multiple, controlled expansion"}),e.jsxs(b,{"aria-label":"Report sections",onValueChange:t,type:"multiple",value:a,children:[e.jsxs(l,{value:"insights",children:[e.jsx(d,{headingLevel:4,children:"Insights"}),e.jsx(p,{children:"Synthetic insights explain the current report."})]}),e.jsxs(l,{value:"activity",children:[e.jsx(d,{headingLevel:4,children:"Activity"}),e.jsx(p,{children:"Synthetic activity stays independently expanded."})]})]}),e.jsxs("div",{className:"cs-accordion-example__controls",children:[e.jsx(w,{onClick:()=>t(["insights"]),variant:"secondary",children:"Reset expanded sections"}),e.jsxs("span",{"aria-live":"polite",children:["Expanded: ",a.length?a.join(", "):"none"]})]})]}),e.jsxs("section",{className:"cs-accordion-example","aria-labelledby":"controlled-accordion-title",children:[e.jsx("h3",{id:"controlled-accordion-title",children:"Parent-owned controlled expansion"}),e.jsxs(b,{"aria-label":"Parent-owned evidence",collapsible:!1,onValueChange:u,value:"approved",children:[e.jsxs(l,{value:"approved",children:[e.jsx(d,{"data-controlled-approved":"",headingLevel:4,children:"Parent-approved evidence"}),e.jsx(p,{children:"The parent keeps this required section expanded."})]}),e.jsxs(l,{value:"requested",children:[e.jsx(d,{"data-controlled-request":"",headingLevel:4,children:"A deliberately long requested evidence section label that must wrap without clipping at narrow widths"}),e.jsx(p,{children:"This panel opens only if the parent accepts the requested value."})]})]}),e.jsxs("div",{className:"cs-accordion-example__controls",children:[e.jsx(w,{onClick:()=>u(null),variant:"secondary",children:"Clear requested value"}),e.jsxs("p",{"aria-live":"polite",className:"cs-accordion-example__ownership",children:["Parent value: approved. Requested value: ",c??"none","."]})]})]})]})}function H(){return e.jsxs("main",{className:"cs-dls-shell cs-component-page cs-widget-page","data-widget-id":"accordion",id:"accordion",children:[e.jsxs("header",{className:"cs-component-hero",children:[e.jsx("p",{className:"cs-dls-kicker",children:"DLS · Widgets · Accordion"}),e.jsx("h1",{children:"Accordion"}),e.jsx("p",{children:s.summary}),e.jsxs("div",{className:"cs-component-meta",children:[e.jsx("span",{children:s.entrypoint}),e.jsxs("span",{children:[s.exports.length," public APIs"]}),e.jsx("span",{children:"Issue #1445"})]})]}),e.jsxs("section",{className:"cs-component-purpose",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs-dls-card-label",children:"Purpose"}),e.jsx("h2",{children:s.purpose})]}),e.jsxs("div",{className:"cs-component-do-dont",children:[e.jsxs("article",{children:[e.jsx("strong",{children:"Use"}),e.jsx(o,{children:s.use})]}),e.jsxs("article",{children:[e.jsx("strong",{children:"Do not use"}),e.jsx(o,{children:s.avoid})]})]})]}),e.jsxs("section",{className:"cs-component-specimen",children:[e.jsxs("div",{className:"cs-component-section-heading",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs-dls-card-label",children:"Live implementation"}),e.jsx("h2",{children:"Coordinate related sections"})]}),e.jsx("p",{children:"Try single and multiple expansion with pointer or keyboard. The specimens use the real client export and synthetic content."})]}),e.jsx("div",{className:"cs-component-live",children:e.jsx(k,{})}),e.jsxs("details",{className:"cs-component-code",children:[e.jsx("summary",{children:"Copy the supported API"}),e.jsx("pre",{children:e.jsx("code",{children:s.exampleCode})})]})]}),e.jsxs("section",{className:"cs-component-guidance","aria-label":"Accordion guidance",children:[e.jsx(v,{label:"Composition tree",children:e.jsx(o,{children:r.composition})}),e.jsx(v,{label:"State model",children:e.jsx(o,{children:r.stateModel})}),e.jsx(v,{label:"Content",children:e.jsx(o,{children:s.content})}),e.jsx(v,{label:"Accessibility",children:e.jsx(o,{children:s.accessibility})}),e.jsx(v,{label:"Focus",children:e.jsx(o,{children:r.focus})}),e.jsx(v,{label:"Responsive, RTL and theme",children:e.jsx(o,{children:[...r.responsive,...r.rtl,...r.theme]})}),e.jsx(v,{label:"Motion, forced colours and zoom",children:e.jsx(o,{children:[...r.reducedMotion,...r.forcedColours,...r.zoom]})})]}),e.jsxs("section",{className:"cs-widget-keyboard",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs-dls-card-label",children:"Keyboard contract"}),e.jsx("h2",{children:"Supported transitions"})]}),e.jsxs("table",{children:[e.jsx("caption",{children:"Accordion keyboard operation"}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Input"}),e.jsx("th",{scope:"col",children:"Result"})]})}),e.jsx("tbody",{children:r.keyboard.map(a=>e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:e.jsx("kbd",{children:a.input})}),e.jsx("td",{children:a.result})]},a.input))})]})]}),e.jsxs("section",{className:"cs-component-api",children:[e.jsxs("div",{children:[e.jsx("p",{className:"cs-dls-card-label",children:"Public API and evidence"}),e.jsx("h2",{children:"Owned, tested and traceable"}),e.jsx(o,{children:r.tests})]}),e.jsxs("div",{children:[e.jsxs("table",{children:[e.jsx("caption",{children:"Accordion public exports"}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Export"}),e.jsx("th",{scope:"col",children:"Level"}),e.jsx("th",{scope:"col",children:"Role"})]})}),e.jsx("tbody",{children:s.exports.map(a=>e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:e.jsx("code",{children:a.name})}),e.jsx("td",{children:a.classification}),e.jsx("td",{children:a.role})]},a.name))})]}),e.jsxs("p",{className:"cs-component-source",children:[e.jsx("strong",{children:"Owner:"})," ",s.owner,e.jsx("br",{}),e.jsx("strong",{children:"Entry:"})," ",e.jsx("code",{children:s.entrypoint}),e.jsx("br",{}),e.jsxs("a",{href:`${f}${s.sourcePath}`,rel:"noreferrer",target:"_blank",children:["View ",s.sourcePath]})]})]})]})]})}const F={title:"DLS/Widgets",component:H,tags:["autodocs"],parameters:{docs:{description:{component:"The real shared Accordion API, state, keyboard, focus and accessibility contract."}}}},h={name:"Accordion",play:async({canvasElement:a})=>{const t=B(a),c=t.getByRole("button",{name:"Delivery"}),u=t.getByRole("button",{name:"Provider acceptance unavailable"}),x=t.getByRole("button",{name:"Recovery"});await n(c).toHaveAttribute("aria-expanded","true"),await n(u).toBeDisabled(),c.focus(),await i.keyboard("{ArrowDown}"),await n(x).toHaveFocus(),await i.keyboard("{Home}"),await n(c).toHaveFocus(),await i.keyboard(" "),await n(c).toHaveAttribute("aria-expanded","false"),await i.click(x),await n(x).toHaveAttribute("aria-expanded","true"),await n(c).toHaveAttribute("aria-expanded","false"),await n(x).toHaveFocus();const g=t.getByRole("button",{name:"Activity"});await i.click(g),await n(t.getByText("Expanded: insights, activity")).toBeVisible(),await i.click(t.getByRole("button",{name:"Reset expanded sections"})),await n(t.getByText("Expanded: insights")).toBeVisible(),await i.click(c),await n(c).toHaveAttribute("aria-expanded","true"),c.focus(),await i.tab(),await n(t.getByRole("link",{name:"Review the delivery evidence contract"})).toHaveFocus(),await i.tab(),await n(x).toHaveFocus(),await i.tab({shift:!0}),await n(t.getByRole("link",{name:"Review the delivery evidence contract"})).toHaveFocus(),await i.tab({shift:!0}),await n(c).toHaveFocus();const j=t.getByRole("button",{name:"Parent-approved evidence"}),m=t.getByRole("button",{name:/A deliberately long requested evidence section label/});await i.click(j),await n(j).toHaveAttribute("aria-expanded","true"),await n(t.getByText("Parent value: approved. Requested value: none.")).toBeVisible(),await i.click(m),await n(m).toHaveAttribute("aria-expanded","false"),await n(j).toHaveAttribute("aria-expanded","true"),await n(t.getByText("Parent value: approved. Requested value: requested.")).toBeVisible(),await i.click(t.getByRole("button",{name:"Clear requested value"})),await n(t.getByText("Parent value: approved. Requested value: none.")).toBeVisible(),a.setAttribute("data-accordion-play-complete","")}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Accordion",
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const delivery = canvas.getByRole("button", {
      name: "Delivery"
    });
    const provider = canvas.getByRole("button", {
      name: "Provider acceptance unavailable"
    });
    const recovery = canvas.getByRole("button", {
      name: "Recovery"
    });
    await expect(delivery).toHaveAttribute("aria-expanded", "true");
    await expect(provider).toBeDisabled();
    delivery.focus();
    await userEvent.keyboard("{ArrowDown}");
    await expect(recovery).toHaveFocus();
    await userEvent.keyboard("{Home}");
    await expect(delivery).toHaveFocus();
    await userEvent.keyboard(" ");
    await expect(delivery).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(recovery);
    await expect(recovery).toHaveAttribute("aria-expanded", "true");
    await expect(delivery).toHaveAttribute("aria-expanded", "false");
    await expect(recovery).toHaveFocus();
    const activity = canvas.getByRole("button", {
      name: "Activity"
    });
    await userEvent.click(activity);
    await expect(canvas.getByText("Expanded: insights, activity")).toBeVisible();
    await userEvent.click(canvas.getByRole("button", {
      name: "Reset expanded sections"
    }));
    await expect(canvas.getByText("Expanded: insights")).toBeVisible();
    await userEvent.click(delivery);
    await expect(delivery).toHaveAttribute("aria-expanded", "true");
    delivery.focus();
    await userEvent.tab();
    await expect(canvas.getByRole("link", {
      name: "Review the delivery evidence contract"
    })).toHaveFocus();
    await userEvent.tab();
    await expect(recovery).toHaveFocus();
    await userEvent.tab({
      shift: true
    });
    await expect(canvas.getByRole("link", {
      name: "Review the delivery evidence contract"
    })).toHaveFocus();
    await userEvent.tab({
      shift: true
    });
    await expect(delivery).toHaveFocus();
    const approved = canvas.getByRole("button", {
      name: "Parent-approved evidence"
    });
    const requested = canvas.getByRole("button", {
      name: /A deliberately long requested evidence section label/
    });
    await userEvent.click(approved);
    await expect(approved).toHaveAttribute("aria-expanded", "true");
    await expect(canvas.getByText("Parent value: approved. Requested value: none.")).toBeVisible();
    await userEvent.click(requested);
    await expect(requested).toHaveAttribute("aria-expanded", "false");
    await expect(approved).toHaveAttribute("aria-expanded", "true");
    await expect(canvas.getByText("Parent value: approved. Requested value: requested.")).toBeVisible();
    await userEvent.click(canvas.getByRole("button", {
      name: "Clear requested value"
    }));
    await expect(canvas.getByText("Parent value: approved. Requested value: none.")).toBeVisible();
    canvasElement.setAttribute("data-accordion-play-complete", "");
  }
}`,...h.parameters?.docs?.source}}};const S=["AccordionReference"];export{h as AccordionReference,S as __namedExportsOrder,F as default};
