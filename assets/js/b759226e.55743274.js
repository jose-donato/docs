"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[45256],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},96919:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=t(87462),o=(t(67294),t(3905));const i={title:"indices",description:"OpenBB SDK Function"},a="indices",c={unversionedId:"functions/economy/indices",id:"functions/economy/indices",title:"indices",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/economy/indices.md",sourceDirName:"functions/economy",slug:"/functions/economy/indices",permalink:"/sdk/functions/economy/indices",draft:!1,tags:[],version:"current",frontMatter:{title:"indices",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/sdk/functions/economy/index_cmd"},next:{title:"inf",permalink:"/sdk/functions/economy/inf"}},l={},s=[{value:"openbb_terminal.economy.wsj_model.us_indices",id:"openbb_terminaleconomywsj_modelus_indices",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],p={toc:s};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"indices"},"indices"),(0,o.kt)("h2",{id:"openbb_terminaleconomywsj_modelus_indices"},"openbb_terminal.economy.wsj_model.us_indices"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/economy/wsj_model.py'",title:"'openbb_terminal/economy/wsj_model.py'"},"def us_indices() -> DataFrame\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/wsj_model.py#L16"},"Source Code")),(0,o.kt)("p",null,"Description: Get the top US indices"),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"This function does not take any parameters."),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,o.kt)("td",{parentName:"tr",align:null},"Dataframe containing name, price, net change and percent change")))),(0,o.kt)("h2",{id:"examples"},"Examples"))}m.isMDXComponent=!0}}]);