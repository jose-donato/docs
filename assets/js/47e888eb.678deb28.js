"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84747],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),m=u(n),g=a,d=m["".concat(p,".").concat(g)]||m[g]||c[g]||l;return n?r.createElement(d,o(o({ref:e},s),{},{components:n})):r.createElement(d,o({ref:e},s))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25411:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={title:"topbuys",description:"OpenBB Terminal Function"},o="topbuys",i={unversionedId:"features/stocks/government/topbuys",id:"features/stocks/government/topbuys",title:"topbuys",description:"OpenBB Terminal Function",source:"@site/content/terminal/features/stocks/government/topbuys.md",sourceDirName:"features/stocks/government",slug:"/features/stocks/government/topbuys",permalink:"/terminal/features/stocks/government/topbuys",draft:!1,tags:[],version:"current",frontMatter:{title:"topbuys",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"qtrcontracts",permalink:"/terminal/features/stocks/government/qtrcontracts"},next:{title:"toplobbying",permalink:"/terminal/features/stocks/government/toplobbying"}},p={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],s={toc:u};function c(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"topbuys"},"topbuys"),(0,a.kt)("p",null,"Top buys for government trading. ","[Source: www.quiverquant.com]"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"usage: topbuys [-g {congress,senate,house}] [-p PAST_TRANSACTIONS_MONTHS] [-l LIMIT] [--raw]\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"gov"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"congress"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"congress, senate, house")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"past_transactions_months"),(0,a.kt)("td",{parentName:"tr",align:null},"Past transaction months"),(0,a.kt)("td",{parentName:"tr",align:null},"6"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"limit"),(0,a.kt)("td",{parentName:"tr",align:null},"Limit of top tickers to display"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"raw"),(0,a.kt)("td",{parentName:"tr",align:null},"Print raw data."),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154266344-944b0c5b-f7b0-4fdb-a020-a93565f6c13c.png",alt:"topbuys"})),(0,a.kt)("hr",null))}c.isMDXComponent=!0}}]);