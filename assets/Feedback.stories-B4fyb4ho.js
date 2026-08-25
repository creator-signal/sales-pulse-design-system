import{j as e}from"./iframe-WV9_BeoZ.js";import{J as m,H as u,G as i,E as g,l as h,z as d,A as p,N as S,B as l}from"./server-p1ZBaDNH.js";import"./preload-helper-x6r9jKQR.js";const j={title:"Components/Feedback/Notice",component:S,subcomponents:{Badge:p,StatusIndicator:d,FormStatus:h,LoadingIndicator:g,Skeleton:i,EmptyState:u,ErrorState:m},tags:["autodocs"],args:{heading:"Report refreshed",tone:"info",children:e.jsx("p",{children:"Marketplace data was updated today."})}},r={},a={args:{heading:"Import complete",tone:"success",children:e.jsx("p",{children:"135 synthetic rows are ready."})}},s={args:{heading:"Review required",tone:"warning",children:e.jsx("p",{children:"Two products have no collection."})}},t={args:{heading:"Import failed",tone:"error",children:e.jsx("p",{children:"Nothing was saved."})}},o={render:()=>e.jsxs("div",{className:"cs-ui-review-row",children:[e.jsx(p,{children:"Draft"}),e.jsx(p,{tone:"success",children:"Synced"}),e.jsx(d,{tone:"warning",children:"Needs review"}),e.jsx(d,{tone:"error",children:"Failed"})]})},n={render:()=>e.jsxs("div",{className:"cs-ui-review-stack",children:[e.jsx(g,{label:"Loading report"}),e.jsx(i,{}),e.jsx(i,{})]})},c={render:()=>e.jsxs("div",{className:"cs-ui-review-grid",children:[e.jsx(u,{title:"No reports",description:"Create the first report.",actions:e.jsx(l,{children:"Create report"})}),e.jsx(m,{title:"Could not load",description:"Saved reports are safe.",retry:e.jsx(l,{variant:"secondary",children:"Try again"})})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    heading: "Import complete",
    tone: "success",
    children: <p>135 synthetic rows are ready.</p>
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    heading: "Review required",
    tone: "warning",
    children: <p>Two products have no collection.</p>
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    heading: "Import failed",
    tone: "error",
    children: <p>Nothing was saved.</p>
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="cs-ui-review-row"><Badge>Draft</Badge><Badge tone="success">Synced</Badge><StatusIndicator tone="warning">Needs review</StatusIndicator><StatusIndicator tone="error">Failed</StatusIndicator></div>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="cs-ui-review-stack"><LoadingIndicator label="Loading report" /><Skeleton /><Skeleton /></div>
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="cs-ui-review-grid"><EmptyState title="No reports" description="Create the first report." actions={<Button>Create report</Button>} /><ErrorState title="Could not load" description="Saved reports are safe." retry={<Button variant="secondary">Try again</Button>} /></div>
}`,...c.parameters?.docs?.source}}};const y=["Information","Success","Warning","Error","BadgesAndIndicators","Loading","EmptyAndErrorStates"];export{o as BadgesAndIndicators,c as EmptyAndErrorStates,t as Error,r as Information,n as Loading,a as Success,s as Warning,y as __namedExportsOrder,j as default};
