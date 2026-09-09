import{j as c}from"./iframe-Cayqf6GY.js";import{I as i,s as d,Q as u}from"./server-blcMU88S.js";import"./preload-helper-x6r9jKQR.js";const g={id:"dls-components-actions-button",title:"Components/Actions/Button",component:u,subcomponents:{LinkButton:d,IconButton:i},tags:["autodocs"],args:{children:"Save report"},parameters:{docs:{description:{component:"Primary action API. LinkButton and IconButton share the same governed variants and interaction sizing."}}}},r={},e={args:{variant:"secondary"}},a={args:{variant:"danger",children:"Delete report"}},s={args:{variant:"ghost",children:"Cancel"}},n={args:{busy:!0,children:"Saving"}},o={args:{disabled:!0,children:"Unavailable"}},t={render:()=>c.jsxs("div",{className:"cs-ui-review-row",children:[c.jsx(d,{href:"#continue",children:"Continue"}),c.jsx(i,{icon:"?",label:"Help",variant:"ghost"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    children: "Delete report"
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost",
    children: "Cancel"
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    busy: true,
    children: "Saving"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Unavailable"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="cs-ui-review-row"><LinkButton href="#continue">Continue</LinkButton><IconButton icon="?" label="Help" variant="ghost" /></div>
}`,...t.parameters?.docs?.source}}};const h=["Primary","Secondary","Danger","Ghost","Busy","Disabled","LinkAndIcon"];export{n as Busy,a as Danger,o as Disabled,s as Ghost,t as LinkAndIcon,r as Primary,e as Secondary,h as __namedExportsOrder,g as default};
