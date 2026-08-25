import{j as e,r as b}from"./iframe-jNa45Udc.js";import{F as g,f as y,S as x,B as f}from"./server-BoFJHFv2.js";import{D as p,a as h,b as u,c as v,d as L,e as R,f as F,g as P}from"./dashboard-compositions-eAwEaxlr.js";import"./preload-helper-x6r9jKQR.js";const C=[{value:"30",label:"Last 30 days"},{value:"ytd",label:"This year"},{value:"custom",label:"Custom period"}],A={emptyDescription:"Choose another period or import more statements.",emptyTitle:"No designs in this period",errorDescription:"Existing dashboard data is unchanged.",errorTitle:"Could not load performance",loadingLabel:"Loading performance data",updatingLabel:"Updating performance data"};function I({state:S="ready"}){const[j,w]=b.useState("30"),[D,k]=b.useState({from:"2026-01-01",to:"2026-01-31"});return e.jsxs(p,{label:"Synthetic Spoonflower dashboard pattern",children:[e.jsx(L,{applyLabel:"Apply custom period",customRange:D,customRangeLabel:"Custom range",fromLabel:"From",label:"Reporting period",onApply:()=>{},onCustomRangeChange:k,onValueChange:w,options:C,status:"Synthetic data only. No marketplace request is made.",toLabel:"To",value:j}),e.jsxs(h,{actions:e.jsx(f,{variant:"secondary",children:"View details"}),description:"A reusable, route-neutral structure for dashboard data.",title:"Performance",children:[e.jsx(v,{items:[{label:"Revenue",value:"$4,820",context:"Last 30 days"},{label:"Orders",value:"184",context:"31 repeat customers"},{label:"Designs",value:"42",context:"Synthetic fixture"}]}),e.jsxs(R,{label:"Synthetic design filters",children:[e.jsxs(g,{children:[e.jsx(y,{htmlFor:"dashboard-story-category",children:"Category"}),e.jsxs(x,{id:"dashboard-story-category",children:[e.jsx("option",{children:"All categories"}),e.jsx("option",{children:"Wallpaper"}),e.jsx("option",{children:"Fabric"})]})]}),e.jsxs(g,{children:[e.jsx(y,{htmlFor:"dashboard-story-status",children:"Status"}),e.jsxs(x,{id:"dashboard-story-status",children:[e.jsx("option",{children:"All designs"}),e.jsx("option",{children:"Growing"}),e.jsx("option",{children:"Needs review"})]})]})]}),e.jsxs(F,{copy:A,error:{retry:e.jsx(f,{variant:"secondary",children:"Try again"})},label:"Performance data",state:S,children:[e.jsx(P,{description:"Text labels and the summary remain available when chart appearance is unavailable.",legend:[{label:"Revenue",tone:"series-1",value:"$4,820"},{label:"Orders",tone:"series-2",value:"184"}],summary:"Synthetic trend: revenue and orders increased across the selected period.",title:"Sales growth",children:e.jsx("div",{"aria-label":"Synthetic sales growth data region",role:"img",children:"Chart geometry belongs to the route consumer."})}),e.jsx(u,{alt:"Synthetic fern design thumbnail",fallback:"SF",src:null})]})]})]})}const $={title:"Patterns/Sales Pulse dashboard composition",component:I,tags:["autodocs"],parameters:{docs:{description:{component:"Real application-owned dashboard compositions with synthetic fixtures only. Route migration owns data coordination and chart geometry; Storybook is never a runtime dependency."}}}},a={},r={args:{state:"loading"}},t={args:{state:"updating"}},s={args:{state:"empty"}},o={args:{state:"error"}},n={render:()=>e.jsx(p,{label:"Synthetic long-label dashboard",children:e.jsxs(h,{description:"This deliberately long, synthetic explanation remains readable at narrow widths and 200% zoom.",title:"A deliberately long dashboard section title for a synthetic Spoonflower design with an unusually descriptive name",children:[e.jsx(v,{items:[{label:"A deliberately long synthetic metric label",value:"$4,820",context:"A deliberately long context that preserves the selected reporting period"}]}),e.jsx(u,{alt:"Synthetic thumbnail unavailable for a deliberately long design name",fallback:"A very long synthetic design name",src:null})]})})},i={render:()=>e.jsx(p,{label:"Synthetic image-fallback dashboard",children:e.jsx(h,{description:"The fallback keeps a stable, named image surface when a marketplace thumbnail is unavailable.",title:"Design thumbnail fallback",children:e.jsx(u,{alt:"Synthetic fern design thumbnail unavailable",fallback:"SF",src:null})})})},l={globals:{theme:"light"}},d={globals:{theme:"dark"}},c={parameters:{docs:{description:{story:"Review this real composition with the operating system reduced-motion preference enabled. Its shared loading primitives remove non-essential animation under that media preference."}}}},m={parameters:{docs:{description:{story:"Review this real composition with forced colours enabled. Its borders, focus treatment and status text retain explicit, non-colour meaning through the governed UI contract."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    state: "loading"
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    state: "updating"
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    state: "empty"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    state: "error"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <DashboardPage label="Synthetic long-label dashboard"><DashboardSection description="This deliberately long, synthetic explanation remains readable at narrow widths and 200% zoom." title="A deliberately long dashboard section title for a synthetic Spoonflower design with an unusually descriptive name"><DashboardKpis items={[{
        label: "A deliberately long synthetic metric label",
        value: "$4,820",
        context: "A deliberately long context that preserves the selected reporting period"
      }]} /><DashboardImage alt="Synthetic thumbnail unavailable for a deliberately long design name" fallback="A very long synthetic design name" src={null} /></DashboardSection></DashboardPage>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <DashboardPage label="Synthetic image-fallback dashboard"><DashboardSection description="The fallback keeps a stable, named image surface when a marketplace thumbnail is unavailable." title="Design thumbnail fallback"><DashboardImage alt="Synthetic fern design thumbnail unavailable" fallback="SF" src={null} /></DashboardSection></DashboardPage>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "light"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Review this real composition with the operating system reduced-motion preference enabled. Its shared loading primitives remove non-essential animation under that media preference."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Review this real composition with forced colours enabled. Its borders, focus treatment and status text retain explicit, non-colour meaning through the governed UI contract."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};const B=["Populated","Loading","Updating","Empty","Error","LongLabels","ImageFallback","Light","Dark","ReducedMotion","ForcedColours"];export{d as Dark,s as Empty,o as Error,m as ForcedColours,i as ImageFallback,l as Light,r as Loading,n as LongLabels,a as Populated,c as ReducedMotion,t as Updating,B as __namedExportsOrder,$ as default};
