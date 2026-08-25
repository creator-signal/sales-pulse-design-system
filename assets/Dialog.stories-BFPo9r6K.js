import{D as i,j as e}from"./iframe-BmBntp3S.js";import{B as c}from"./server-BOImTARe.js";import"./preload-helper-x6r9jKQR.js";const{expect:o,userEvent:s,within:l}=__STORYBOOK_MODULE_TEST__,d={title:"Components/Interaction/Dialog",component:i,tags:["autodocs"],args:{title:"Archive this report?",trigger:"Archive report",description:"The report leaves your dashboard but can be restored later.",children:e.jsx("p",{children:"No source marketplace data will be deleted."}),actions:e.jsx(c,{variant:"danger",children:"Archive"})}},t={render:a=>e.jsxs("main",{className:"cs-story-shell",children:[e.jsx("h1",{children:"Dialog"}),e.jsx(i,{...a})]}),play:async({canvasElement:a})=>{const r=l(a),n=r.getByRole("button",{name:"Archive report"});await s.click(n),await o(r.getByRole("dialog",{name:"Archive this report?"})).toBeVisible(),await s.click(r.getByRole("button",{name:"Close dialog"})),await o(n).toHaveFocus()}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <main className="cs-story-shell"><h1>Dialog</h1><Dialog {...args} /></main>,
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
    await expect(trigger).toHaveFocus();
  }
}`,...t.parameters?.docs?.source}}};const h=["Confirmation"];export{t as Confirmation,h as __namedExportsOrder,d as default};
