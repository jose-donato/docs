"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63431],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(k,o(o({ref:e},s),{},{components:n})):a.createElement(k,o({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1505:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),l=n(65488),o=n(85162);const i={title:"cgproducts",description:"OpenBB SDK Function"},u="cgproducts",p={unversionedId:"functions/crypto/ov/cgproducts",id:"functions/crypto/ov/cgproducts",title:"cgproducts",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/crypto/ov/cgproducts.md",sourceDirName:"functions/crypto/ov",slug:"/functions/crypto/ov/cgproducts",permalink:"/sdk/functions/crypto/ov/cgproducts",draft:!1,tags:[],version:"current",frontMatter:{title:"cgproducts",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"cgindexes",permalink:"/sdk/functions/crypto/ov/cgindexes"},next:{title:"cgstables",permalink:"/sdk/functions/crypto/ov/cgstables"}},s={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}],d={toc:c};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cgproducts"},"cgproducts"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Get list of financial products from CoinGecko API"),(0,r.kt)("p",null,"Source Code: [",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_model.py#L292"},"link"),"]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def get_finance_products(sortby: str = "Name", ascend: bool = True) -> pd.DataFrame\n')),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortby"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Key by which to sort data"),(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ascend"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Flag to sort data ascending"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,r.kt)("td",{parentName:"tr",align:null},"Rank,  Platform, Identifier, Supply_Rate, Borrow_Rate"))))),(0,r.kt)(o.Z,{value:"view",label:"View",mdxType:"TabItem"},(0,r.kt)("p",null,"Shows list of financial products. ","[Source: CoinGecko]"),(0,r.kt)("p",null,"Source Code: [",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_view.py#L587"},"link"),"]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def display_products(sortby: str = "Platform", ascend: bool = False, limit: int = 15, export: str = "") -> None\n')),(0,r.kt)("h2",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of records to display"),(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sortby"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Key by which to sort data"),(0,r.kt)("td",{parentName:"tr",align:null},"Platform"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ascend"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Flag to sort data descending"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"export"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Export dataframe data to csv,json,xlsx file"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("h2",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,"This function does not return anything"))))}m.isMDXComponent=!0},85162:(t,e,n)=>{n.d(e,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(t){let{children:e,hidden:n,className:o}=t;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},e)}},65488:(t,e,n)=>{n.d(e,{Z:()=>m});var a=n(87462),r=n(67294),l=n(86010),o=n(72389),i=n(67392),u=n(7094),p=n(12466);const s="tabList__CuJ",c="tabItem_LNqP";function d(t){var e;const{lazy:n,block:o,defaultValue:d,values:m,groupId:k,className:b}=t,g=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??g.map((t=>{let{props:{value:e,label:n,attributes:a}}=t;return{value:e,label:n,attributes:a}})),y=(0,i.l)(f,((t,e)=>t.value===e.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===d?d:d??(null==(e=g.find((t=>t.props.default)))?void 0:e.props.value)??g[0].props.value;if(null!==N&&!f.some((t=>t.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${f.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:h}=(0,u.U)(),[T,O]=(0,r.useState)(N),w=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=k){const t=v[k];null!=t&&t!==T&&f.some((e=>e.value===t))&&O(t)}const x=t=>{const e=t.currentTarget,n=w.indexOf(e),a=f[n].value;a!==T&&(E(e),O(a),null!=k&&h(k,String(a)))},D=t=>{var e;let n=null;switch(t.key){case"Enter":x(t);break;case"ArrowRight":{const e=w.indexOf(t.currentTarget)+1;n=w[e]??w[0];break}case"ArrowLeft":{const e=w.indexOf(t.currentTarget)-1;n=w[e]??w[w.length-1];break}}null==(e=n)||e.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},b)},f.map((t=>{let{value:e,label:n,attributes:o}=t;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:t=>w.push(t),onKeyDown:D,onClick:x},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":T===e})}),n??e)}))),n?(0,r.cloneElement)(g.filter((t=>t.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==T})))))}function m(t){const e=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(e)},t))}}}]);