import{r as c,j as e}from"./iframe-BFiVLeqW.js";import{B as I,I as w,Q as S,s as E}from"./server-BY0IE8Dc.js";import{r as R}from"./reference-path-0W2XsWDg.js";import{s as H}from"./spoonflower-homepage-D1I4Y7E3.js";import"./preload-helper-x6r9jKQR.js";const{expect:l,userEvent:k,within:O}=__STORYBOOK_MODULE_TEST__,B={importing:{title:"Importing statements · 8 of 20",detail:"Statements phase · your work continues in the background",tone:"info"},paused:{title:"Import paused",detail:"Waiting for Spoonflower to be available",tone:"warning"},failed:{title:"Helper needs attention",detail:"Open activity for recovery details",tone:"error"},complete:{title:"Import complete · 20 statements",detail:"Saved in Sales Pulse · just now",tone:"success"},empty:{title:"Check complete · no new statements",detail:"Last checked just now",tone:"neutral"},newContent:{title:"1 new item ready",detail:"Your work continues in the background",tone:"info"},connectionRecovery:{title:"Unavailable",detail:"Check the connection in Sales Pulse",tone:"error"}};function d({children:t}){return e.jsx("span",{"aria-hidden":"true",className:"cs-helper-toolbar-v2-menu__action-icon",children:t})}function P({dock:t}){const r=t.startsWith("top"),o=t.endsWith("left")?"left":t.endsWith("right")?"right":"center",a=o==="left"?"M5 1.5h6":o==="right"?"M13 1.5h6":"M9 1.5h6",s=o==="left"?"M5 16.5h6":o==="right"?"M13 16.5h6":"M9 16.5h6",i=o==="left"?"M1.5 5v5":o==="right"?"M22.5 5v5":r?"M12 1.5v2":"M12 14.5v2";return e.jsxs("svg",{"aria-hidden":"true",className:"cs-helper-toolbar-v2-menu__dock-icon",viewBox:"0 0 24 18",children:[e.jsx("rect",{x:"3",y:"3",width:"18",height:"12",rx:"1.5"}),e.jsx("path",{d:r?a:s,className:"cs-helper-toolbar-v2-menu__dock-indicator"}),e.jsx("path",{d:i,className:"cs-helper-toolbar-v2-menu__dock-indicator"})]})}function D({theme:t}){return t==="light"?e.jsxs("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",children:[e.jsx("circle",{cx:"12",cy:"12",r:"4"}),e.jsx("path",{d:"M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"})]}):t==="dark"?e.jsx("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M20.2 15.6A8.5 8.5 0 0 1 8.4 3.8 8.5 8.5 0 1 0 20.2 15.6Z"})}):e.jsxs("svg",{"aria-hidden":"true",viewBox:"0 0 24 24",children:[e.jsx("rect",{x:"3",y:"4",width:"18",height:"13",rx:"1.5"}),e.jsx("path",{d:"M9 21h6m-3-4v4"})]})}function L({scenario:t="importing",signedIn:r=!1,menuInitiallyOpen:o=!1}){const[a,s]=c.useState(o),[i,M]=c.useState("bottom-right"),[N,T]=c.useState("system"),j=B[t];c.useEffect(()=>s(o),[o]),c.useEffect(()=>{if(!a)return;const n=_=>{_.key==="Escape"&&(_.preventDefault(),s(!1),window.requestAnimationFrame(()=>document.getElementById("helper-toolbar-v2-menu-button")?.focus()))};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[a]);const C=()=>{s(!1),window.requestAnimationFrame(()=>document.getElementById("helper-toolbar-v2-menu-button")?.focus())};return e.jsxs("main",{className:"cs-helper-toolbar-v2-story",children:[e.jsxs("header",{className:"cs-helper-toolbar-v2-reference",children:[e.jsxs("div",{children:[e.jsx(I,{tone:"warning",children:"Planned · synthetic interactive preview"}),e.jsx("h1",{children:"Helper floating toolbar V2"}),e.jsx("p",{children:"A fixed-height toolbar. Its menu overlays the page instead of expanding the bar."})]}),e.jsx("a",{href:R("/?path=/story/dls-start-here-current-and-planned--overview"),target:"_top",children:"Current and planned"})]}),e.jsxs("section",{className:"cs-helper-toolbar-v2-canvas","aria-label":"Synthetic Spoonflower page",children:[e.jsx("img",{src:H,alt:""}),e.jsxs("div",{className:`cs-helper-toolbar-v2 cs-helper-toolbar-v2--${i}`,"aria-label":"Sales Pulse Helper toolbar",children:[e.jsx(w,{icon:"⠿",label:"Move toolbar",variant:"ghost",className:"cs-helper-toolbar-v2__move"}),e.jsxs("div",{className:"cs-helper-toolbar-v2__status",role:"status","aria-live":"polite",children:[e.jsx("strong",{children:j.title}),e.jsx("small",{children:j.detail})]}),r?e.jsx(S,{variant:"ghost",className:"cs-helper-toolbar-v2__profile","aria-label":"Open Sample Studio profile",children:e.jsx("span",{"aria-hidden":"true",children:"SS"})}):e.jsx(S,{className:"cs-helper-toolbar-v2__signin",onClick:()=>{},children:"Sign in"}),e.jsx(w,{id:"helper-toolbar-v2-menu-button",icon:"☰",label:"Toolbar menu",variant:"ghost","aria-expanded":a,"aria-controls":"helper-toolbar-v2-menu",onClick:()=>s(n=>!n)}),e.jsx(w,{icon:"×",label:"Hide toolbar",variant:"ghost"})]}),a&&e.jsxs("section",{id:"helper-toolbar-v2-menu",className:`cs-helper-toolbar-v2-menu cs-helper-toolbar-v2-menu--${i}`,"aria-label":"Toolbar menu",onKeyDown:n=>{n.key==="Escape"&&(n.preventDefault(),C())},children:[e.jsx(E,{href:"https://salespulse.creatorsignal.me/sales-pulse/spoonflower/activity",target:"_blank",rel:"noopener noreferrer",className:"cs-helper-toolbar-v2-menu__action",variant:"ghost",leadingIcon:e.jsx(d,{children:"◷"}),children:"View activity"}),e.jsxs("section",{className:"cs-helper-toolbar-v2-menu__section","aria-label":"Documentation",children:[e.jsx("h2",{children:"Documentation"}),e.jsxs("nav",{"aria-label":"Helper documentation",children:[e.jsxs("a",{className:"cs-helper-toolbar-v2-menu__action",href:"#welcome",children:[e.jsx(d,{children:"✦"}),"Welcome tour"]}),e.jsxs("a",{className:"cs-helper-toolbar-v2-menu__action",href:"#help",children:[e.jsx(d,{children:"?"}),"Help & documentation"]}),e.jsxs("a",{className:"cs-helper-toolbar-v2-menu__action",href:"#whats-new",children:[e.jsx(d,{children:"✧"}),"What’s new"]})]})]}),e.jsxs("section",{className:"cs-helper-toolbar-v2-menu__section","aria-label":"Position",children:[e.jsx("h2",{children:"Position"}),e.jsx("div",{className:"cs-helper-toolbar-v2-menu__dock-grid",role:"group","aria-label":"Choose toolbar position",children:["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"].map(n=>e.jsx("button",{type:"button","aria-label":`Dock toolbar ${n.replace("-"," ")}`,"aria-pressed":i===n,onClick:()=>M(n),children:e.jsx(P,{dock:n})},n))})]}),e.jsxs("section",{className:"cs-helper-toolbar-v2-menu__section","aria-label":"Theme",children:[e.jsx("h2",{children:"Theme"}),e.jsx("div",{className:"cs-helper-toolbar-v2-menu__theme-grid",role:"group","aria-label":"Choose toolbar theme",children:["system","light","dark"].map(n=>e.jsx("button",{type:"button","aria-label":`Use ${n} theme`,"aria-pressed":N===n,onClick:()=>T(n),children:e.jsx(D,{theme:n})},n))})]})]})]}),e.jsxs("footer",{children:[e.jsxs(I,{tone:j.tone,children:["Sample ",t," state"]}),e.jsx("p",{children:"Signed-out stories show a clear Sales Pulse sign-in action. Signed-in stories show a synthetic Sample Studio profile avatar. Both use the same fixed-height toolbar."})]})]})}const A={id:"products-planned-helper-toolbar-v2",title:"Planned/Helper floating toolbar V2",component:L,tags:["autodocs"],parameters:{docs:{description:{component:"Planned Design System reference for issue #1695. This is an overlay-menu proposal only; it does not implement extension authentication, profile data, activity navigation, preference persistence, or background work."}}},argTypes:{scenario:{control:"select",options:Object.keys(B)},signedIn:{control:"boolean"},menuInitiallyOpen:{control:"boolean"}}},m={args:{scenario:"importing",signedIn:!1}},p={args:{scenario:"importing",signedIn:!0}},u={args:{scenario:"importing",signedIn:!0,menuInitiallyOpen:!0}},h={args:{scenario:"paused",signedIn:!0}},g={args:{scenario:"failed",signedIn:!0}},b={args:{scenario:"complete",signedIn:!0}},v={args:{scenario:"empty",signedIn:!0}},x={args:{scenario:"newContent",signedIn:!0}},f={args:{scenario:"connectionRecovery",signedIn:!1}},y={args:{scenario:"importing",signedIn:!0},play:async({canvasElement:t})=>{const r=O(t),o=r.getByLabelText("Sales Pulse Helper toolbar"),a=o.getBoundingClientRect().height;await k.click(r.getByRole("button",{name:"Toolbar menu"})),await l(r.getByRole("region",{name:"Toolbar menu"})).toBeVisible(),await l(o.getBoundingClientRect().height).toBe(a),await k.keyboard("{Escape}"),await l(r.queryByRole("region",{name:"Toolbar menu"})).toBeNull(),await l(r.getByRole("button",{name:"Toolbar menu"})).toHaveFocus()}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    scenario: "importing",
    signedIn: false
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    scenario: "importing",
    signedIn: true
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    scenario: "importing",
    signedIn: true,
    menuInitiallyOpen: true
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    scenario: "paused",
    signedIn: true
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    scenario: "failed",
    signedIn: true
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    scenario: "complete",
    signedIn: true
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    scenario: "empty",
    signedIn: true
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    scenario: "newContent",
    signedIn: true
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    scenario: "connectionRecovery",
    signedIn: false
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    scenario: "importing",
    signedIn: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toolbar = canvas.getByLabelText("Sales Pulse Helper toolbar");
    const initialHeight = toolbar.getBoundingClientRect().height;
    await userEvent.click(canvas.getByRole("button", {
      name: "Toolbar menu"
    }));
    await expect(canvas.getByRole("region", {
      name: "Toolbar menu"
    })).toBeVisible();
    await expect(toolbar.getBoundingClientRect().height).toBe(initialHeight);
    await userEvent.keyboard("{Escape}");
    await expect(canvas.queryByRole("region", {
      name: "Toolbar menu"
    })).toBeNull();
    await expect(canvas.getByRole("button", {
      name: "Toolbar menu"
    })).toHaveFocus();
  }
}`,...y.parameters?.docs?.source}}};const $=["ImportingSignedOut","ImportingSignedIn","MenuOpen","Paused","Failed","Complete","Empty","NewContent","ConnectionRecovery","KeyboardMenu"];export{b as Complete,f as ConnectionRecovery,v as Empty,g as Failed,p as ImportingSignedIn,m as ImportingSignedOut,y as KeyboardMenu,u as MenuOpen,x as NewContent,h as Paused,$ as __namedExportsOrder,A as default};
