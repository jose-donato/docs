"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74885],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),d=n,b=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return r?a.createElement(b,i(i({ref:t},p),{},{components:r})):a.createElement(b,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},12352:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var a=r(87462),n=(r(67294),r(3905)),l=r(65488),i=r(85162);const o={title:"get_mt",description:"OpenBB SDK Function"},s="get_mt",u={unversionedId:"functions/crypto/dd/get_mt",id:"functions/crypto/dd/get_mt",title:"get_mt",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/crypto/dd/get_mt.md",sourceDirName:"functions/crypto/dd",slug:"/functions/crypto/dd/get_mt",permalink:"/sdk/functions/crypto/dd/get_mt",draft:!1,tags:[],version:"current",frontMatter:{title:"get_mt",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"fr",permalink:"/sdk/functions/crypto/dd/fr"},next:{title:"gh",permalink:"/sdk/functions/crypto/dd/gh"}},p={},m=[{value:"openbb_terminal.cryptocurrency.due_diligence.messari_model.get_available_timeseries",id:"openbb_terminalcryptocurrencydue_diligencemessari_modelget_available_timeseries",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"openbb_terminal.cryptocurrency.due_diligence.messari_view.display_messari_timeseries_list",id:"openbb_terminalcryptocurrencydue_diligencemessari_viewdisplay_messari_timeseries_list",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2},{value:"Examples",id:"examples-1",level:2}],c={toc:m};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"get_mt"},"get_mt"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,n.kt)("h2",{id:"openbb_terminalcryptocurrencydue_diligencemessari_modelget_available_timeseries"},"openbb_terminal.cryptocurrency.due_diligence.messari_model.get_available_timeseries"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/cryptocurrency/due_diligence/messari_model.py'",title:"'openbb_terminal/cryptocurrency/due_diligence/messari_model.py'"},"def get_available_timeseries(only_free: bool) -> DataFrame\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/messari_model.py#L34"},"Source Code")),(0,n.kt)("p",null,"Description: Returns available messari timeseries"),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"only_free"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"Display only timeseries available for free"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,n.kt)("td",{parentName:"tr",align:null},"available timeseries")))),(0,n.kt)("h2",{id:"examples"},"Examples")),(0,n.kt)(i.Z,{value:"view",label:"View",mdxType:"TabItem"},(0,n.kt)("h2",{id:"openbb_terminalcryptocurrencydue_diligencemessari_viewdisplay_messari_timeseries_list"},"openbb_terminal.cryptocurrency.due_diligence.messari_view.display_messari_timeseries_list"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/cryptocurrency/due_diligence/messari_view.py'",title:"'openbb_terminal/cryptocurrency/due_diligence/messari_view.py'"},"def display_messari_timeseries_list(limit: int, query: str, only_free: bool, export: str) -> None\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/messari_view.py#L49"},"Source Code")),(0,n.kt)("p",null,"Description: Prints table showing messari timeseries list"),(0,n.kt)("h2",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"limit"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"number to show"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"query"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Query to search across all messari timeseries"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"only_free"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"Display only timeseries available for free"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"export"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Export dataframe data to csv,json,xlsx file"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("h2",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,"This function does not return anything"),(0,n.kt)("h2",{id:"examples-1"},"Examples"))))}d.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(67294),n=r(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,i),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>d});var a=r(87462),n=r(67294),l=r(86010),i=r(72389),o=r(67392),s=r(7094),u=r(12466);const p="tabList__CuJ",m="tabItem_LNqP";function c(e){var t;const{lazy:r,block:i,defaultValue:c,values:d,groupId:b,className:y}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??g.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),f=(0,o.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===c?c:c??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:_,setTabGroupChoices:h}=(0,s.U)(),[N,O]=(0,n.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=b){const e=_[b];null!=e&&e!==N&&k.some((t=>t.value===e))&&O(e)}const x=e=>{const t=e.currentTarget,r=w.indexOf(t),a=k[r].value;a!==N&&(T(t),O(a),null!=b&&h(b,String(a)))},E=e=>{var t;let r=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;r=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;r=w[t]??w[w.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},y)},k.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>w.push(e),onKeyDown:E,onClick:x},i,{className:(0,l.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":N===t})}),r??t)}))),r?(0,n.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,i.Z)();return n.createElement(c,(0,a.Z)({key:String(t)},e))}}}]);