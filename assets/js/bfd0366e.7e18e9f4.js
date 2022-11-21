"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76644],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),u=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=u(a),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(k,o(o({ref:e},p),{},{components:a})):n.createElement(k,o({ref:e},p))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},16971:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),l=a(65099),o=a(85162);const i={title:"cps",description:"OpenBB SDK Function"},s="cps",u={unversionedId:"functions/stocks/sia/cps",id:"functions/stocks/sia/cps",title:"cps",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/stocks/sia/cps.md",sourceDirName:"functions/stocks/sia",slug:"/functions/stocks/sia/cps",permalink:"/sdk/functions/stocks/sia/cps",draft:!1,tags:[],version:"current",frontMatter:{title:"cps",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"cpis",permalink:"/sdk/functions/stocks/sia/cpis"},next:{title:"filter_stocks",permalink:"/sdk/functions/stocks/sia/filter_stocks"}},p={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}],d={toc:c};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cps"},"cps"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Get number of companies per sector in a specific country (and specific market cap). ","[Source: Finance Database]"),(0,r.kt)("p",null,"Source Code: [",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/sector_industry_analysis/financedatabase_model.py#L205"},"link"),"]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def get_companies_per_sector_in_country(country: str = "United States", mktcap: str = "Large", exclude_exchanges: bool = True) -> dict\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"country"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Select country to get number of companies by each sector"),(0,r.kt)("td",{parentName:"tr",align:null},"United States"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mktcap"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Select market cap of companies to consider from Small, Mid and Large"),(0,r.kt)("td",{parentName:"tr",align:null},"Large"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exclude_exchanges"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Exclude international exchanges"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dict"),(0,r.kt)("td",{parentName:"tr",align:null},"Dictionary of sectors and number of companies in a specific country")))),(0,r.kt)("hr",null)),(0,r.kt)(o.Z,{value:"view",label:"View",mdxType:"TabItem"},(0,r.kt)("p",null,"Display number of companies per sector in a specific country (and market cap). ","[Source: Finance Database]"),(0,r.kt)("p",null,"Source Code: [",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/sector_industry_analysis/financedatabase_view.py#L238"},"link"),"]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def display_companies_per_sector_in_country(country: str = "United States", mktcap: str = "Large", exclude_exchanges: bool = True, export: str = "", raw: bool = False, max_sectors_to_display: int = 15, min_pct_to_display_sector: float = 0.015, external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None) -> None\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"country"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Select country to get number of companies by each sector"),(0,r.kt)("td",{parentName:"tr",align:null},"United States"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mktcap"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Select market cap of companies to consider from Small, Mid and Large"),(0,r.kt)("td",{parentName:"tr",align:null},"Large"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exclude_exchanges"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Exclude international exchanges"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"export"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Format to export data as"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"raw"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Output all raw data"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_sectors_to_display"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum number of sectors to display"),(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"min_pct_to_display_sector"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Minimum percentage to display sector"),(0,r.kt)("td",{parentName:"tr",align:null},"0.015"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"external_axes"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional[List","[plt.Axes]","]"),(0,r.kt)("td",{parentName:"tr",align:null},"External axes (1 axis is expected in the list), by default None"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,"This function does not return anything"),(0,r.kt)("hr",null))))}m.isMDXComponent=!0},85162:(t,e,a)=>{a.d(e,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(t){let{children:e,hidden:a,className:o}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},e)}},65099:(t,e,a)=>{a.d(e,{Z:()=>m});var n=a(87462),r=a(67294),l=a(86010),o=a(72389),i=a(67392),s=a(7094),u=a(12466);const p="tabItem_hGfb";var c=a(16550);function d(t){var e;const{lazy:a,block:o,defaultValue:d,values:m,groupId:k,className:b}=t,g=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??g.map((t=>{let{props:{value:e,label:a,attributes:n}}=t;return{value:e,label:a,attributes:n}})),N=(0,i.l)(f,((t,e)=>t.value===e.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(e=g.find((t=>t.props.default)))?void 0:e.props.value)??g[0].props.value;if(null!==y&&!f.some((t=>t.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:v}=(0,s.U)(),[x,T]=(0,r.useState)(y),_=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=k){const t=h[k];null!=t&&t!==x&&f.some((e=>e.value===t))&&T(t)}const w=t=>{const e=t.currentTarget,a=_.indexOf(e),n=f[a].value;n!==x&&(O(e),T(n),null!=k&&v(k,String(n)))},E=t=>{var e;let a=null;switch(t.key){case"Enter":w(t);break;case"ArrowRight":{const e=_.indexOf(t.currentTarget)+1;a=_[e]??_[0];break}case"ArrowLeft":{const e=_.indexOf(t.currentTarget)-1;a=_[e]??_[_.length-1];break}}null==(e=a)||e.focus()},{pathname:S}=(0,c.TH)();return r.createElement("div",null,r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none lg:-ml-7 my-6")},f.map((t=>{let{value:e,label:a,attributes:o}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:t=>_.push(t),onKeyDown:E,onClick:w},o,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase text-sm border-b",p,null==o?void 0:o.className,{"border-b-2 pointer-events-none":x===e,"cursor-pointer":x!==e,"border-b-2 text-[#669dcb] border-[#669dcb]":x===e&&S.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":x===e&&S.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":x!==e&&S.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#abd2f1] hover:border-[#abd2f1]":x!==e&&S.startsWith("/terminal")})}),a??e)})),r.createElement("li",{className:"w-full border-b border-grey-600 pointer-events-none py-1 mb-[9.5px]"})),a?(0,r.cloneElement)(g.filter((t=>t.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==x})))))}function m(t){const e=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(e)},t))}}}]);