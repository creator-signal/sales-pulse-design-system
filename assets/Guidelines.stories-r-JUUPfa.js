import{j as i}from"./iframe-C7zCaA2D.js";import{r as s,S as a,M as d}from"./GuidanceReference-nQIo_Eg4.js";import"./preload-helper-x6r9jKQR.js";import"./server-cdnA_SQe.js";import"./language-system-DH52-XIR.js";const c=({mode:e="overview"})=>i.jsxs(a,{sectionId:"guidelines",...e==="bidirectional"?{direction:"rtl"}:{},...e==="motion"?{entryFilter:t=>["guidelines-motion-feedback","guidelines-transitions","guidelines-choreography","guidelines-decorative-animation","guidelines-reduced-motion"].includes(t.id)}:e==="bidirectional"?{entryFilter:t=>["guidelines-international-accessibility","guidelines-bidirectional"].includes(t.id)}:{},children:[e==="motion"?i.jsx(d,{}):null,e==="bidirectional"?i.jsxs("aside",{className:"cs-guidance-review-note",role:"note",children:[i.jsx("strong",{children:"RTL layout review"}),i.jsx("span",{children:"English reference content is deliberately mirrored only to test logical layout. It is not presented as a translated locale."})]}):null]}),v={title:"DLS/Guidelines",component:c,tags:["autodocs"],args:{mode:"overview"}},r={},o={args:{mode:"bidirectional"},...s},n={args:{mode:"motion"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "bidirectional"
  },
  ...rtlStoryParameters
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    mode: "motion"
  }
}`,...n.parameters?.docs?.source}}};const y=["Overview","BidirectionalAndInternational","MotionAndReducedMotion"];export{o as BidirectionalAndInternational,n as MotionAndReducedMotion,r as Overview,y as __namedExportsOrder,v as default};
