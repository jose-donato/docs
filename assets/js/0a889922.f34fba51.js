"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[88239],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=p(n),c=r,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(k,i(i({ref:e},u),{},{components:n})):a.createElement(k,i({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67856:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=n(87462),r=(n(67294),n(3905)),l=n(65488),i=n(85162);const o={title:"grhist",description:"OpenBB SDK Function"},s="grhist",p={unversionedId:"functions/stocks/options/grhist",id:"functions/stocks/options/grhist",title:"grhist",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/stocks/options/grhist.md",sourceDirName:"functions/stocks/options",slug:"/functions/stocks/options/grhist",permalink:"/sdk/functions/stocks/options/grhist",draft:!1,tags:[],version:"current",frontMatter:{title:"grhist",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"generate_data",permalink:"/sdk/functions/stocks/options/generate_data"},next:{title:"hist_ce",permalink:"/sdk/functions/stocks/options/hist_ce"}},u={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}],d={toc:m};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"grhist"},"grhist"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Get histoical option greeks"),(0,r.kt)("p",null,"Source Code: [",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/screen/syncretism_model.py#L37"},"link"),"]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def get_historical_greeks(symbol: str, expiry: str, strike: Union[str, float], chain_id: str = "", put: bool = False) -> pd.DataFrame\n')),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Stock ticker symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expiry"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Option expiration date"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"strike"),(0,r.kt)("td",{parentName:"tr",align:null},"Union","[str, float]"),(0,r.kt)("td",{parentName:"tr",align:null},"Strike price to look for"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chain_id"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"OCC option symbol.  Overwrites other inputs"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"put"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Is this a put option?"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,r.kt)("td",{parentName:"tr",align:null},"Dataframe containing historical greeks"))))),(0,r.kt)(i.Z,{value:"view",label:"View",mdxType:"TabItem"},(0,r.kt)("p",null,"Plots historical greeks for a given option. ","[Source: Syncretism]"),(0,r.kt)("p",null,"Source Code: [",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/screen/syncretism_view.py#L107"},"link"),"]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def view_historical_greeks(symbol: str, expiry: str, strike: Union[float, str], greek: str = "Delta", chain_id: str = "", put: bool = False, raw: bool = False, limit: Union[int, str] = 20, export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None) -> None\n')),(0,r.kt)("h2",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Stock ticker"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expiry"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Expiration date"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"strike"),(0,r.kt)("td",{parentName:"tr",align:null},"Union","[str, float]"),(0,r.kt)("td",{parentName:"tr",align:null},"Strike price to consider"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"greek"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Greek variable to plot"),(0,r.kt)("td",{parentName:"tr",align:null},"Delta"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chain_id"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"OCC option chain.  Overwrites other variables"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"put"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Is this a put option?"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"raw"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Print to console"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of rows to show in raw"),(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"export"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Format to export data"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"external_axes"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional[List","[plt.Axes]","]"),(0,r.kt)("td",{parentName:"tr",align:null},"External axes (1 axis is expected in the list), by default None"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("h2",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,"This function does not return anything"))))}c.isMDXComponent=!0},85162:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(t){let{children:e,hidden:n,className:i}=t;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},e)}},65488:(t,e,n)=>{n.d(e,{Z:()=>c});var a=n(87462),r=n(67294),l=n(86010),i=n(72389),o=n(67392),s=n(7094),p=n(12466);const u="tabList__CuJ",m="tabItem_LNqP";function d(t){var e;const{lazy:n,block:i,defaultValue:d,values:c,groupId:k,className:g}=t,N=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=c??N.map((t=>{let{props:{value:e,label:n,attributes:a}}=t;return{value:e,label:n,attributes:a}})),h=(0,o.l)(b,((t,e)=>t.value===e.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===d?d:d??(null==(e=N.find((t=>t.props.default)))?void 0:e.props.value)??N[0].props.value;if(null!==f&&!b.some((t=>t.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${b.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,s.U)(),[O,T]=(0,r.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=k){const t=y[k];null!=t&&t!==O&&b.some((e=>e.value===t))&&T(t)}const E=t=>{const e=t.currentTarget,n=x.indexOf(e),a=b[n].value;a!==O&&(w(e),T(a),null!=k&&v(k,String(a)))},_=t=>{var e;let n=null;switch(t.key){case"Enter":E(t);break;case"ArrowRight":{const e=x.indexOf(t.currentTarget)+1;n=x[e]??x[0];break}case"ArrowLeft":{const e=x.indexOf(t.currentTarget)-1;n=x[e]??x[x.length-1];break}}null==(e=n)||e.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},g)},b.map((t=>{let{value:e,label:n,attributes:i}=t;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:t=>x.push(t),onKeyDown:_,onClick:E},i,{className:(0,l.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":O===e})}),n??e)}))),n?(0,r.cloneElement)(N.filter((t=>t.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==O})))))}function c(t){const e=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(e)},t))}}}]);