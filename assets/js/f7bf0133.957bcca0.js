"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58366],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,b=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return r?a.createElement(b,o(o({ref:t},u),{},{components:r})):a.createElement(b,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},37265:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var a=r(87462),n=(r(67294),r(3905)),l=r(65099),o=r(85162);const p={title:"top_dapps",description:"OpenBB SDK Function"},i="top_dapps",s={unversionedId:"functions/crypto/disc/top_dapps",id:"functions/crypto/disc/top_dapps",title:"top_dapps",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/crypto/disc/top_dapps.md",sourceDirName:"functions/crypto/disc",slug:"/functions/crypto/disc/top_dapps",permalink:"/sdk/functions/crypto/disc/top_dapps",draft:!1,tags:[],version:"current",frontMatter:{title:"top_dapps",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"losers",permalink:"/sdk/functions/crypto/disc/losers"},next:{title:"top_dexes",permalink:"/sdk/functions/crypto/disc/top_dexes"}},u={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2},{value:"Examples",id:"examples-1",level:2}],c={toc:d};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"top_dapps"},"top_dapps"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,n.kt)("p",null,"Get top decentralized applications by daily volume and users ","[Source: https://dappradar.com/]"),(0,n.kt)("p",null,"Source Code: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/dappradar_model.py#L209"},"link")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def get_top_dapps(sortby: str, limit: int) -> DataFrame\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sortby"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Key by which to sort data"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,n.kt)("td",{parentName:"tr",align:null},"Top decentralized exchanges.",(0,n.kt)("br",null),"Columns: Name, Category, Protocols, Daily Users, Daily Volume ","[$]")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("hr",null)),(0,n.kt)(o.Z,{value:"view",label:"View",mdxType:"TabItem"},(0,n.kt)("p",null,"Prints table showing top decentralized exchanges ","[Source: https://dappradar.com/]"),(0,n.kt)("p",null,"Source Code: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/dappradar_view.py#L133"},"link")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def display_top_dapps(limit: int, export: str, sortby: str) -> None\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"limit"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of records to display"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sortby"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Key by which to sort data"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"export"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Export dataframe data to csv,json,xlsx file"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,"This function does not return anything"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"examples-1"},"Examples"),(0,n.kt)("hr",null))))}m.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(67294),n=r(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:r},t)}},65099:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(87462),n=r(67294),l=r(86010),o=r(72389),p=r(67392),i=r(7094),s=r(12466);const u="tabItem_hGfb";var d=r(16550);function c(e){var t;const{lazy:r,block:o,defaultValue:c,values:m,groupId:b,className:k}=e,y=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??y.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),h=(0,p.l)(f,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===c?c:c??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,i.U)(),[x,O]=(0,n.useState)(g),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=b){const e=v[b];null!=e&&e!==x&&f.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,r=w.indexOf(t),a=f[r].value;a!==x&&(T(t),O(a),null!=b&&N(b,String(a)))},D=e=>{var t;let r=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;r=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;r=w[t]??w[w.length-1];break}}null==(t=r)||t.focus()},{pathname:_}=(0,d.TH)();return n.createElement("div",null,n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none lg:-ml-7 my-6")},f.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>w.push(e),onKeyDown:D,onClick:E},o,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase text-sm border-b",u,null==o?void 0:o.className,{"border-b-2 pointer-events-none":x===t,"cursor-pointer":x!==t,"border-b-2 text-[#669dcb] border-[#669dcb]":x===t&&_.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":x===t&&_.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":x!==t&&_.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#abd2f1] hover:border-[#abd2f1]":x!==t&&_.startsWith("/terminal")})}),r??t)})),n.createElement("li",{className:"w-full border-b border-grey-600 pointer-events-none py-1 mb-[9.5px]"})),r?(0,n.cloneElement)(y.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,o.Z)();return n.createElement(c,(0,a.Z)({key:String(t)},e))}}}]);