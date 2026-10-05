import{j as e}from"./iframe-DN7WaDxK.js";import{B as y}from"./server-B3VGD189.js";import{r as f}from"./reference-path-0W2XsWDg.js";import{H as I}from"./HelperToolbarReference-DaXebuS8.js";import{s as v}from"./spoonflower-homepage-D1I4Y7E3.js";import"./preload-helper-x6r9jKQR.js";const{expect:r,userEvent:h,within:x}=__STORYBOOK_MODULE_TEST__;function w(u){return e.jsxs("main",{className:"cs-helper-toolbar-v2-story",children:[e.jsxs("header",{className:"cs-helper-toolbar-v2-reference",children:[e.jsxs("div",{children:[e.jsx(y,{tone:"success",children:"Current toolbar · synthetic reference"}),e.jsx("h1",{children:"Helper toolbar"}),e.jsx("p",{children:"A fixed-height toolbar. Its menu overlays the page instead of expanding the bar."})]}),e.jsx("a",{href:f("/?path=/story/dls-start-here-current-and-planned--overview"),target:"_top",children:"Current and planned"})]}),e.jsxs("section",{className:"cs-helper-toolbar-v2-canvas","aria-label":"Synthetic Spoonflower page",children:[e.jsx("img",{src:v,alt:""}),e.jsx(I,{...u})]}),e.jsx("footer",{children:e.jsx("p",{children:"The selected Helper toolbar. Sample accounts and activity are synthetic; this reference performs no authentication, provider action or persistence."})})]})}const H={id:"products-planned-helper-toolbar-v2",title:"Products/Helper toolbar",component:w,tags:["autodocs"],parameters:{docs:{description:{component:"Current Helper toolbar, selected from #1695 and implemented by #1703/#1729. The fixed-height bar and anchored menu are reused by welcome references. Synthetic reference only: no authentication, profile data, preference persistence or background work."}}},argTypes:{scenario:{control:"select",options:["importing","paused","failed","complete","empty","newContent","connectionRecovery"]},signedIn:{control:"boolean"},menuInitiallyOpen:{control:"boolean"}}},a={args:{scenario:"importing",signedIn:!1}},o={args:{scenario:"importing",signedIn:!0}},t={args:{scenario:"importing",signedIn:!0,menuInitiallyOpen:!0}},s={args:{scenario:"paused",signedIn:!0}},i={args:{scenario:"failed",signedIn:!0}},c={args:{scenario:"complete",signedIn:!0}},l={args:{scenario:"empty",signedIn:!0}},p={args:{scenario:"newContent",signedIn:!0}},d={args:{scenario:"connectionRecovery",signedIn:!1}},m={args:{scenario:"importing",signedIn:!0},play:async({canvasElement:u})=>{const n=x(u),g=n.getByLabelText("Sales Pulse Helper toolbar"),b=g.getBoundingClientRect().height;await h.click(n.getByRole("button",{name:"Toolbar menu"})),await r(n.getByRole("region",{name:"Toolbar menu"})).toBeVisible(),await r(g.getBoundingClientRect().height).toBe(b),await h.keyboard("{Escape}"),await r(n.queryByRole("region",{name:"Toolbar menu"})).toBeNull(),await r(n.getByRole("button",{name:"Toolbar menu"})).toHaveFocus()}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    scenario: "importing",
    signedIn: false
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    scenario: "importing",
    signedIn: true
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    scenario: "importing",
    signedIn: true,
    menuInitiallyOpen: true
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    scenario: "paused",
    signedIn: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    scenario: "failed",
    signedIn: true
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    scenario: "complete",
    signedIn: true
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    scenario: "empty",
    signedIn: true
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    scenario: "newContent",
    signedIn: true
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    scenario: "connectionRecovery",
    signedIn: false
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const E=["ImportingSignedOut","ImportingSignedIn","MenuOpen","Paused","Failed","Complete","Empty","NewContent","ConnectionRecovery","KeyboardMenu"];export{c as Complete,d as ConnectionRecovery,l as Empty,i as Failed,o as ImportingSignedIn,a as ImportingSignedOut,m as KeyboardMenu,t as MenuOpen,p as NewContent,s as Paused,E as __namedExportsOrder,H as default};
