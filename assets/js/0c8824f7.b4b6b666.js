"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88770],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),p=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=p(r),m=a,b=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(b,o(o({ref:e},s),{},{components:r})):n.createElement(b,o({ref:e},s))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},96790:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(87462),a=(r(67294),r(3905)),l=r(65099),o=r(85162);const i={title:"products",description:"OpenBB SDK Function"},u="products",p={unversionedId:"functions/crypto/ov/products",id:"functions/crypto/ov/products",title:"products",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/crypto/ov/products.md",sourceDirName:"functions/crypto/ov",slug:"/functions/crypto/ov/products",permalink:"/sdk/functions/crypto/ov/products",draft:!1,tags:[],version:"current",frontMatter:{title:"products",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"platforms1",permalink:"/sdk/functions/crypto/ov/platforms1"},next:{title:"stables",permalink:"/sdk/functions/crypto/ov/stables"}},s={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}],d={toc:c};function m(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"products"},"products"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Get list of financial products from CoinGecko API"),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_model.py#L292"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def get_finance_products(sortby: str = "Name", ascend: bool = True) -> pd.DataFrame\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sortby"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Key by which to sort data"),(0,a.kt)("td",{parentName:"tr",align:null},"Name"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ascend"),(0,a.kt)("td",{parentName:"tr",align:null},"bool"),(0,a.kt)("td",{parentName:"tr",align:null},"Flag to sort data ascending"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,a.kt)("td",{parentName:"tr",align:null},"Rank,  Platform, Identifier, Supply_Rate, Borrow_Rate")))),(0,a.kt)("hr",null)),(0,a.kt)(o.Z,{value:"view",label:"View",mdxType:"TabItem"},(0,a.kt)("p",null,"Shows list of financial products. ","[Source: CoinGecko]"),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_view.py#L587"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def display_products(sortby: str = "Platform", ascend: bool = False, limit: int = 15, export: str = "") -> None\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of records to display"),(0,a.kt)("td",{parentName:"tr",align:null},"15"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sortby"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Key by which to sort data"),(0,a.kt)("td",{parentName:"tr",align:null},"Platform"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ascend"),(0,a.kt)("td",{parentName:"tr",align:null},"bool"),(0,a.kt)("td",{parentName:"tr",align:null},"Flag to sort data descending"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"export"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Export dataframe data to csv,json,xlsx file"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,"This function does not return anything"),(0,a.kt)("hr",null))))}m.isMDXComponent=!0},85162:(t,e,r)=>{r.d(e,{Z:()=>o});var n=r(67294),a=r(86010);const l="tabItem_Ymn6";function o(t){let{children:e,hidden:r,className:o}=t;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},e)}},65099:(t,e,r)=>{r.d(e,{Z:()=>m});var n=r(87462),a=r(67294),l=r(86010),o=r(72389),i=r(67392),u=r(7094),p=r(12466);const s="tabItem_hGfb";var c=r(16550);function d(t){var e;const{lazy:r,block:o,defaultValue:d,values:m,groupId:b,className:k}=t,f=a.Children.map(t.children,(t=>{if((0,a.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??f.map((t=>{let{props:{value:e,label:r,attributes:n}}=t;return{value:e,label:r,attributes:n}})),g=(0,i.l)(y,((t,e)=>t.value===e.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===d?d:d??(null==(e=f.find((t=>t.props.default)))?void 0:e.props.value)??f[0].props.value;if(null!==h&&!y.some((t=>t.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${y.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,u.U)(),[T,w]=(0,a.useState)(h),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=b){const t=v[b];null!=t&&t!==T&&y.some((e=>e.value===t))&&w(t)}const E=t=>{const e=t.currentTarget,r=O.indexOf(e),n=y[r].value;n!==T&&(x(e),w(n),null!=b&&N(b,String(n)))},D=t=>{var e;let r=null;switch(t.key){case"Enter":E(t);break;case"ArrowRight":{const e=O.indexOf(t.currentTarget)+1;r=O[e]??O[0];break}case"ArrowLeft":{const e=O.indexOf(t.currentTarget)-1;r=O[e]??O[O.length-1];break}}null==(e=r)||e.focus()},{pathname:P}=(0,c.TH)();return a.createElement("div",null,a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none lg:-ml-7 my-6")},y.map((t=>{let{value:e,label:r,attributes:o}=t;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:t=>O.push(t),onKeyDown:D,onClick:E},o,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase text-sm border-b",s,null==o?void 0:o.className,{"border-b-2 pointer-events-none":T===e,"cursor-pointer":T!==e,"border-b-2 text-[#669dcb] border-[#669dcb]":T===e&&P.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":T===e&&P.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":T!==e&&P.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#abd2f1] hover:border-[#abd2f1]":T!==e&&P.startsWith("/terminal")})}),r??e)})),a.createElement("li",{className:"w-full border-b border-grey-600 pointer-events-none py-1 mb-[9.5px]"})),r?(0,a.cloneElement)(f.filter((t=>t.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((t,e)=>(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==T})))))}function m(t){const e=(0,o.Z)();return a.createElement(d,(0,n.Z)({key:String(e)},t))}}}]);