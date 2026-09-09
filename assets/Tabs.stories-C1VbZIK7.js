import{a as s,b as r,c as n,d as o,j as e}from"./iframe-C7zCaA2D.js";import"./preload-helper-x6r9jKQR.js";const{expect:l,userEvent:v,within:c}=__STORYBOOK_MODULE_TEST__,m={id:"dls-widgets-tabs-behaviour",title:"Components/Interaction/Tabs",component:o,subcomponents:{TabList:n,Tab:r,TabPanel:s},tags:["autodocs"],args:{defaultValue:"overview"}},a={render:()=>e.jsxs("main",{className:"cs-story-shell",children:[e.jsx("h1",{children:"Tabs"}),e.jsxs(o,{defaultValue:"overview",children:[e.jsxs(n,{label:"Report sections",children:[e.jsx(r,{value:"overview",children:"Overview"}),e.jsx(r,{value:"orders",children:"Orders"}),e.jsx(r,{value:"customers",children:"Customers"})]}),e.jsx(s,{value:"overview",children:"Overview combines useful signals."}),e.jsx(s,{value:"orders",children:"Orders explain each signal."}),e.jsx(s,{value:"customers",children:"Customers show repeat behaviour."})]})]}),play:async({canvasElement:i})=>{const t=c(i);t.getByRole("tab",{name:"Overview"}).focus(),await v.keyboard("{ArrowRight}"),await l(t.getByRole("tab",{name:"Orders"})).toHaveAttribute("aria-selected","true")}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <main className="cs-story-shell"><h1>Tabs</h1><Tabs defaultValue="overview"><TabList label="Report sections"><Tab value="overview">Overview</Tab><Tab value="orders">Orders</Tab><Tab value="customers">Customers</Tab></TabList><TabPanel value="overview">Overview combines useful signals.</TabPanel><TabPanel value="orders">Orders explain each signal.</TabPanel><TabPanel value="customers">Customers show repeat behaviour.</TabPanel></Tabs></main>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const overview = canvas.getByRole("tab", {
      name: "Overview"
    });
    overview.focus();
    await userEvent.keyboard("{ArrowRight}");
    await expect(canvas.getByRole("tab", {
      name: "Orders"
    })).toHaveAttribute("aria-selected", "true");
  }
}`,...a.parameters?.docs?.source}}};const w=["KeyboardNavigation"];export{a as KeyboardNavigation,w as __namedExportsOrder,m as default};
