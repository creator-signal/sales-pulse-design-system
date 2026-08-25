import{j as e}from"./iframe-BmBntp3S.js";import{N as r,B as s,J as g,H as h,e as y,E as x,G as p}from"./server-BOImTARe.js";import"./preload-helper-x6r9jKQR.js";function j({state:l}){const u={loading:e.jsxs(y,{className:"cs-reference-card",children:[e.jsx(x,{label:"Loading creator signals"}),e.jsx(p,{}),e.jsx(p,{})]}),empty:e.jsx(h,{title:"No reports yet",description:"Create a report to see useful creator signals.",actions:e.jsx(s,{children:"Create report"})}),success:e.jsx(r,{heading:"Import complete",tone:"success",children:e.jsx("p",{children:"135 synthetic rows are ready."})}),warning:e.jsx(r,{heading:"Review needed",tone:"warning",children:e.jsx("p",{children:"Two synthetic rows need a category."})}),error:e.jsx(g,{title:"Import failed",description:"Nothing was saved. Existing reports are unchanged.",retry:e.jsx(s,{variant:"secondary",children:"Try again"})}),entitlement:e.jsxs(r,{heading:"Pro feature",tone:"warning",children:[e.jsx("p",{children:"Recommendations require Pro. Your current reports remain available."}),e.jsx(s,{variant:"secondary",children:"Compare plans"})]}),"payment-failure":e.jsxs(r,{heading:"Payment method needs attention",tone:"error",children:[e.jsx("p",{children:"Your access continues through 22 August. No charge was made."}),e.jsx(s,{children:"Update payment method"})]}),verification:e.jsxs(r,{heading:"Verify your email",tone:"info",children:[e.jsx("p",{children:"Enter the code sent to maya@example.test. This is synthetic fixture data."}),e.jsx(s,{children:"Enter code"})]})};return e.jsxs("main",{className:"cs-story-shell",children:[e.jsx("p",{className:"cs-story-eyebrow",children:"Sales Pulse state matrix · synthetic only"}),e.jsx("h1",{className:"cs-story-title",children:l.replace("-"," ")}),e.jsxs("section",{className:"cs-story-section",children:[e.jsx("h2",{children:"Current state"}),u[l]]})]})}const E={title:"Product previews/Sales Pulse state matrix",component:j,tags:["autodocs"],argTypes:{state:{control:"select",options:["loading","empty","success","warning","error","entitlement","payment-failure","verification"]}}},a={args:{state:"loading"}},t={args:{state:"empty"}},n={args:{state:"success"}},o={args:{state:"warning"}},c={args:{state:"error"}},i={args:{state:"entitlement"}},d={args:{state:"payment-failure"}},m={args:{state:"verification"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    state: "loading"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    state: "empty"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    state: "success"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    state: "warning"
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    state: "error"
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    state: "entitlement"
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    state: "payment-failure"
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    state: "verification"
  }
}`,...m.parameters?.docs?.source}}};const v=["Loading","Empty","Success","Warning","Error","Entitlement","PaymentFailure","Verification"];export{t as Empty,i as Entitlement,c as Error,a as Loading,d as PaymentFailure,n as Success,m as Verification,o as Warning,v as __namedExportsOrder,E as default};
