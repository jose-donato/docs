"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84285],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,b=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98755:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),l=n(65099),o=n(85162);const s={title:"snews",description:"OpenBB SDK Function"},i="snews",u={unversionedId:"functions/stocks/ba/snews",id:"functions/stocks/ba/snews",title:"snews",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/stocks/ba/snews.md",sourceDirName:"functions/stocks/ba",slug:"/functions/stocks/ba/snews",permalink:"/sdk/functions/stocks/ba/snews",draft:!1,tags:[],version:"current",frontMatter:{title:"snews",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"sentiment",permalink:"/sdk/functions/stocks/ba/sentiment"},next:{title:"spac",permalink:"/sdk/functions/stocks/ba/spac"}},p={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2},{value:"Examples",id:"examples-1",level:2}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"snews"},"snews"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Get headlines sentiment using VADER model over time. ","[Source: Finnhub]"),(0,a.kt)("p",null,"Source Code: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/behavioural_analysis/finnhub_model.py#L97"},"link")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def get_headlines_sentiment(symbol: str) -> DataFrame\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Ticker of company"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,"This function does not return anything"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("hr",null)),(0,a.kt)(o.Z,{value:"view",label:"View",mdxType:"TabItem"},(0,a.kt)("p",null,"Display stock price and headlines sentiment using VADER model over time. ","[Source: Finnhub]"),(0,a.kt)("p",null,"Source Code: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/behavioural_analysis/finnhub_view.py#L27"},"link")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def display_stock_price_headlines_sentiment(symbol: str, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"symbol"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Ticker of company"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"export"),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Format to export data"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"external_axes"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional[List","[plt.Axes]","]"),(0,a.kt)("td",{parentName:"tr",align:null},"External axes (2 axes are expected in the list), by default None"),(0,a.kt)("td",{parentName:"tr",align:null},"None"),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,"This function does not return anything"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"examples-1"},"Examples"),(0,a.kt)("hr",null))))}d.isMDXComponent=!0},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},65099:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(87462),a=n(67294),l=n(86010),o=n(72389),s=n(67392),i=n(7094),u=n(12466);const p="tabItem_hGfb";var c=n(16550);function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:d,groupId:b,className:k}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,s.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:N}=(0,i.U)(),[x,w]=(0,a.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=b){const e=g[b];null!=e&&e!==x&&h.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,n=O.indexOf(t),r=h[n].value;r!==x&&(T(t),w(r),null!=b&&N(b,String(r)))},D=e=>{var t;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()},{pathname:j}=(0,c.TH)();return a.createElement("div",null,a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none lg:-ml-7 my-6")},h.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>O.push(e),onKeyDown:D,onClick:E},o,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase text-sm border-b",p,null==o?void 0:o.className,{"border-b-2 pointer-events-none":x===t,"cursor-pointer":x!==t,"border-b-2 text-[#669dcb] border-[#669dcb]":x===t&&j.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":x===t&&j.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":x!==t&&j.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#abd2f1] hover:border-[#abd2f1]":x!==t&&j.startsWith("/terminal")})}),n??t)})),a.createElement("li",{className:"w-full border-b border-grey-600 pointer-events-none py-1 mb-[9.5px]"})),n?(0,a.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function d(e){const t=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}}}]);