"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9344],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var i=a.createContext({}),u=function(t){var e=a.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=u(r),d=n,k=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return r?a.createElement(k,o(o({ref:e},c),{},{components:r})):a.createElement(k,o({ref:e},c))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:n,o[1]=s;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6849:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),l=r(65099),o=r(85162);const s={title:"lastcontracts",description:"OpenBB SDK Function"},i="lastcontracts",u={unversionedId:"reference/stocks/gov/lastcontracts",id:"reference/stocks/gov/lastcontracts",title:"lastcontracts",description:"OpenBB SDK Function",source:"@site/content/sdk/reference/stocks/gov/lastcontracts.md",sourceDirName:"reference/stocks/gov",slug:"/reference/stocks/gov/lastcontracts",permalink:"/sdk/reference/stocks/gov/lastcontracts",draft:!1,tags:[],version:"current",frontMatter:{title:"lastcontracts",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"histcont",permalink:"/sdk/reference/stocks/gov/histcont"},next:{title:"lasttrades",permalink:"/sdk/reference/stocks/gov/lasttrades"}},c={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}],m={toc:p};function d(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"lastcontracts"},"lastcontracts"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,n.kt)("p",null,"Get last government contracts ","[Source: quiverquant.com]"),(0,n.kt)("p",null,"Source Code: [",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_model.py#L377"},"link"),"]"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"openbb.stocks.gov.lastcontracts(past_transaction_days: int = 2)\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"past_transaction_days"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of days to look back"),(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,n.kt)("td",{parentName:"tr",align:null},"DataFrame of government contracts")))),(0,n.kt)("hr",null)),(0,n.kt)(o.Z,{value:"view",label:"Chart",mdxType:"TabItem"},(0,n.kt)("p",null,"Last government contracts ","[Source: quiverquant.com]"),(0,n.kt)("p",null,"Source Code: [",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_view.py#L225"},"link"),"]"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'openbb.stocks.gov.lastcontracts_chart(past_transaction_days: int = 2, limit: int = 20, sum_contracts: bool = False, export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None)\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"past_transaction_days"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of days to look back"),(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"limit"),(0,n.kt)("td",{parentName:"tr",align:null},"int"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of contracts to show"),(0,n.kt)("td",{parentName:"tr",align:null},"20"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"sum_contracts"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"Flag to show total amount of contracts given out."),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"export"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},"Format to export data"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"external_axes"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional[List","[plt.Axes]","]"),(0,n.kt)("td",{parentName:"tr",align:null},"External axes (1 axis is expected in the list), by default None"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,"This function does not return anything"),(0,n.kt)("hr",null))))}d.isMDXComponent=!0},85162:(t,e,r)=>{r.d(e,{Z:()=>o});var a=r(67294),n=r(86010);const l="tabItem_Ymn6";function o(t){let{children:e,hidden:r,className:o}=t;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:r},e)}},65099:(t,e,r)=>{r.d(e,{Z:()=>d});var a=r(87462),n=r(67294),l=r(86010),o=r(72389),s=r(67392),i=r(7094),u=r(12466);const c="tabItem_hGfb";var p=r(16550);function m(t){var e;const{lazy:r,block:o,defaultValue:m,values:d,groupId:k,className:b}=t,g=n.Children.map(t.children,(t=>{if((0,n.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??g.map((t=>{let{props:{value:e,label:r,attributes:a}}=t;return{value:e,label:r,attributes:a}})),h=(0,s.l)(f,((t,e)=>t.value===e.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===m?m:m??(null==(e=g.find((t=>t.props.default)))?void 0:e.props.value)??g[0].props.value;if(null!==v&&!f.some((t=>t.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:y}=(0,i.U)(),[x,O]=(0,n.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:w}=(0,u.o5)();if(null!=k){const t=N[k];null!=t&&t!==x&&f.some((e=>e.value===t))&&O(t)}const E=t=>{const e=t.currentTarget,r=T.indexOf(e),a=f[r].value;a!==x&&(w(e),O(a),null!=k&&y(k,String(a)))},D=t=>{var e;let r=null;switch(t.key){case"Enter":E(t);break;case"ArrowRight":{const e=T.indexOf(t.currentTarget)+1;r=T[e]??T[0];break}case"ArrowLeft":{const e=T.indexOf(t.currentTarget)-1;r=T[e]??T[T.length-1];break}}null==(e=r)||e.focus()},{pathname:_}=(0,p.TH)();return n.createElement("div",null,n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none lg:-ml-7 my-6")},f.map((t=>{let{value:e,label:r,attributes:o}=t;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:t=>T.push(t),onKeyDown:D,onClick:E},o,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase text-sm border-b",c,null==o?void 0:o.className,{"border-b-2 pointer-events-none":x===e,"cursor-pointer":x!==e,"border-b-2 text-[#669dcb] border-[#669dcb]":x===e&&_.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":x===e&&_.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":x!==e&&_.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#abd2f1] hover:border-[#abd2f1]":x!==e&&_.startsWith("/terminal")})}),r??e)})),n.createElement("li",{className:"w-full border-b border-grey-600 pointer-events-none py-1 mb-[9.5px]"})),r?(0,n.cloneElement)(g.filter((t=>t.props.value===x))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==x})))))}function d(t){const e=(0,o.Z)();return n.createElement(m,(0,a.Z)({key:String(e)},t))}}}]);