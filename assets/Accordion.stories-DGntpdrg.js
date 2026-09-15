import{A as o,e as c,f as i,g as v,j as e}from"./iframe-Ceh-3x-a.js";import"./preload-helper-x6r9jKQR.js";const{expect:a,userEvent:l,within:y}=__STORYBOOK_MODULE_TEST__,A={title:"DLS/Widgets/Accordion behaviour",component:v,subcomponents:{AccordionItem:i,AccordionTrigger:c,AccordionPanel:o},tags:["autodocs"],args:{defaultValue:"delivery"}},n={render:r=>e.jsxs("main",{className:"cs-story-shell",children:[e.jsx("h1",{children:"Accordion"}),e.jsxs(v,{...r,children:[e.jsxs(i,{value:"delivery",children:[e.jsx(c,{headingLevel:2,children:"Delivery evidence"}),e.jsx(o,{children:"Source, Local browser and CI evidence stay distinct."})]}),e.jsxs(i,{value:"recovery",children:[e.jsx(c,{headingLevel:2,children:"Recovery evidence"}),e.jsx(o,{children:"Forward-fix and rollback boundaries remain visible."})]})]})]}),play:async({canvasElement:r})=>{const t=y(r),d=t.getByRole("button",{name:"Delivery evidence"}),s=t.getByRole("button",{name:"Recovery evidence"});await a(d).toHaveAttribute("aria-expanded","true"),d.focus(),await l.keyboard("{ArrowDown}"),await a(s).toHaveFocus(),await l.keyboard(" "),await a(s).toHaveAttribute("aria-expanded","true")}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <main className="cs-story-shell">
      <h1>Accordion</h1>
      <Accordion {...args}>
        <AccordionItem value="delivery">
          <AccordionTrigger headingLevel={2}>Delivery evidence</AccordionTrigger>
          <AccordionPanel>Source, Local browser and CI evidence stay distinct.</AccordionPanel>
        </AccordionItem>
        <AccordionItem value="recovery">
          <AccordionTrigger headingLevel={2}>Recovery evidence</AccordionTrigger>
          <AccordionPanel>Forward-fix and rollback boundaries remain visible.</AccordionPanel>
        </AccordionItem>
      </Accordion>
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
}`,...n.parameters?.docs?.source}}};const g=["StateAndKeyboard"];export{n as StateAndKeyboard,g as __namedExportsOrder,A as default};
