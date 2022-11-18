"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18719],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45342:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"lobbying",description:"OpenBB Terminal Function"},o="lobbying",l={unversionedId:"features/stocks/government/lobbying",id:"features/stocks/government/lobbying",title:"lobbying",description:"OpenBB Terminal Function",source:"@site/content/terminal/features/stocks/government/lobbying.md",sourceDirName:"features/stocks/government",slug:"/features/stocks/government/lobbying",permalink:"/terminal/features/stocks/government/lobbying",draft:!1,tags:[],version:"current",frontMatter:{title:"lobbying",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"load",permalink:"/terminal/features/stocks/government/load"},next:{title:"qtrcontracts",permalink:"/terminal/features/stocks/government/qtrcontracts"}},c={},s=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lobbying"},"lobbying"),(0,a.kt)("p",null,"Lobbying details ","[Source: www.quiverquant.com]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"usage: lobbying [-l LIMIT]\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"Limit of events to show"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"2022 Feb 16, 07:27 (\ud83e\udd8b) /stocks/gov/ $ lobbying\n2021-01-21: TESLA INC N/A\n\n2020-10-20: TESLA INC N/A\n\n2020-10-20: TESLA INC N/A\n\n2020-07-20: TESLA INC $70000\n        Discussions regarding Sec. 30D electric vehicle tax credit (S.1094/H.R.2256, the Driving America Forward Act) Sec. 30C alternative fuel infrastructure tax credit(S.3735, Securing America's Clean Fuel Infrastructure Act) Sec. 48 and 25D solar investment tax credit Storage tax credit (S.1142/H.R.2096,Energy Storage Tax Incentive and Deployment Act)\n\n2020-07-19: TESLA INC N/A\n\n2020-04-20: TESLA INC $140000\n        H.R.748/S.3548, Coronavirus Aid, Relief, and Economic Security Act\n\n2020-04-20: TESLA INC $30000\n        Issues related to the 30D EV tax credit, including the Driving America Forward Act, S. 1094 and H.R. 2256.\n\n2020-01-21: TESLA INC $150000\n        Discussions regarding Sec. 30D electric vehicle tax credit (S.1094/H.R.2256, the Driving America Forward Act) Sec. 30C alternative tax credit (H.R.3301, the Taxpayer Certainty and Disaster Tax Relief Act) Sec. 48 and 25D solar investment tax credits (H.R.3961/S.2289, Renewable Energy Extension Act) Storage tax credit (S.1142/H.R.2096,Energy Storage Tax Incentive and Deployment Act)  H.R.1865, Further Consolidated Appropriations Act, 2020\n\n2020-01-17: TESLA INC $30000\n        Issues related to the 30D EV tax credit, including the Driving America Forward Act, S. 1094 and H.R. 2256.\n\n2019-10-21: TESLA INC $150000\n        Discussions regarding electric vehicle manufacturing and sales policies,charging infrastructure and regulation (S.2302, America's Transportation and Infrastruction Act;H.R.2616/S.674, Clean Corridors Act) Issues impacting autonomous vehicles\n")))}p.isMDXComponent=!0}}]);