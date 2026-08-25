function r(e){if(!e.startsWith("/")||e.startsWith("//"))throw new Error(`Design System reference paths must be root-relative: ${e}`);return`/sales-pulse-design-system/${e.slice(1)}`}export{r};
