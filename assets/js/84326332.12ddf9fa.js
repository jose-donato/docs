"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56872],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),y=o,f=m["".concat(l,".").concat(y)]||m[y]||p[y]||a;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"get_ycrv_countries",description:"OpenBB SDK Function"},c="get_ycrv_countries",i={unversionedId:"functions/economy/get_ycrv_countries",id:"functions/economy/get_ycrv_countries",title:"get_ycrv_countries",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/economy/get_ycrv_countries.md",sourceDirName:"functions/economy",slug:"/functions/economy/get_ycrv_countries",permalink:"/sdk/functions/economy/get_ycrv_countries",draft:!1,tags:[],version:"current",frontMatter:{title:"get_ycrv_countries",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"get_groups",permalink:"/sdk/functions/economy/get_groups"},next:{title:"glbonds",permalink:"/sdk/functions/economy/glbonds"}},l={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}],s={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get_ycrv_countries"},"get_ycrv_countries"),(0,o.kt)("p",null,"Get available countries for ycrv command."),(0,o.kt)("p",null,"Source Code: [",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/investingcom_model.py#L285"},"link"),"]"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def get_ycrv_countries() -> List[str]\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"This function does not take any parameters."),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"List","[str]"),(0,o.kt)("td",{parentName:"tr",align:null},"List of available countries.")))))}p.isMDXComponent=!0}}]);