"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[94220],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89504:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),l=r(65099),o=r(85162);const i={title:"watchlist",description:"OpenBB SDK Function"},s="watchlist",u={unversionedId:"reference/stocks/ba/watchlist",id:"reference/stocks/ba/watchlist",title:"watchlist",description:"OpenBB SDK Function",source:"@site/content/sdk/reference/stocks/ba/watchlist.md",sourceDirName:"reference/stocks/ba",slug:"/reference/stocks/ba/watchlist",permalink:"/sdk/reference/stocks/ba/watchlist",draft:!1,tags:[],version:"current",frontMatter:{title:"watchlist",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"trending",permalink:"/sdk/reference/stocks/ba/trending"},next:{title:"wsb",permalink:"/sdk/reference/stocks/ba/wsb"}},c={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"watchlist"},"watchlist"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Get reddit users watchlists ","[Source: reddit]","."),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/reddit_model.py#L40"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"openbb.stocks.ba.watchlist(limit: int = 5)\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"Number of posts to look through"),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Tuple[List","[praw.models.reddit.submission.Submission]",", dict, int]"),(0,a.kt)("td",{parentName:"tr",align:null},"List of reddit submissions,",(0,a.kt)("br",null),"Dictionary of tickers and their count,",(0,a.kt)("br",null),"Count of how many posts were analyzed.")))),(0,a.kt)("hr",null)),(0,a.kt)(o.Z,{value:"view",label:"Chart",mdxType:"TabItem"},(0,a.kt)("p",null,"Prints other users watchlist. ","[Source: Reddit]","."),(0,a.kt)("p",null,"Source Code: [",(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/reddit_view.py#L138"},"link"),"]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"openbb.stocks.ba.watchlist_chart(limit: int = 5)\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"Maximum number of submissions to look at"),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,"This function does not return anything"),(0,a.kt)("hr",null))))}m.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(67294),a=r(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},65099:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(87462),a=r(67294),l=r(86010),o=r(72389),i=r(67392),s=r(7094),u=r(12466);const c="tabItem_hGfb";var p=r(16550);function d(e){var t;const{lazy:r,block:o,defaultValue:d,values:m,groupId:b,className:h}=e,k=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??k.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),v=(0,i.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:N}=(0,s.U)(),[w,O]=(0,a.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=b){const e=g[b];null!=e&&e!==w&&f.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,r=T.indexOf(t),n=f[r].value;n!==w&&(x(t),O(n),null!=b&&N(b,String(n)))},D=e=>{var t;let r=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;r=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;r=T[t]??T[T.length-1];break}}null==(t=r)||t.focus()},{pathname:P}=(0,p.TH)();return a.createElement("div",null,a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none lg:-ml-7 my-6")},f.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:D,onClick:E},o,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase text-sm border-b",c,null==o?void 0:o.className,{"border-b-2 pointer-events-none":w===t,"cursor-pointer":w!==t,"border-b-2 text-[#669dcb] border-[#669dcb]":w===t&&P.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":w===t&&P.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":w!==t&&P.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#abd2f1] hover:border-[#abd2f1]":w!==t&&P.startsWith("/terminal")})}),r??t)})),a.createElement("li",{className:"w-full border-b border-grey-600 pointer-events-none py-1 mb-[9.5px]"})),r?(0,a.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}}}]);