import{A as o,e as c,f as i,g as v,j as e}from"./iframe-C7zCaA2D.js";import"./preload-helper-x6r9jKQR.js";const{expect:a,userEvent:l,within:y}=__STORYBOOK_MODULE_TEST__,A={title:"DLS/Widgets/Accordion behaviour",component:v,subcomponents:{AccordionItem:i,AccordionTrigger:c,AccordionPanel:o},tags:["autodocs"],args:{defaultValue:"delivery"}},r={render:n=>e.jsxs("main",{className:"cs-story-shell",children:[e.jsx("h1",{children:"Accordion"}),e.jsxs(v,{...n,children:[e.jsxs(i,{value:"delivery",children:[e.jsx(c,{headingLevel:2,children:"Delivery evidence"}),e.jsx(o,{children:"Source, Local browser and CI evidence stay distinct."})]}),e.jsxs(i,{value:"recovery",children:[e.jsx(c,{headingLevel:2,children:"Recovery evidence"}),e.jsx(o,{children:"Forward-fix and rollback boundaries remain visible."})]})]})]}),play:async({canvasElement:n})=>{const t=y(n),d=t.getByRole("button",{name:"Delivery evidence"}),s=t.getByRole("button",{name:"Recovery evidence"});await a(d).toHaveAttribute("aria-expanded","true"),d.focus(),await l.keyboard("{ArrowDown}"),await a(s).toHaveFocus(),await l.keyboard(" "),await a(s).toHaveAttribute("aria-expanded","true")}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <main className="cs-story-shell">\r
      <h1>Accordion</h1>\r
      <Accordion {...args}>\r
        <AccordionItem value="delivery">\r
          <AccordionTrigger headingLevel={2}>Delivery evidence</AccordionTrigger>\r
          <AccordionPanel>Source, Local browser and CI evidence stay distinct.</AccordionPanel>\r
        </AccordionItem>\r
        <AccordionItem value="recovery">\r
          <AccordionTrigger headingLevel={2}>Recovery evidence</AccordionTrigger>\r
          <AccordionPanel>Forward-fix and rollback boundaries remain visible.</AccordionPanel>\r
        </AccordionItem>\r
      </Accordion>\r
    </main>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const delivery = canvas.getByRole("button", {
      name: "Delivery evidence"
    });
    const recovery = canvas.getByRole("button", {
      name: "Recovery evidence"
    });
    await expect(delivery).toHaveAttribute("aria-expanded", "true");
    delivery.focus();
    await userEvent.keyboard("{ArrowDown}");
    await expect(recovery).toHaveFocus();
    await userEvent.keyboard(" ");
    await expect(recovery).toHaveAttribute("aria-expanded", "true");
  }
}`,...r.parameters?.docs?.source}}};const g=["StateAndKeyboard"];export{r as StateAndKeyboard,g as __namedExportsOrder,A as default};
