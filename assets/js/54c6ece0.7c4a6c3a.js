"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14275],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>d});var o=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var i=o.createContext({}),s=function(t){var e=o.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=s(t.components);return o.createElement(i.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},c=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,i=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),c=s(r),d=n,h=c["".concat(i,".").concat(d)]||c[d]||f[d]||a;return r?o.createElement(h,l(l({ref:e},u),{},{components:r})):o.createElement(h,l({ref:e},u))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,l=new Array(a);l[0]=c;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:n,l[1]=p;for(var s=2;s<a;s++)l[s]=r[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},70544:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={},l=void 0,p={unversionedId:"features/portfolio/om",id:"features/portfolio/om",title:"om",description:".. role:: python(code)",source:"@site/sdk/features/portfolio/om.md",sourceDirName:"features/portfolio",slug:"/features/portfolio/om",permalink:"/sdk/features/portfolio/om",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"mret",permalink:"/sdk/features/portfolio/mret"},next:{title:"payoff",permalink:"/sdk/features/portfolio/payoff"}},i={},s=[],u={toc:s};function f(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,n.kt)("p",null,"|"),(0,n.kt)("p",null,"To obtain charts, make sure to add :python:",(0,n.kt)("inlineCode",{parentName:"p"},"chart = True")," as the last parameter."),(0,n.kt)("p",null,".. raw:: html"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,n.kt)("p",null,"{{< highlight python >}}\nportfolio.om(\nportfolio: openbb_terminal.portfolio.portfolio_model.PortfolioModel,\nthreshold_start: float = 0,\nthreshold_end: float = 1.5,\nchart: bool = False,\n) -> pandas.core.frame.DataFrame\n{{< /highlight >}}"),(0,n.kt)("p",null,".. raw:: html"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<p>\nGet omega ratio\n</p>\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("p",{parentName:"li"},"  portfolio: Portfolio\nPortfolio object with trades loaded\nthreshold_start: float\nannualized target return threshold start of plotted threshold range\nthreshold_end: float\nannualized target return threshold end of plotted threshold range\nchart: bool\nFlag to display chart"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Returns")),(0,n.kt)("p",{parentName:"li"},"  pd.DataFrame"))),(0,n.kt)("p",null,"|"),(0,n.kt)("p",null,".. raw:: html"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<h3>\n> Getting charts\n</h3>\n")),(0,n.kt)("p",null,"{{< highlight python >}}\nportfolio.om(\nportfolio: openbb_terminal.portfolio.portfolio_model.PortfolioModel,\nthreshold_start: float = 0,\nthreshold_end: float = 1.5,\nchart: bool = False,\n)\n{{< /highlight >}}"),(0,n.kt)("p",null,".. raw:: html"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<p>\nDisplay omega ratio\n</p>\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("p",{parentName:"li"},"  portfolio: Portfolio\nPortfolio object with trades loaded\nthreshold_start: float\nannualized target return threshold start of plotted threshold range\nthreshold_end: float\nannualized target return threshold end of plotted threshold range\nchart: bool\nFlag to display chart"))))}f.isMDXComponent=!0}}]);