import{R as e,r as A,j as de}from"./iframe-Cayqf6GY.js";import{u as ee,A as _e}from"./client-CG7x5Btc.js";import{O as L,B as ne,s as O,N as ce,Q as D,x as q,u as C,m as _,T as ge,W as Me,V as Te,R as be,h as pe,f as ve,d as ye,b as H,c as M,g as he,e as y,C as Ae}from"./server-blcMU88S.js";import{D as Le,d as Pe,f as Ie,a as R,c as we,e as Fe,g as ie,b as je}from"./dashboard-compositions-Dpyg13Wa.js";import{S as te}from"./import-options-route-Clc_Dw0g.js";import"./preload-helper-x6r9jKQR.js";const He="_sales_v0kji_1",We="_hero_v0kji_11",Oe="_trendCard_v0kji_28",Ue="_designCopy_v0kji_30",xe="_periodSticky_v0kji_44",Be="_content_v0kji_50",Ke="_chartGrid_v0kji_55",$e="_chartScroll_v0kji_63",Ve="_gridline_v0kji_82",Ge="_revenueLine_v0kji_87",ze="_revenuePoint_v0kji_95",Ye="_categoryBars_v0kji_101",Ze="_categoryRow_v0kji_103",Qe="_categoryTrack_v0kji_110",Xe="_revenueTrack_v0kji_111",Je="_series1_v0kji_122",ea="_series2_v0kji_125",aa="_series3_v0kji_130",ra="_inlineEmpty_v0kji_135",na="_thumbnailControl_v0kji_144",ta="_thumbnailAction_v0kji_149",sa="_removeThumbnail_v0kji_172",la="_lockedPreview_v0kji_180",ia="_lockedBars_v0kji_190",oa="_trendGroups_v0kji_204",ua="_trendList_v0kji_206",ma="_designGrid_v0kji_236",da="_designCard_v0kji_243",ca="_designImage_v0kji_253",ga="_more_v0kji_275",ba="_customerList_v0kji_277",pa="_sortButton_v0kji_290",va="_dataActions_v0kji_298",ya="_actionRow_v0kji_303",ha="_personalisation_v0kji_309",wa="_appearanceFields_v0kji_314",ka="_insightChoices_v0kji_320",Ea="_visuallyHidden_v0kji_334",t={sales:He,hero:We,trendCard:Oe,designCopy:Ue,periodSticky:xe,content:Be,chartGrid:Ke,chartScroll:$e,gridline:Ve,revenueLine:Ge,revenuePoint:ze,categoryBars:Ye,categoryRow:Ze,categoryTrack:Qe,revenueTrack:Xe,series1:Je,series2:ea,series3:aa,inlineEmpty:ra,thumbnailControl:na,thumbnailAction:ta,removeThumbnail:sa,lockedPreview:la,lockedBars:ia,trendGroups:oa,trendList:ua,designGrid:ma,designCard:da,designImage:ca,more:ga,customerList:ba,sortButton:pa,dataActions:va,actionRow:ya,personalisation:ha,appearanceFields:wa,insightChoices:ka,visuallyHidden:Ea},oe=["totalSales","avgMonthly","avgOrder","repeatRate","bestMonth","topWallpaperMaterial","topFabricMaterial","designsSold"],ke=[["all","web.common.allTime"],["30","web.common.last30Days"],["90","web.common.last3Months"],["180","web.common.last6Months"],["ytd","web.common.thisYear"],["lastyear","web.common.lastYear"],["custom","web.common.customRange"]];function se(u,i){return Math.max(1,Math.ceil(u/i))}function Ee(u,i){return i(`${u}T00:00:00Z`,{day:"numeric",month:"short",year:"numeric",timeZone:"UTC"})}function le({designKey:u,manualThumbnail:i,mediaVisible:a,name:m,onRemove:c,onUpload:p,url:g}){const{t:s}=ee(),b=a?g:null,w=s(b?"web.salesDashboard.replaceImage":"web.salesDashboard.uploadImage");return e.createElement("div",{className:t.thumbnailControl,"data-manual-thumbnail":i||void 0},e.createElement("label",{"aria-label":s("web.salesDashboard.imageFor",{action:w,name:m}),className:t.thumbnailAction,title:w},e.createElement(je,{alt:m,fallback:m.slice(0,1).toUpperCase(),src:b}),e.createElement("input",{accept:"image/jpeg,image/png,image/webp,image/gif",onChange:E=>p(u,E),type:"file"})),i?e.createElement(D,{"aria-label":s("web.salesDashboard.removeImageFor",{name:m}),className:t.removeThumbnail,onClick:()=>c(u),variant:"danger"},"×"):null)}function Sa({currency:u,points:i}){const a=ee(),m=i.reduce((l,v)=>l+Number(v.revenue),0),c=i.length<2?a.t("web.salesDashboard.growthEmpty"):a.t("web.salesDashboard.growthSummary",{months:a.number(i.length),revenue:a.currency(m,u)});if(i.length<2)return e.createElement(ie,{legend:[],summary:c,title:a.t("web.salesDashboard.growth")},e.createElement("p",{className:t.inlineEmpty},a.t("web.salesDashboard.growthEmpty")));const p=720,g=260,s=42,b=i.map(l=>Number(l.revenue)),w=Math.max(...b,1),E=i.map((l,v)=>({point:l,x:s+v*(p-s*2)/Math.max(i.length-1,1),y:g-s-Number(l.revenue)/w*(g-s*2)})),I=E.map(({x:l,y:v},N)=>`${N===0?"M":"L"}${l},${v}`).join(" "),F=Math.ceil(i.length/6);return e.createElement(ie,{description:a.t("web.salesDashboard.growthChartMeaning"),legend:[{label:a.t("web.salesDashboard.netEarningsSeries"),tone:"series-1",value:a.currency(m,u)}],summary:c,title:a.t("web.salesDashboard.growth")},e.createElement("div",{"aria-label":a.t("web.salesDashboard.monthlyRevenueLabel"),className:t.chartScroll,role:"region",tabIndex:0},e.createElement("svg",{"aria-label":a.t("web.salesDashboard.monthlyRevenueLabel"),role:"img",viewBox:`0 0 ${p} ${g}`},[0,1,2,3].map(l=>{const v=s+l*(g-s*2)/3;return e.createElement("line",{className:t.gridline,key:l,x1:s,x2:p-s,y1:v,y2:v})}),e.createElement("path",{className:t.revenueLine,d:I}),E.map(({point:l,x:v,y:N},T)=>e.createElement("g",{key:l.month},e.createElement("circle",{className:t.revenuePoint,cx:v,cy:N,r:"5"},e.createElement("title",null,a.t("web.salesDashboard.monthPoint",{month:l.month,revenue:a.currency(Number(l.revenue),u)}))),T%F===0||T===E.length-1?e.createElement("text",{textAnchor:"middle",x:v,y:g-14},a.date(`${l.month}-01T00:00:00Z`,{month:"short",timeZone:"UTC"})):null)))),e.createElement("ul",{className:t.visuallyHidden},i.map(l=>e.createElement("li",{key:l.month},a.t("web.salesDashboard.monthPoint",{month:l.month,revenue:a.currency(Number(l.revenue),u)})))))}function Da({currency:u,rows:i}){const a=ee(),m=i.reduce((s,b)=>s+Number(b.revenue),0),c=["series1","series2","series3"],p=i.filter(s=>Number(s.revenue)>0),g=[...p].sort((s,b)=>Number(b.revenue)-Number(s.revenue))[0];return e.createElement(ie,{description:a.t("web.salesDashboard.categoryHelp"),legend:p.map((s,b)=>({label:s.category,tone:`series-${b+1}`,value:`${a.number(Math.round(Number(s.revenue)/m*100))}%`})),summary:g?a.t("web.salesDashboard.categorySummary",{category:g.category,revenue:a.currency(Number(g.revenue),u)}):a.t("web.salesDashboard.noSales"),title:a.t("web.salesDashboard.categoryHeading")},m<=0?e.createElement("p",{className:t.inlineEmpty},a.t("web.salesDashboard.noSales")):e.createElement("div",{className:t.categoryBars},p.map((s,b)=>{const w=Math.round(Number(s.revenue)/m*100);return e.createElement("div",{className:t.categoryRow,key:s.category},e.createElement("span",null,s.category),e.createElement("div",{"aria-label":a.t("web.salesDashboard.categoryBarLabel",{category:s.category,percentage:a.number(w)}),className:t.categoryTrack,role:"img"},e.createElement("span",{className:t[c[b]??"series1"],style:{inlineSize:`${w}%`}})),e.createElement("strong",null,a.number(w),"%"),e.createElement("span",null,a.currency(Number(s.revenue),u)))})))}function P({label:u,onClick:i}){return e.createElement(D,{className:t.lockedPreview,onClick:i,variant:"secondary"},e.createElement("span",{"aria-hidden":"true",className:t.lockedBars},e.createElement("i",null),e.createElement("i",null),e.createElement("i",null)),e.createElement("strong",null,u))}function De({accent:u,customRange:i,data:a,dataMessage:m,datePreset:c,enabledInsights:p,errorMessage:g,filters:s,layout:b,onAccentChange:w,onApplyCustomRange:E,onClearData:I,onCustomRangeChange:F,onFilterChange:l,onImportBackup:v,onLayoutChange:N,onPeriodChange:T,onRemoveThumbnail:h,onResetFilters:f,onRetry:j,onShowUpgrade:k,onSortSales:fe,onToggleInsight:qe,onUploadThumbnail:ae,state:re}){const o=ee(),{t:r}=o,ue=new Set(p),Ce=a?{totalSales:o.currency(Number(a.insights.totalSales),a.currency),avgMonthly:o.currency(Number(a.insights.averageMonthlySales),a.currency),avgOrder:o.currency(Number(a.insights.averageOrderValue),a.currency),repeatRate:`${o.number(a.insights.repeatCustomerRate)}%`,bestMonth:a.insights.bestMonth?o.date(`${a.insights.bestMonth}-01T00:00:00Z`,{month:"long",year:"numeric",timeZone:"UTC"}):"—",topWallpaperMaterial:a.insights.topWallpaperMaterial??"—",topFabricMaterial:a.insights.topFabricMaterial??"—",designsSold:o.number(a.insights.designsWithSales)}:{totalSales:"—",avgMonthly:"—",avgOrder:"—",repeatRate:"—",bestMonth:"—",topWallpaperMaterial:"—",topFabricMaterial:"—",designsSold:"—"},me={totalSales:r("web.salesDashboard.insightLabels.totalSales"),avgMonthly:r("web.salesDashboard.insightLabels.avgMonthly"),avgOrder:r("web.salesDashboard.insightLabels.avgOrder"),repeatRate:r("web.salesDashboard.insightLabels.repeatRate"),bestMonth:r("web.salesDashboard.insightLabels.bestMonth"),topWallpaperMaterial:r("web.salesDashboard.insightLabels.topWallpaperMaterial"),topFabricMaterial:r("web.salesDashboard.insightLabels.topFabricMaterial"),designsSold:r("web.salesDashboard.insightLabels.designsSold")},W=c==="custom"?r("web.salesDashboard.customRangeStatus",{from:i.from||"—",to:i.to||"—"}):r(ke.find(([n])=>n===c)?.[1]??"web.common.allTime"),Re={emptyDescription:r("web.salesDashboard.emptyDescription"),emptyTitle:r("web.salesDashboard.emptyTitle"),errorDescription:g||r("web.salesDashboard.loadFailed"),errorTitle:r("web.salesDashboard.errorTitle"),loadingLabel:r("web.salesDashboard.loading"),updatingLabel:r("web.salesDashboard.refreshing")};return e.createElement("div",{className:t.sales,"data-accent":u,"data-layout":b},e.createElement(Le,{label:r("web.salesDashboard.heading"),showHelperProgress:!0},e.createElement(L,{className:t.hero},e.createElement("div",null,e.createElement(ne,{tone:a?.access.mode==="limited"?"warning":"info"},r("web.salesDashboard.heading")),e.createElement("h1",null,r("web.salesDashboard.shopPerformance")),e.createElement("p",null,r("web.salesDashboard.accountPrivacy"))),e.createElement(O,{href:te},r("web.salesDashboard.addLatestSales"))),e.createElement("div",{className:t.periodSticky},e.createElement(Pe,{applyLabel:r("web.salesDashboard.applyRange"),customRange:i,customRangeLabel:W,disabled:re==="loading",fromLabel:r("web.common.fromDate"),isApplying:re==="updating",label:r("web.common.dateRange"),onApply:E,onCustomRangeChange:F,onValueChange:n=>T(n),options:ke.map(([n,d])=>({value:n,label:r(d)})),status:c!=="custom"?W:void 0,toLabel:r("web.common.toDate"),value:c})),a&&g?e.createElement(ce,{heading:r("web.salesDashboard.updateFailedTitle"),tone:"warning"},g):null,e.createElement("h2",{className:t.visuallyHidden},r("web.salesDashboard.dataRegion")),e.createElement(Ie,{copy:Re,empty:{actions:e.createElement(O,{href:te},r("web.salesDashboard.addLatestSales"))},error:{retry:e.createElement(D,{onClick:j,variant:"secondary"},r("web.salesDashboard.tryAgain"))},label:r("web.salesDashboard.dataRegion"),state:re},a?e.createElement("div",{className:t.content,"data-dashboard-id":"dashboard.spoonflower.sales"},e.createElement("div",{"data-dashboard-data-point-id":"data.spoonflower.sales.net-revenue","data-dashboard-section-id":"dashboard.spoonflower.sales.section.overview","data-dashboard-widget-id":"dashboard.spoonflower.sales.section.overview.widget.summary",id:"dashboard.spoonflower.sales.section.overview.widget.summary"},e.createElement(R,{description:W,title:r("web.salesDashboard.atGlance")},e.createElement(we,{items:[{context:W,label:r("web.common.netRevenue"),value:o.currency(Number(a.stats.netRevenue),a.currency)},{label:r("web.common.orders"),value:o.number(a.stats.orders)},{label:r("web.salesDashboard.uniqueDesigns"),value:o.number(a.stats.uniqueDesigns)},{label:r("web.salesDashboard.accessLevel"),value:r(a.access.mode==="limited"?"web.salesDashboard.accessLimited":"web.salesDashboard.accessFull")}]}))),e.createElement("div",{className:t.chartGrid,"data-dashboard-section-id":"dashboard.spoonflower.sales.section.trending"},e.createElement("div",{"data-dashboard-data-point-id":"data.spoonflower.sales.monthly-revenue","data-dashboard-widget-id":"dashboard.spoonflower.sales.section.trending.widget.revenue-chart",id:"dashboard.spoonflower.sales.section.trending.widget.revenue-chart"},e.createElement(Sa,{currency:a.currency,points:a.monthlyRevenue})),e.createElement("div",{"data-dashboard-data-point-id":"data.spoonflower.sales.category-revenue"},e.createElement(Da,{currency:a.currency,rows:a.categoryRevenue}))),e.createElement("div",{"data-dashboard-data-point-id":"data.spoonflower.sales.insights","data-dashboard-section-id":"dashboard.spoonflower.sales.section.insights","data-dashboard-widget-id":"dashboard.spoonflower.sales.section.insights.widget.insight-cards",id:"dashboard.spoonflower.sales.section.insights.widget.insight-cards"},e.createElement(R,{description:r("web.salesDashboard.insightsHelp"),title:r("web.salesDashboard.insights")},p.length===0?e.createElement("p",{className:t.inlineEmpty},r("web.salesDashboard.insightsHidden")):e.createElement(we,{items:oe.filter(n=>ue.has(n)).map(n=>({label:me[n],value:Ce[n]}))}))),e.createElement("div",{"data-dashboard-data-point-id":"data.spoonflower.sales.trend-change","data-dashboard-widget-id":"dashboard.spoonflower.sales.section.trending.widget.trend-comparison",id:"dashboard.spoonflower.sales.section.trending.widget.trend-comparison"},e.createElement(R,{actions:a.access.searchAllowed?e.createElement(q,null,e.createElement(C,{htmlFor:"sales-trend-period"},r("web.salesDashboard.trendingPeriod")),e.createElement(_,{id:"sales-trend-period",onChange:n=>l("trendPeriod",n.target.value),value:s.trendPeriod},e.createElement("option",{value:"week"},r("web.common.week")),e.createElement("option",{value:"month"},r("web.common.month")),e.createElement("option",{value:"quarter"},r("web.common.quarter")),e.createElement("option",{value:"year"},r("web.common.year")))):void 0,description:a.trends.description,title:r("web.salesDashboard.trending")},a.access.mode==="limited"?e.createElement(P,{label:r("web.salesDashboard.trendingLocked"),onClick:()=>k("dashboard-results",a.stats.uniqueDesigns)}):a.trends.hasComparison?e.createElement("div",{className:t.trendGroups},a.trends.rising.length>0?e.createElement("section",null,e.createElement("h3",null,r("web.salesDashboard.rising")),e.createElement("div",{className:t.trendList},a.trends.rising.map(n=>e.createElement(L,{className:t.trendCard,key:n.designKey},e.createElement(le,{...n,mediaVisible:a.access.mediaVisible,name:n.designName,onRemove:h,onUpload:ae,url:n.thumbnailUrl}),e.createElement("div",null,e.createElement("h4",null,n.designName),e.createElement("p",null,n.designId?r("web.salesDashboard.designId",{id:n.designId}):r("web.salesDashboard.designIdUnavailable")),e.createElement("p",null,o.currency(Number(n.previousRevenue),a.currency)," → ",o.currency(Number(n.currentRevenue),a.currency))),e.createElement(ne,{tone:"neutral"},r("web.salesDashboard.growthPercent",{percentage:o.number(n.growthPercent)})))))):null,a.trends.newDesigns.length>0?e.createElement("section",null,e.createElement("h3",null,r("web.salesDashboard.newPeriod")),e.createElement("div",{className:t.trendList},a.trends.newDesigns.map(n=>e.createElement(L,{className:t.trendCard,key:n.designKey},e.createElement(le,{...n,mediaVisible:a.access.mediaVisible,name:n.designName,onRemove:h,onUpload:ae,url:n.thumbnailUrl}),e.createElement("div",null,e.createElement("h4",null,n.designName),e.createElement("p",null,n.designId?r("web.salesDashboard.designId",{id:n.designId}):r("web.salesDashboard.designIdUnavailable")),e.createElement("p",null,r("web.salesDashboard.firstSalePeriod"))),e.createElement("strong",null,o.currency(Number(n.currentRevenue),a.currency)))))):null):e.createElement("p",{className:t.inlineEmpty},r("web.salesDashboard.comparisonEmpty")))),e.createElement("div",{"data-dashboard-data-point-id":"data.spoonflower.sales.best-sellers","data-dashboard-section-id":"dashboard.spoonflower.sales.section.records","data-dashboard-widget-id":"dashboard.spoonflower.sales.section.records.widget.best-sellers",id:"dashboard.spoonflower.sales.section.records.widget.best-sellers"},e.createElement(R,{description:r("web.salesDashboard.bestHelp"),title:r("web.salesDashboard.bestSellers")},a.access.searchAllowed?e.createElement(Fe,{label:r("web.salesDashboard.bestSellerFilters")},e.createElement(q,null,e.createElement(C,{htmlFor:"sales-category"},r("web.common.category")),e.createElement(_,{id:"sales-category",onChange:n=>l("category",n.target.value),value:s.category},e.createElement("option",{value:""},r("web.salesDashboard.allCategories")),a.filterOptions.categories.map(n=>e.createElement("option",{key:n},n)))),e.createElement(q,null,e.createElement(C,{htmlFor:"sales-format"},r("web.common.format")),e.createElement(_,{id:"sales-format",onChange:n=>l("format",n.target.value),value:s.format},e.createElement("option",{value:""},r("web.salesDashboard.allFormats")),a.filterOptions.formats.map(n=>e.createElement("option",{key:n},n)))),s.category==="Wallpaper"||s.category==="Fabric"?e.createElement(q,null,e.createElement(C,{htmlFor:"sales-material"},r("web.common.material")),e.createElement(_,{id:"sales-material",onChange:n=>l("material",n.target.value),value:s.material},e.createElement("option",{value:""},r("web.salesDashboard.allMaterials")),a.filterOptions.materials.map(n=>e.createElement("option",{key:n},n)))):null,e.createElement(q,null,e.createElement(C,{htmlFor:"sales-search"},r("web.salesDashboard.searchDesigns")),e.createElement(ge,{id:"sales-search",onChange:n=>l("search",n.target.value),placeholder:r("web.salesDashboard.searchPlaceholder"),value:s.search})),e.createElement(D,{onClick:f,variant:"secondary"},r("web.salesDashboard.resetFilters"))):e.createElement(P,{label:r("web.salesDashboard.unlockDashboardTools"),onClick:()=>k("dashboard-tools")}),a.bestSellers.items.length===0?e.createElement("p",{className:t.inlineEmpty},r("web.salesDashboard.noFilterMatch")):e.createElement("div",{className:t.designGrid},a.bestSellers.items.map(n=>e.createElement(L,{className:t.designCard,key:n.designKey},e.createElement("div",{className:t.designImage},e.createElement(le,{...n,mediaVisible:a.access.mediaVisible,name:n.designName,onRemove:h,onUpload:ae,url:n.thumbnailUrl})),e.createElement("div",{className:t.designCopy},e.createElement(ne,{tone:"neutral"},n.category),e.createElement("h3",null,n.designName),e.createElement("p",null,n.designId?r("web.salesDashboard.designId",{id:n.designId}):r("web.salesDashboard.designIdUnavailable")),e.createElement("p",null,r("web.salesDashboard.sold",{count:o.number(n.units)})," · ",n.topMaterial),e.createElement("strong",null,o.currency(Number(n.revenue),a.currency)),e.createElement("div",{"aria-label":r("web.salesDashboard.revenueShare",{percentage:o.number(n.revenuePercent)}),className:t.revenueTrack,role:"img"},e.createElement("span",{style:{inlineSize:`${n.revenuePercent}%`}})))))),a.access.mode==="limited"&&a.bestSellers.total>a.bestSellers.items.length?Array.from({length:Math.min(a.access.lockedPreviewRows,a.bestSellers.total-a.bestSellers.items.length)},(n,d)=>e.createElement(P,{key:`best-locked-${d}`,label:r("web.salesDashboard.lockedPreview"),onClick:()=>k("dashboard-results",a.bestSellers.total)})):null,a.bestSellers.total>a.bestSellers.items.length?e.createElement(D,{className:t.more,onClick:()=>a.access.paginationAllowed?l("bestSellersLimit",s.bestSellersLimit+25):k("dashboard-results",a.bestSellers.total),variant:"secondary"},r(a.access.paginationAllowed?"web.salesDashboard.showMoreRemaining":"web.salesDashboard.unlockRemaining",{count:o.number(a.bestSellers.total-a.bestSellers.items.length),pages:o.number(se(a.bestSellers.total,a.access.pageSize))})):null)),e.createElement("div",{"data-dashboard-data-point-id":"data.spoonflower.sales.repeat-customers","data-dashboard-widget-id":"dashboard.spoonflower.sales.section.records.widget.repeat-customers",id:"dashboard.spoonflower.sales.section.records.widget.repeat-customers"},e.createElement(R,{actions:a.access.searchAllowed?e.createElement(q,null,e.createElement(C,{htmlFor:"repeat-category"},r("web.salesDashboard.repeatCategory")),e.createElement(_,{id:"repeat-category",onChange:n=>l("repeatCategory",n.target.value),value:s.repeatCategory},e.createElement("option",{value:""},r("web.salesDashboard.allCategories")),a.filterOptions.categories.map(n=>e.createElement("option",{key:n},n)))):void 0,description:r("web.salesDashboard.repeatHelp"),title:r("web.salesDashboard.repeatCustomers")},a.access.searchAllowed?null:e.createElement(P,{label:r("web.salesDashboard.unlockDashboardTools"),onClick:()=>k("dashboard-tools")}),a.repeatCustomers.items.length===0?e.createElement("p",{className:t.inlineEmpty},r("web.salesDashboard.noRepeat")):e.createElement("div",{className:t.customerList},a.repeatCustomers.items.map(n=>e.createElement(Me,{key:n.customer},e.createElement(Te,null,e.createElement("span",null,n.customer),e.createElement("span",null,r("web.salesDashboard.customerOrders",{count:o.number(n.orders)})),e.createElement("strong",null,o.currency(Number(n.revenue),a.currency))),e.createElement(be,{"aria-label":r("web.salesDashboard.customerSalesTable",{customer:n.customer})},e.createElement(pe,null,e.createElement(ve,{className:t.visuallyHidden},r("web.salesDashboard.customerSalesTable",{customer:n.customer})),e.createElement(ye,null,e.createElement(H,null,e.createElement(M,null,r("web.common.date")),e.createElement(M,null,r("web.common.design")),e.createElement(M,null,r("web.common.category")),e.createElement(M,null,r("web.common.format")),e.createElement(M,null,r("web.common.material")),e.createElement(M,null,r("web.common.netRevenue")))),e.createElement(he,null,n.purchases.map((d,Ne)=>e.createElement(H,{key:`${d.date}-${d.designName}-${Ne}`},e.createElement(y,null,Ee(d.date,o.date)),e.createElement(y,null,d.designName),e.createElement(y,null,d.category),e.createElement(y,null,d.format),e.createElement(y,null,d.material),e.createElement(y,null,o.currency(Number(d.netRevenue),a.currency)))))))))),a.access.mode==="limited"&&a.repeatCustomers.total>a.repeatCustomers.items.length?Array.from({length:Math.min(a.access.lockedPreviewRows,a.repeatCustomers.total-a.repeatCustomers.items.length)},(n,d)=>e.createElement(P,{key:`customer-locked-${d}`,label:r("web.salesDashboard.lockedPreview"),onClick:()=>k("dashboard-results",a.repeatCustomers.total)})):null,a.repeatCustomers.total>a.repeatCustomers.items.length?e.createElement(D,{className:t.more,onClick:()=>a.access.paginationAllowed?l("repeatCustomersLimit",s.repeatCustomersLimit+25):k("dashboard-results",a.repeatCustomers.total),variant:"secondary"},r(a.access.paginationAllowed?"web.salesDashboard.showMore":"web.salesDashboard.unlockRemaining",{count:o.number(a.repeatCustomers.total-a.repeatCustomers.items.length),pages:o.number(se(a.repeatCustomers.total,a.access.pageSize))})):null)),e.createElement("div",{"data-dashboard-data-point-id":"data.spoonflower.sales.rows","data-dashboard-widget-id":"dashboard.spoonflower.sales.section.records.widget.all-sales",id:"dashboard.spoonflower.sales.section.records.widget.all-sales"},e.createElement(R,{description:r("web.salesDashboard.allSalesHelp"),title:r("web.salesDashboard.allSales")},e.createElement(be,{"aria-label":r("web.salesDashboard.salesTableLabel")},e.createElement(pe,null,e.createElement(ve,{className:t.visuallyHidden},r("web.salesDashboard.salesTableLabel")),e.createElement(ye,null,e.createElement(H,null,[["date",r("web.common.date")],["designName",r("web.common.design")],["category",r("web.common.category")],["format",r("web.common.format")],["material",r("web.common.material")],["customer",r("web.common.customer")],["netRevenue",r("web.common.netRevenue")]].map(([n,d])=>e.createElement(M,{"aria-sort":s.salesSort===n?s.salesDirection==="asc"?"ascending":"descending":"none",key:n},e.createElement(D,{"aria-label":r("web.salesDashboard.sortBy",{column:d}),className:t.sortButton,onClick:()=>a.access.sortAllowed?fe(n):k("dashboard-tools"),variant:"ghost"},d,s.salesSort===n?s.salesDirection==="asc"?" ▲":" ▼":""))))),e.createElement(he,null,a.sales.items.map((n,d)=>e.createElement(H,{key:`${n.date}-${n.designName}-${d}`},e.createElement(y,null,Ee(n.date,o.date)),e.createElement(y,null,n.designName),e.createElement(y,null,n.category),e.createElement(y,null,n.format),e.createElement(y,null,n.material),e.createElement(y,null,n.customer),e.createElement(y,null,o.currency(Number(n.netRevenue),a.currency)))),a.access.mode==="limited"&&a.sales.total>a.sales.items.length?Array.from({length:Math.min(a.access.lockedPreviewRows,a.sales.total-a.sales.items.length)},(n,d)=>e.createElement(H,{key:`sale-locked-${d}`},e.createElement(y,{colSpan:7},e.createElement(P,{label:r("web.salesDashboard.lockedPreview"),onClick:()=>k("dashboard-results",a.sales.total)})))):null))),a.sales.total>a.sales.items.length?e.createElement(D,{className:t.more,onClick:()=>a.access.paginationAllowed?l("salesLimit",s.salesLimit+25):k("dashboard-results",a.sales.total),variant:"secondary"},r(a.access.paginationAllowed?"web.salesDashboard.showMoreRemaining":"web.salesDashboard.unlockRemaining",{count:o.number(a.sales.total-a.sales.items.length),pages:o.number(se(a.sales.total,a.access.pageSize))})):null)),e.createElement("div",{"data-dashboard-data-point-id":"data.spoonflower.sales.data-actions","data-dashboard-section-id":"dashboard.spoonflower.sales.section.management","data-dashboard-widget-id":"dashboard.spoonflower.sales.section.management.widget.data-actions",id:"dashboard.spoonflower.sales.section.management.widget.data-actions"},e.createElement(R,{description:r("web.salesDashboard.manageDataHelp"),title:r("web.salesDashboard.manageData")},e.createElement(L,{className:t.dataActions},e.createElement("div",{className:t.actionRow},e.createElement(O,{href:te},r("web.salesDashboard.addLatestSales")),a.access.exportAllowed?e.createElement(O,{href:"/api/v1/dashboard/spoonflower/data",variant:"secondary"},r("web.salesDashboard.exportBackup")):e.createElement(D,{onClick:()=>k("export"),variant:"secondary"},r("web.salesDashboard.exportBackup")),e.createElement(D,{onClick:I,variant:"danger"},r("web.salesDashboard.clearData"))),e.createElement(q,null,e.createElement(C,{htmlFor:"sales-backup-import"},r("web.salesDashboard.importBackup")),e.createElement(ge,{accept:"application/json,.json",id:"sales-backup-import",onChange:v,type:"file"})),m?e.createElement(ce,{heading:r("web.salesDashboard.dataStatusHeading"),tone:"info"},m):null))),e.createElement("div",{id:"personalisation"},e.createElement(R,{description:r("web.salesDashboard.personalisationHelp"),title:r("web.salesDashboard.personalisation")},e.createElement(L,{className:t.personalisation},e.createElement("div",{className:t.appearanceFields},e.createElement(q,null,e.createElement(C,{htmlFor:"sales-accent"},r("web.salesDashboard.accentLabel")),e.createElement(_,{id:"sales-accent",onChange:n=>w(n.target.value),value:u},e.createElement("option",{value:"default"},r("web.salesDashboard.accent.default")),e.createElement("option",{value:"neutral"},r("web.salesDashboard.accent.neutral")))),e.createElement(q,null,e.createElement(C,{htmlFor:"sales-layout"},r("web.salesDashboard.layoutLabel")),e.createElement(_,{id:"sales-layout",onChange:n=>N(n.target.value),value:b},e.createElement("option",{value:"visual"},r("web.salesDashboard.layout.visual")),e.createElement("option",{value:"data"},r("web.salesDashboard.layout.data"))))),e.createElement("fieldset",{className:t.insightChoices},e.createElement("legend",null,r("web.salesDashboard.chooseInsights")),oe.map(n=>e.createElement(Ae,{checked:ue.has(n),key:n,label:me[n],onChange:()=>qe(n)}))))))):null)))}De.__docgenInfo={description:"",methods:[],displayName:"SalesDashboardView",props:{accent:{required:!0,tsType:{name:"union",raw:'"default" | "neutral"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"neutral"'}]},description:""},customRange:{required:!0,tsType:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  from: string;
  to: string;
}`,signature:{properties:[{key:"from",value:{name:"string",required:!0}},{key:"to",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  from: string;
  to: string;
}>`},description:""},data:{required:!0,tsType:{name:"union",raw:"SalesDashboardData | null",elements:[{name:"signature",type:"object",raw:`{
  access: {
    mode: "limited" | "full";
    visibleRows: number;
    pageSize: number;
    lockedPreviewRows: number;
    searchAllowed: boolean;
    sortAllowed: boolean;
    paginationAllowed: boolean;
    mediaVisible: boolean;
    exportAllowed: boolean;
    upgradePlan: "starter";
  };
  theme: string;
  enabledInsights: SalesInsightId[];
  currency: string;
  stats: { netRevenue: string; orders: number; uniqueDesigns: number };
  monthlyRevenue: SalesMoneyPoint[];
  categoryRevenue: Array<{ category: SalesCategory; revenue: string }>;
  insights: {
    totalSales: string;
    averageMonthlySales: string;
    averageOrderValue: string;
    repeatCustomerRate: number;
    bestMonth: string | null;
    topWallpaperMaterial: string | null;
    topFabricMaterial: string | null;
    designsWithSales: number;
  };
  trends: {
    description: string;
    hasComparison: boolean;
    rising: Array<{
      designKey: string;
      designId: string | null;
      designName: string;
      thumbnailUrl: string | null;
      manualThumbnail: boolean;
      currentRevenue: string;
      previousRevenue: string;
      growthPercent: number;
    }>;
    newDesigns: Array<{
      designKey: string;
      designId: string | null;
      designName: string;
      thumbnailUrl: string | null;
      manualThumbnail: boolean;
      currentRevenue: string;
    }>;
  };
  bestSellers: {
    total: number;
    items: Array<{
      designKey: string;
      designId: string | null;
      designName: string;
      category: SalesCategory;
      units: number;
      revenue: string;
      revenuePercent: number;
      topMaterial: string;
      thumbnailUrl: string | null;
      manualThumbnail: boolean;
    }>;
  };
  repeatCustomers: {
    total: number;
    items: Array<{
      customer: string;
      orders: number;
      revenue: string;
      purchases: Array<{
        date: string;
        designName: string;
        category: SalesCategory;
        format: string;
        material: string;
        netRevenue: string;
      }>;
    }>;
  };
  sales: {
    total: number;
    sort: SalesSort;
    direction: "asc" | "desc";
    items: Array<{
      date: string;
      designName: string;
      category: SalesCategory;
      format: string;
      material: string;
      customer: string;
      netRevenue: string;
    }>;
  };
  filterOptions: { categories: SalesCategory[]; formats: string[]; materials: string[] };
}`,signature:{properties:[{key:"access",value:{name:"signature",type:"object",raw:`{
  mode: "limited" | "full";
  visibleRows: number;
  pageSize: number;
  lockedPreviewRows: number;
  searchAllowed: boolean;
  sortAllowed: boolean;
  paginationAllowed: boolean;
  mediaVisible: boolean;
  exportAllowed: boolean;
  upgradePlan: "starter";
}`,signature:{properties:[{key:"mode",value:{name:"union",raw:'"limited" | "full"',elements:[{name:"literal",value:'"limited"'},{name:"literal",value:'"full"'}],required:!0}},{key:"visibleRows",value:{name:"number",required:!0}},{key:"pageSize",value:{name:"number",required:!0}},{key:"lockedPreviewRows",value:{name:"number",required:!0}},{key:"searchAllowed",value:{name:"boolean",required:!0}},{key:"sortAllowed",value:{name:"boolean",required:!0}},{key:"paginationAllowed",value:{name:"boolean",required:!0}},{key:"mediaVisible",value:{name:"boolean",required:!0}},{key:"exportAllowed",value:{name:"boolean",required:!0}},{key:"upgradePlan",value:{name:"literal",value:'"starter"',required:!0}}]},required:!0}},{key:"theme",value:{name:"string",required:!0}},{key:"enabledInsights",value:{name:"Array",elements:[{name:"union",raw:`| "totalSales" | "avgMonthly" | "avgOrder" | "repeatRate" | "bestMonth"
| "topWallpaperMaterial" | "topFabricMaterial" | "designsSold"`,elements:[{name:"literal",value:'"totalSales"'},{name:"literal",value:'"avgMonthly"'},{name:"literal",value:'"avgOrder"'},{name:"literal",value:'"repeatRate"'},{name:"literal",value:'"bestMonth"'},{name:"literal",value:'"topWallpaperMaterial"'},{name:"literal",value:'"topFabricMaterial"'},{name:"literal",value:'"designsSold"'}]}],raw:"SalesInsightId[]",required:!0}},{key:"currency",value:{name:"string",required:!0}},{key:"stats",value:{name:"signature",type:"object",raw:"{ netRevenue: string; orders: number; uniqueDesigns: number }",signature:{properties:[{key:"netRevenue",value:{name:"string",required:!0}},{key:"orders",value:{name:"number",required:!0}},{key:"uniqueDesigns",value:{name:"number",required:!0}}]},required:!0}},{key:"monthlyRevenue",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ month: string; revenue: string }",signature:{properties:[{key:"month",value:{name:"string",required:!0}},{key:"revenue",value:{name:"string",required:!0}}]}}],raw:"SalesMoneyPoint[]",required:!0}},{key:"categoryRevenue",value:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ category: SalesCategory; revenue: string }",signature:{properties:[{key:"category",value:{name:"union",raw:'"Wallpaper" | "Fabric" | "Home decor"',elements:[{name:"literal",value:'"Wallpaper"'},{name:"literal",value:'"Fabric"'},{name:"literal",value:'"Home decor"'}],required:!0}},{key:"revenue",value:{name:"string",required:!0}}]}}],raw:"Array<{ category: SalesCategory; revenue: string }>",required:!0}},{key:"insights",value:{name:"signature",type:"object",raw:`{
  totalSales: string;
  averageMonthlySales: string;
  averageOrderValue: string;
  repeatCustomerRate: number;
  bestMonth: string | null;
  topWallpaperMaterial: string | null;
  topFabricMaterial: string | null;
  designsWithSales: number;
}`,signature:{properties:[{key:"totalSales",value:{name:"string",required:!0}},{key:"averageMonthlySales",value:{name:"string",required:!0}},{key:"averageOrderValue",value:{name:"string",required:!0}},{key:"repeatCustomerRate",value:{name:"number",required:!0}},{key:"bestMonth",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"topWallpaperMaterial",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"topFabricMaterial",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"designsWithSales",value:{name:"number",required:!0}}]},required:!0}},{key:"trends",value:{name:"signature",type:"object",raw:`{
  description: string;
  hasComparison: boolean;
  rising: Array<{
    designKey: string;
    designId: string | null;
    designName: string;
    thumbnailUrl: string | null;
    manualThumbnail: boolean;
    currentRevenue: string;
    previousRevenue: string;
    growthPercent: number;
  }>;
  newDesigns: Array<{
    designKey: string;
    designId: string | null;
    designName: string;
    thumbnailUrl: string | null;
    manualThumbnail: boolean;
    currentRevenue: string;
  }>;
}`,signature:{properties:[{key:"description",value:{name:"string",required:!0}},{key:"hasComparison",value:{name:"boolean",required:!0}},{key:"rising",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  designKey: string;
  designId: string | null;
  designName: string;
  thumbnailUrl: string | null;
  manualThumbnail: boolean;
  currentRevenue: string;
  previousRevenue: string;
  growthPercent: number;
}`,signature:{properties:[{key:"designKey",value:{name:"string",required:!0}},{key:"designId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"designName",value:{name:"string",required:!0}},{key:"thumbnailUrl",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"manualThumbnail",value:{name:"boolean",required:!0}},{key:"currentRevenue",value:{name:"string",required:!0}},{key:"previousRevenue",value:{name:"string",required:!0}},{key:"growthPercent",value:{name:"number",required:!0}}]}}],raw:`Array<{
  designKey: string;
  designId: string | null;
  designName: string;
  thumbnailUrl: string | null;
  manualThumbnail: boolean;
  currentRevenue: string;
  previousRevenue: string;
  growthPercent: number;
}>`,required:!0}},{key:"newDesigns",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  designKey: string;
  designId: string | null;
  designName: string;
  thumbnailUrl: string | null;
  manualThumbnail: boolean;
  currentRevenue: string;
}`,signature:{properties:[{key:"designKey",value:{name:"string",required:!0}},{key:"designId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"designName",value:{name:"string",required:!0}},{key:"thumbnailUrl",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"manualThumbnail",value:{name:"boolean",required:!0}},{key:"currentRevenue",value:{name:"string",required:!0}}]}}],raw:`Array<{
  designKey: string;
  designId: string | null;
  designName: string;
  thumbnailUrl: string | null;
  manualThumbnail: boolean;
  currentRevenue: string;
}>`,required:!0}}]},required:!0}},{key:"bestSellers",value:{name:"signature",type:"object",raw:`{
  total: number;
  items: Array<{
    designKey: string;
    designId: string | null;
    designName: string;
    category: SalesCategory;
    units: number;
    revenue: string;
    revenuePercent: number;
    topMaterial: string;
    thumbnailUrl: string | null;
    manualThumbnail: boolean;
  }>;
}`,signature:{properties:[{key:"total",value:{name:"number",required:!0}},{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  designKey: string;
  designId: string | null;
  designName: string;
  category: SalesCategory;
  units: number;
  revenue: string;
  revenuePercent: number;
  topMaterial: string;
  thumbnailUrl: string | null;
  manualThumbnail: boolean;
}`,signature:{properties:[{key:"designKey",value:{name:"string",required:!0}},{key:"designId",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"designName",value:{name:"string",required:!0}},{key:"category",value:{name:"union",raw:'"Wallpaper" | "Fabric" | "Home decor"',elements:[{name:"literal",value:'"Wallpaper"'},{name:"literal",value:'"Fabric"'},{name:"literal",value:'"Home decor"'}],required:!0}},{key:"units",value:{name:"number",required:!0}},{key:"revenue",value:{name:"string",required:!0}},{key:"revenuePercent",value:{name:"number",required:!0}},{key:"topMaterial",value:{name:"string",required:!0}},{key:"thumbnailUrl",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}},{key:"manualThumbnail",value:{name:"boolean",required:!0}}]}}],raw:`Array<{
  designKey: string;
  designId: string | null;
  designName: string;
  category: SalesCategory;
  units: number;
  revenue: string;
  revenuePercent: number;
  topMaterial: string;
  thumbnailUrl: string | null;
  manualThumbnail: boolean;
}>`,required:!0}}]},required:!0}},{key:"repeatCustomers",value:{name:"signature",type:"object",raw:`{
  total: number;
  items: Array<{
    customer: string;
    orders: number;
    revenue: string;
    purchases: Array<{
      date: string;
      designName: string;
      category: SalesCategory;
      format: string;
      material: string;
      netRevenue: string;
    }>;
  }>;
}`,signature:{properties:[{key:"total",value:{name:"number",required:!0}},{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  customer: string;
  orders: number;
  revenue: string;
  purchases: Array<{
    date: string;
    designName: string;
    category: SalesCategory;
    format: string;
    material: string;
    netRevenue: string;
  }>;
}`,signature:{properties:[{key:"customer",value:{name:"string",required:!0}},{key:"orders",value:{name:"number",required:!0}},{key:"revenue",value:{name:"string",required:!0}},{key:"purchases",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  date: string;
  designName: string;
  category: SalesCategory;
  format: string;
  material: string;
  netRevenue: string;
}`,signature:{properties:[{key:"date",value:{name:"string",required:!0}},{key:"designName",value:{name:"string",required:!0}},{key:"category",value:{name:"union",raw:'"Wallpaper" | "Fabric" | "Home decor"',elements:[{name:"literal",value:'"Wallpaper"'},{name:"literal",value:'"Fabric"'},{name:"literal",value:'"Home decor"'}],required:!0}},{key:"format",value:{name:"string",required:!0}},{key:"material",value:{name:"string",required:!0}},{key:"netRevenue",value:{name:"string",required:!0}}]}}],raw:`Array<{
  date: string;
  designName: string;
  category: SalesCategory;
  format: string;
  material: string;
  netRevenue: string;
}>`,required:!0}}]}}],raw:`Array<{
  customer: string;
  orders: number;
  revenue: string;
  purchases: Array<{
    date: string;
    designName: string;
    category: SalesCategory;
    format: string;
    material: string;
    netRevenue: string;
  }>;
}>`,required:!0}}]},required:!0}},{key:"sales",value:{name:"signature",type:"object",raw:`{
  total: number;
  sort: SalesSort;
  direction: "asc" | "desc";
  items: Array<{
    date: string;
    designName: string;
    category: SalesCategory;
    format: string;
    material: string;
    customer: string;
    netRevenue: string;
  }>;
}`,signature:{properties:[{key:"total",value:{name:"number",required:!0}},{key:"sort",value:{name:"union",raw:'"date" | "designName" | "category" | "format" | "material" | "customer" | "netRevenue"',elements:[{name:"literal",value:'"date"'},{name:"literal",value:'"designName"'},{name:"literal",value:'"category"'},{name:"literal",value:'"format"'},{name:"literal",value:'"material"'},{name:"literal",value:'"customer"'},{name:"literal",value:'"netRevenue"'}],required:!0}},{key:"direction",value:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}],required:!0}},{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  date: string;
  designName: string;
  category: SalesCategory;
  format: string;
  material: string;
  customer: string;
  netRevenue: string;
}`,signature:{properties:[{key:"date",value:{name:"string",required:!0}},{key:"designName",value:{name:"string",required:!0}},{key:"category",value:{name:"union",raw:'"Wallpaper" | "Fabric" | "Home decor"',elements:[{name:"literal",value:'"Wallpaper"'},{name:"literal",value:'"Fabric"'},{name:"literal",value:'"Home decor"'}],required:!0}},{key:"format",value:{name:"string",required:!0}},{key:"material",value:{name:"string",required:!0}},{key:"customer",value:{name:"string",required:!0}},{key:"netRevenue",value:{name:"string",required:!0}}]}}],raw:`Array<{
  date: string;
  designName: string;
  category: SalesCategory;
  format: string;
  material: string;
  customer: string;
  netRevenue: string;
}>`,required:!0}}]},required:!0}},{key:"filterOptions",value:{name:"signature",type:"object",raw:"{ categories: SalesCategory[]; formats: string[]; materials: string[] }",signature:{properties:[{key:"categories",value:{name:"Array",elements:[{name:"union",raw:'"Wallpaper" | "Fabric" | "Home decor"',elements:[{name:"literal",value:'"Wallpaper"'},{name:"literal",value:'"Fabric"'},{name:"literal",value:'"Home decor"'}],required:!0}],raw:"SalesCategory[]",required:!0}},{key:"formats",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"materials",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]},required:!0}}]}},{name:"null"}]},description:""},dataMessage:{required:!1,tsType:{name:"string"},description:""},datePreset:{required:!0,tsType:{name:"union",raw:`| "all"
| "today"
| "yesterday"
| "7"
| "30"
| "90"
| "180"
| "month"
| "ytd"
| "lastyear"
| "custom"`,elements:[{name:"literal",value:'"all"'},{name:"literal",value:'"today"'},{name:"literal",value:'"yesterday"'},{name:"literal",value:'"7"'},{name:"literal",value:'"30"'},{name:"literal",value:'"90"'},{name:"literal",value:'"180"'},{name:"literal",value:'"month"'},{name:"literal",value:'"ytd"'},{name:"literal",value:'"lastyear"'},{name:"literal",value:'"custom"'}]},description:""},enabledInsights:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| "totalSales" | "avgMonthly" | "avgOrder" | "repeatRate" | "bestMonth"
| "topWallpaperMaterial" | "topFabricMaterial" | "designsSold"`,elements:[{name:"literal",value:'"totalSales"'},{name:"literal",value:'"avgMonthly"'},{name:"literal",value:'"avgOrder"'},{name:"literal",value:'"repeatRate"'},{name:"literal",value:'"bestMonth"'},{name:"literal",value:'"topWallpaperMaterial"'},{name:"literal",value:'"topFabricMaterial"'},{name:"literal",value:'"designsSold"'}]}],raw:"SalesInsightId[]"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},filters:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  from: string;
  to: string;
  category: string;
  format: string;
  material: string;
  search: string;
  repeatCategory: string;
  trendPeriod: string;
  bestSellersLimit: number;
  salesLimit: number;
  repeatCustomersLimit: number;
  salesSort: SalesSort;
  salesDirection: "asc" | "desc";
}`,signature:{properties:[{key:"from",value:{name:"string",required:!0}},{key:"to",value:{name:"string",required:!0}},{key:"category",value:{name:"string",required:!0}},{key:"format",value:{name:"string",required:!0}},{key:"material",value:{name:"string",required:!0}},{key:"search",value:{name:"string",required:!0}},{key:"repeatCategory",value:{name:"string",required:!0}},{key:"trendPeriod",value:{name:"string",required:!0}},{key:"bestSellersLimit",value:{name:"number",required:!0}},{key:"salesLimit",value:{name:"number",required:!0}},{key:"repeatCustomersLimit",value:{name:"number",required:!0}},{key:"salesSort",value:{name:"union",raw:'"date" | "designName" | "category" | "format" | "material" | "customer" | "netRevenue"',elements:[{name:"literal",value:'"date"'},{name:"literal",value:'"designName"'},{name:"literal",value:'"category"'},{name:"literal",value:'"format"'},{name:"literal",value:'"material"'},{name:"literal",value:'"customer"'},{name:"literal",value:'"netRevenue"'}],required:!0}},{key:"salesDirection",value:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}],required:!0}}]}},description:""},layout:{required:!0,tsType:{name:"union",raw:'"visual" | "data"',elements:[{name:"literal",value:'"visual"'},{name:"literal",value:'"data"'}]},description:""},state:{required:!0,tsType:{name:"union",raw:'"loading" | "updating" | "empty" | "error" | "ready"',elements:[{name:"literal",value:'"loading"'},{name:"literal",value:'"updating"'},{name:"literal",value:'"empty"'},{name:"literal",value:'"error"'},{name:"literal",value:'"ready"'}]},description:""},onAccentChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(accent: SalesAccent) => void",signature:{arguments:[{type:{name:"union",raw:'"default" | "neutral"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"neutral"'}]},name:"accent"}],return:{name:"void"}}},description:""},onApplyCustomRange:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClearData:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCustomRangeChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(range: DashboardDateRange) => void",signature:{arguments:[{type:{name:"Readonly",elements:[{name:"signature",type:"object",raw:`{
  from: string;
  to: string;
}`,signature:{properties:[{key:"from",value:{name:"string",required:!0}},{key:"to",value:{name:"string",required:!0}}]}}],raw:`Readonly<{
  from: string;
  to: string;
}>`},name:"range"}],return:{name:"void"}}},description:""},onFilterChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(name: keyof SalesDashboardFilters, value: string | number) => void",signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  from: string;
  to: string;
  category: string;
  format: string;
  material: string;
  search: string;
  repeatCategory: string;
  trendPeriod: string;
  bestSellersLimit: number;
  salesLimit: number;
  repeatCustomersLimit: number;
  salesSort: SalesSort;
  salesDirection: "asc" | "desc";
}`,signature:{properties:[{key:"from",value:{name:"string",required:!0}},{key:"to",value:{name:"string",required:!0}},{key:"category",value:{name:"string",required:!0}},{key:"format",value:{name:"string",required:!0}},{key:"material",value:{name:"string",required:!0}},{key:"search",value:{name:"string",required:!0}},{key:"repeatCategory",value:{name:"string",required:!0}},{key:"trendPeriod",value:{name:"string",required:!0}},{key:"bestSellersLimit",value:{name:"number",required:!0}},{key:"salesLimit",value:{name:"number",required:!0}},{key:"repeatCustomersLimit",value:{name:"number",required:!0}},{key:"salesSort",value:{name:"union",raw:'"date" | "designName" | "category" | "format" | "material" | "customer" | "netRevenue"',elements:[{name:"literal",value:'"date"'},{name:"literal",value:'"designName"'},{name:"literal",value:'"category"'},{name:"literal",value:'"format"'},{name:"literal",value:'"material"'},{name:"literal",value:'"customer"'},{name:"literal",value:'"netRevenue"'}],required:!0}},{key:"salesDirection",value:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}],required:!0}}]}},name:"name"},{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:""},onImportBackup:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""},onLayoutChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(layout: SalesLayout) => void",signature:{arguments:[{type:{name:"union",raw:'"visual" | "data"',elements:[{name:"literal",value:'"visual"'},{name:"literal",value:'"data"'}]},name:"layout"}],return:{name:"void"}}},description:""},onPeriodChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(period: DatePreset) => void",signature:{arguments:[{type:{name:"union",raw:`| "all"
| "today"
| "yesterday"
| "7"
| "30"
| "90"
| "180"
| "month"
| "ytd"
| "lastyear"
| "custom"`,elements:[{name:"literal",value:'"all"'},{name:"literal",value:'"today"'},{name:"literal",value:'"yesterday"'},{name:"literal",value:'"7"'},{name:"literal",value:'"30"'},{name:"literal",value:'"90"'},{name:"literal",value:'"180"'},{name:"literal",value:'"month"'},{name:"literal",value:'"ytd"'},{name:"literal",value:'"lastyear"'},{name:"literal",value:'"custom"'}]},name:"period"}],return:{name:"void"}}},description:""},onRemoveThumbnail:{required:!0,tsType:{name:"signature",type:"function",raw:"(designKey: string) => void",signature:{arguments:[{type:{name:"string"},name:"designKey"}],return:{name:"void"}}},description:""},onResetFilters:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onRetry:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onShowUpgrade:{required:!0,tsType:{name:"signature",type:"function",raw:"(reason: SalesUpgradeReason, count?: number) => void",signature:{arguments:[{type:{name:"union",raw:'"dashboard-results" | "dashboard-tools" | "media" | "export"',elements:[{name:"literal",value:'"dashboard-results"'},{name:"literal",value:'"dashboard-tools"'},{name:"literal",value:'"media"'},{name:"literal",value:'"export"'}]},name:"reason"},{type:{name:"number"},name:"count"}],return:{name:"void"}}},description:""},onSortSales:{required:!0,tsType:{name:"signature",type:"function",raw:"(column: SalesSort) => void",signature:{arguments:[{type:{name:"union",raw:'"date" | "designName" | "category" | "format" | "material" | "customer" | "netRevenue"',elements:[{name:"literal",value:'"date"'},{name:"literal",value:'"designName"'},{name:"literal",value:'"category"'},{name:"literal",value:'"format"'},{name:"literal",value:'"material"'},{name:"literal",value:'"customer"'},{name:"literal",value:'"netRevenue"'}]},name:"column"}],return:{name:"void"}}},description:""},onToggleInsight:{required:!0,tsType:{name:"signature",type:"function",raw:"(insight: SalesInsightId) => void",signature:{arguments:[{type:{name:"union",raw:`| "totalSales" | "avgMonthly" | "avgOrder" | "repeatRate" | "bestMonth"
| "topWallpaperMaterial" | "topFabricMaterial" | "designsSold"`,elements:[{name:"literal",value:'"totalSales"'},{name:"literal",value:'"avgMonthly"'},{name:"literal",value:'"avgOrder"'},{name:"literal",value:'"repeatRate"'},{name:"literal",value:'"bestMonth"'},{name:"literal",value:'"topWallpaperMaterial"'},{name:"literal",value:'"topFabricMaterial"'},{name:"literal",value:'"designsSold"'}]},name:"insight"}],return:{name:"void"}}},description:""},onUploadThumbnail:{required:!0,tsType:{name:"signature",type:"function",raw:"(designKey: string, event: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"string"},name:"designKey"},{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"}],return:{name:"void"}}},description:""}}};const S={access:{mode:"full",visibleRows:10,pageSize:10,lockedPreviewRows:3,searchAllowed:!0,sortAllowed:!0,paginationAllowed:!0,mediaVisible:!0,exportAllowed:!0,upgradePlan:"starter"},theme:"natural",enabledInsights:["totalSales","avgMonthly","avgOrder","repeatRate","bestMonth","topWallpaperMaterial","topFabricMaterial","designsSold"],currency:"AUD",stats:{netRevenue:"1842.50",orders:47,uniqueDesigns:19},monthlyRevenue:[{month:"2026-01",revenue:"318.40"},{month:"2026-02",revenue:"402.10"},{month:"2026-03",revenue:"489.50"},{month:"2026-04",revenue:"632.50"}],categoryRevenue:[{category:"Wallpaper",revenue:"840.00"},{category:"Fabric",revenue:"612.50"},{category:"Home decor",revenue:"390.00"}],insights:{totalSales:"1842.50",averageMonthlySales:"460.63",averageOrderValue:"39.20",repeatCustomerRate:21,bestMonth:"2026-04",topWallpaperMaterial:"Peel and Stick",topFabricMaterial:"Petal Signature Cotton",designsWithSales:19},trends:{description:"Synthetic comparison between March and April 2026.",hasComparison:!0,rising:[{designKey:"synthetic-fern",designId:"SYN-1001",designName:"Synthetic Fern Study",thumbnailUrl:"/brand-assets/stripe/sales-pulse-square-128.png",manualThumbnail:!0,currentRevenue:"188.00",previousRevenue:"94.00",growthPercent:100}],newDesigns:[{designKey:"synthetic-tide",designId:"SYN-1002",designName:"Synthetic Tidal Lines",thumbnailUrl:null,manualThumbnail:!1,currentRevenue:"76.00"}]},bestSellers:{total:31,items:[{designKey:"synthetic-fern",designId:"SYN-1001",designName:"Synthetic Fern Study",category:"Wallpaper",units:12,revenue:"488.00",revenuePercent:100,topMaterial:"Peel and Stick",thumbnailUrl:"/brand-assets/stripe/sales-pulse-square-128.png",manualThumbnail:!0},{designKey:"synthetic-tide",designId:"SYN-1002",designName:"Synthetic Tidal Lines",category:"Fabric",units:9,revenue:"321.50",revenuePercent:66,topMaterial:"Petal Signature Cotton",thumbnailUrl:null,manualThumbnail:!1},{designKey:"synthetic-orbit",designId:null,designName:"Synthetic Paper Orbit",category:"Home decor",units:7,revenue:"244.00",revenuePercent:50,topMaterial:"Throw Pillow",thumbnailUrl:null,manualThumbnail:!1}]},repeatCustomers:{total:12,items:[{customer:"Synthetic buyer A",orders:3,revenue:"182.50",purchases:[{date:"2026-04-12",designName:"Synthetic Fern Study",category:"Wallpaper",format:"Wallpaper",material:"Peel and Stick",netRevenue:"72.50"},{date:"2026-03-08",designName:"Synthetic Tidal Lines",category:"Fabric",format:"Fat Quarter",material:"Petal Signature Cotton",netRevenue:"48.00"}]},{customer:"Synthetic buyer B",orders:2,revenue:"96.00",purchases:[{date:"2026-04-04",designName:"Synthetic Paper Orbit",category:"Home decor",format:"Throw Pillow",material:"Linen Cotton Canvas",netRevenue:"52.00"}]}]},sales:{total:47,sort:"date",direction:"desc",items:[{date:"2026-04-12",designName:"Synthetic Fern Study",category:"Wallpaper",format:"Wallpaper",material:"Peel and Stick",customer:"Synthetic buyer A",netRevenue:"72.50"},{date:"2026-04-08",designName:"Synthetic Tidal Lines",category:"Fabric",format:"Fat Quarter",material:"Petal Signature Cotton",customer:"Synthetic buyer C",netRevenue:"48.00"},{date:"2026-04-04",designName:"Synthetic Paper Orbit",category:"Home decor",format:"Throw Pillow",material:"Linen Cotton Canvas",customer:"Synthetic buyer B",netRevenue:"52.00"}]},filterOptions:{categories:["Wallpaper","Fabric","Home decor"],formats:["Wallpaper","Fat Quarter","Throw Pillow"],materials:["Peel and Stick","Petal Signature Cotton","Linen Cotton Canvas"]}},Se={from:"2026-01-01",to:"2026-04-30",category:"",format:"",material:"",search:"",repeatCategory:"",trendPeriod:"month",bestSellersLimit:10,salesLimit:10,repeatCustomersLimit:10,salesSort:"date",salesDirection:"desc"};function fa({imageFallback:u,limited:i,longLabels:a}){const m=S.bestSellers.items[0];return{...S,access:i?{...S.access,mode:"limited",searchAllowed:!1,sortAllowed:!1,paginationAllowed:!1,mediaVisible:!1,exportAllowed:!1}:S.access,bestSellers:{...S.bestSellers,items:[{...m,designName:a?"A deliberately long synthetic design name that remains readable at narrow widths and two hundred percent browser zoom":m.designName,thumbnailUrl:u?null:m.thumbnailUrl},...S.bestSellers.items.slice(1)]},repeatCustomers:{...S.repeatCustomers,items:S.repeatCustomers.items.map((c,p)=>p===0&&a?{...c,customer:"A deliberately long synthetic customer identity used only to test wrapping and narrow layouts"}:c)},trends:{...S.trends,rising:S.trends.rising.map(c=>({...c,thumbnailUrl:u?null:c.thumbnailUrl}))}}}function qa({imageFallback:u=!1,limited:i=!1,longLabels:a=!1,state:m="ready"}){const[c,p]=A.useState("default"),[g,s]=A.useState("visual"),[b,w]=A.useState("ytd"),[E,I]=A.useState({from:"2026-01-01",to:"2026-04-30"}),[F,l]=A.useState(Se),[v,N]=A.useState([...oe]),T=m==="loading"||m==="error"?null:fa({imageFallback:u,limited:i,longLabels:a});return de.jsx(_e,{locale:"en-AU",children:de.jsx(De,{accent:c,customRange:E,data:T,datePreset:b,enabledInsights:v,...m==="error"?{errorMessage:"Synthetic Storybook error. No marketplace request was made."}:{},filters:F,layout:g,onAccentChange:p,onApplyCustomRange:()=>l(h=>({...h,...E})),onClearData:()=>{},onCustomRangeChange:I,onFilterChange:(h,f)=>l(j=>({...j,[h]:f})),onImportBackup:()=>{},onLayoutChange:s,onPeriodChange:w,onRemoveThumbnail:()=>{},onResetFilters:()=>l(Se),onRetry:()=>{},onShowUpgrade:()=>{},onSortSales:h=>l(f=>({...f,salesSort:h})),onToggleInsight:h=>N(f=>f.includes(h)?f.filter(j=>j!==h):[...f,h]),onUploadThumbnail:()=>{},state:m})})}const Aa={title:"Products/Sales Pulse/Sales dashboard",component:qa,tags:["autodocs"],parameters:{docs:{description:{component:"The real Sales route presentation rendered with synthetic data. Runtime APIs, entitlements and marketplace data are not used by these stories."}}}},U={},x={args:{state:"loading"}},B={args:{state:"updating"}},K={args:{state:"empty"}},$={args:{state:"error"}},V={args:{limited:!0}},G={args:{imageFallback:!0}},z={},Y={args:{longLabels:!0}},Z={globals:{theme:"light"}},Q={globals:{theme:"dark"}},X={parameters:{docs:{description:{story:"Review with reduced motion enabled; all information and controls remain available without animation."}}}},J={parameters:{docs:{description:{story:"Review with forced colours enabled; the solid-line chart, circle markers, category patterns and exact summaries preserve meaning."}}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:"{}",...U.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    state: "loading"
  }
}`,...x.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    state: "updating"
  }
}`,...B.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    state: "empty"
  }
}`,...K.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    state: "error"
  }
}`,...$.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    limited: true
  }
}`,...V.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    imageFallback: true
  }
}`,...G.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:"{}",...z.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    longLabels: true
  }
}`,...Y.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "light"
  }
}`,...Z.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: "dark"
  }
}`,...Q.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Review with reduced motion enabled; all information and controls remain available without animation."
      }
    }
  }
}`,...X.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Review with forced colours enabled; the solid-line chart, circle markers, category patterns and exact summaries preserve meaning."
      }
    }
  }
}`,...J.parameters?.docs?.source}}};const La=["Ready","Loading","Updating","Empty","Error","LimitedAccess","ImageFallback","ManualThumbnail","LongLabels","Light","Dark","ReducedMotion","ForcedColours"];export{Q as Dark,K as Empty,$ as Error,J as ForcedColours,G as ImageFallback,Z as Light,V as LimitedAccess,x as Loading,Y as LongLabels,z as ManualThumbnail,U as Ready,X as ReducedMotion,B as Updating,La as __namedExportsOrder,Aa as default};
