"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3841],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(f,o(o({ref:e},u),{},{components:n})):a.createElement(f,o({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86800:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"assets",description:"OpenBB SDK Function"},o="assets",i={unversionedId:"functions/portfolio/alloc/assets",id:"functions/portfolio/alloc/assets",title:"assets",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/portfolio/alloc/assets.md",sourceDirName:"functions/portfolio/alloc",slug:"/functions/portfolio/alloc/assets",permalink:"/sdk/functions/portfolio/alloc/assets",draft:!1,tags:[],version:"current",frontMatter:{title:"assets",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"news",permalink:"/sdk/functions/news"},next:{title:"countries",permalink:"/sdk/functions/portfolio/alloc/countries"}},p={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],u={toc:s};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"assets"},"assets"),(0,r.kt)("p",null,"Display portfolio asset allocation compared to the benchmark"),(0,r.kt)("p",null,"Source Code: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L2493"},"link")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def get_assets_allocation(portfolio_engine: portfolio_model.PortfolioEngine, tables: bool, limit: int, recalculate: bool) -> None\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"portfolio_engine"),(0,r.kt)("td",{parentName:"tr",align:null},"PortfolioEngine"),(0,r.kt)("td",{parentName:"tr",align:null},"PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,r.kt)("br",null),"Use ",(0,r.kt)("inlineCode",{parentName:"td"},"portfolio.load")," to create a PortfolioEngine."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tables"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to include separate allocation tables"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of assets you wish to show, by default this is set to 10"),(0,r.kt)("td",{parentName:"tr",align:null},"this"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"recalculate"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Flag to force recalculate allocation if already exists"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Union[pd.DataFrame, Tuple","[pd.DataFrame, pd.DataFrame, pd.DataFrame]","]"),(0,r.kt)("td",{parentName:"tr",align:null},"DataFrame with combined allocation plus individual allocation if tables is ",(0,r.kt)("inlineCode",{parentName:"td"},"True"),".")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("hr",null))}c.isMDXComponent=!0}}]);