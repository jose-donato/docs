"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39303],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),l=n(65099),o=n(85162);const i={title:"balance",description:"OpenBB SDK Function"},u="balance",p={unversionedId:"functions/crypto/dd/balance",id:"functions/crypto/dd/balance",title:"balance",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/crypto/dd/balance.md",sourceDirName:"functions/crypto/dd",slug:"/functions/crypto/dd/balance",permalink:"/sdk/functions/crypto/dd/balance",draft:!1,tags:[],version:"current",frontMatter:{title:"balance",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"all_binance_trading_pairs",permalink:"/sdk/functions/crypto/dd/all_binance_trading_pairs"},next:{title:"basic",permalink:"/sdk/functions/crypto/dd/basic"}},s={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"balance"},"balance"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Get account holdings for asset. ","[Source: Binance]"),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/binance_model.py#L179"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def get_balance(from_symbol: str, to_symbol: str = "USDT") -> pd.DataFrame\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"from_symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Cryptocurrency"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"to_symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Cryptocurrency"),(0,a.kt)("td",{parentName:"tr",align:null},"USDT"),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,a.kt)("td",{parentName:"tr",align:null},"Dataframe with account holdings for an asset")))),(0,a.kt)("hr",null)),(0,a.kt)(o.Z,{value:"view",label:"View",mdxType:"TabItem"},(0,a.kt)("p",null,"Prints table showing account holdings for asset. ","[Source: Binance]"),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/binance_view.py#L64"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def display_balance(from_symbol: str, to_symbol: str = "USDT", export: str = "") -> None\n')),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"from_symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Cryptocurrency"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"to_symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Cryptocurrency"),(0,a.kt)("td",{parentName:"tr",align:null},"USDT"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"export"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Export dataframe data to csv,json,xlsx"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,"This function does not return anything"),(0,a.kt)("hr",null))))}m.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},65099:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(87462),a=n(67294),l=n(86010),o=n(72389),i=n(67392),u=n(7094),p=n(12466);const s="tabItem_hGfb";var c=n(16550);function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:m,groupId:b,className:k}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),g=(0,i.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==h&&!y.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,u.U)(),[T,O]=(0,a.useState)(h),w=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=b){const e=v[b];null!=e&&e!==T&&y.some((t=>t.value===e))&&O(e)}const D=e=>{const t=e.currentTarget,n=w.indexOf(t),r=y[n].value;r!==T&&(x(t),O(r),null!=b&&N(b,String(r)))},E=e=>{var t;let n=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()},{pathname:_}=(0,c.TH)();return a.createElement("div",null,a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none lg:-ml-7 my-6")},y.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>w.push(e),onKeyDown:E,onClick:D},o,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase text-sm border-b",s,null==o?void 0:o.className,{"border-b-2 pointer-events-none":T===t,"cursor-pointer":T!==t,"border-b-2 text-[#669dcb] border-[#669dcb]":T===t&&_.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":T===t&&_.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":T!==t&&_.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#abd2f1] hover:border-[#abd2f1]":T!==t&&_.startsWith("/terminal")})}),n??t)})),a.createElement("li",{className:"w-full border-b border-grey-600 pointer-events-none py-1 mb-[9.5px]"})),n?(0,a.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}}}]);