"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74307],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13942:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),l=r(65099),o=r(85162);const i={title:"wfpe",description:"OpenBB SDK Function"},p="wfpe",u={unversionedId:"functions/crypto/ov/wfpe",id:"functions/crypto/ov/wfpe",title:"wfpe",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/crypto/ov/wfpe.md",sourceDirName:"functions/crypto/ov",slug:"/functions/crypto/ov/wfpe",permalink:"/sdk/functions/crypto/ov/wfpe",draft:!1,tags:[],version:"current",frontMatter:{title:"wfpe",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"wf",permalink:"/sdk/functions/crypto/ov/wf"},next:{title:"price",permalink:"/sdk/functions/crypto/price"}},s={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2},{value:"Examples",id:"examples-1",level:2}],d={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wfpe"},"wfpe"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Scrapes coin withdrawal fees per exchange"),(0,a.kt)("p",null,"Source Code: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/withdrawalfees_model.py#L207"},"link")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def get_crypto_withdrawal_fees(symbol: str) -> None\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Coin to check withdrawal fees. By default bitcoin"),(0,a.kt)("td",{parentName:"tr",align:null},"bitcoin"),(0,a.kt)("td",{parentName:"tr",align:null},"False")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"List"),(0,a.kt)("td",{parentName:"tr",align:null},"- str: Overall statistics (exchanges, lowest, average and median)",(0,a.kt)("br",null),"- pd.DataFrame: Exchange, Withdrawal Fee, Minimum Withdrawal Amount")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("hr",null)),(0,a.kt)(o.Z,{value:"view",label:"View",mdxType:"TabItem"},(0,a.kt)("p",null,"Coin withdrawal fees per exchange"),(0,a.kt)("p",null,"Source Code: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/withdrawalfees_view.py#L86"},"link")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def display_crypto_withdrawal_fees(symbol: str, export: str) -> None\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Coin to check withdrawal fees"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"export"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Export dataframe data to csv,json,xlsx file"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,"This function does not return anything"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples-1"},"Examples"),(0,a.kt)("hr",null))))}m.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},65099:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(87462),a=r(67294),l=r(86010),o=r(72389),i=r(67392),p=r(7094),u=r(12466);const s="tabItem_hGfb";var c=r(16550);function d(e){var t;const{lazy:r,block:o,defaultValue:d,values:m,groupId:f,className:b}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??h.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),v=(0,i.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:N}=(0,p.U)(),[w,x]=(0,a.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=f){const e=g[f];null!=e&&e!==w&&k.some((t=>t.value===e))&&x(e)}const E=e=>{const t=e.currentTarget,r=O.indexOf(t),n=k[r].value;n!==w&&(T(t),x(n),null!=f&&N(f,String(n)))},D=e=>{var t;let r=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;r=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;r=O[t]??O[O.length-1];break}}null==(t=r)||t.focus()},{pathname:j}=(0,c.TH)();return a.createElement("div",null,a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none lg:-ml-7 my-6")},k.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:D,onClick:E},o,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase text-sm border-b",s,null==o?void 0:o.className,{"border-b-2 pointer-events-none":w===t,"cursor-pointer":w!==t,"border-b-2 text-[#669dcb] border-[#669dcb]":w===t&&j.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":w===t&&j.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":w!==t&&j.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#abd2f1] hover:border-[#abd2f1]":w!==t&&j.startsWith("/terminal")})}),r??t)})),a.createElement("li",{className:"w-full border-b border-grey-600 pointer-events-none py-1 mb-[9.5px]"})),r?(0,a.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}}}]);