"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80518],{3905:(t,e,r)=>{r.d(e,{Zo:()=>i,kt:()=>k});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),c=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},i=function(t){var e=c(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,i=s(t,["components","mdxType","originalType","parentName"]),m=c(r),k=a,f=m["".concat(p,".").concat(k)]||m[k]||u[k]||o;return r?n.createElement(f,l(l({ref:e},i),{},{components:r})):n.createElement(f,l({ref:e},i))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75281:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},l=void 0,s={unversionedId:"features/stocks/ta/rsp",id:"features/stocks/ta/rsp",title:"rsp",description:".. role:: python(code)",source:"@site/terminal/features/stocks/ta/rsp.md",sourceDirName:"features/stocks/ta",slug:"/features/stocks/ta/rsp",permalink:"/terminal/features/stocks/ta/rsp",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/stocks/ta/rsp.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"recom",permalink:"/terminal/features/stocks/ta/recom"},next:{title:"summary",permalink:"/terminal/features/stocks/ta/summary"}},p={},c=[],i={toc:c};function u(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},i,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,a.kt)("p",null,"|"),(0,a.kt)("p",null,"To obtain charts, make sure to add :python:",(0,a.kt)("inlineCode",{parentName:"p"},"chart = True")," as the last parameter."),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,a.kt)("p",null,"{{< highlight python >}}\nstocks.ta.rsp(\ns_ticker: str = '',\nchart: bool = False,\n) -> Tuple","[pandas.core.frame.DataFrame]","\n{{< /highlight >}}"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<p>\nRelative strength percentile [Source: https://github.com/skyte/relative-strength]\nCurrently takes from https://github.com/soggyomelette/rs-log in order to get desired output\n</p>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("p",{parentName:"li"},"  s_ticker : str\nStock Ticker\nchart: bool\nFlag to display chart"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)("p",{parentName:"li"},"  pd.DataFrame\nDataframe of stock percentile\npd.Dataframe\nDataframe of industry percentile\npd.Dataframe\nRaw stock dataframe for export\npd.Dataframe\nRaw industry dataframe for export"))),(0,a.kt)("p",null,"|"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<h3>\n> Getting charts\n</h3>\n")),(0,a.kt)("p",null,"{{< highlight python >}}\nstocks.ta.rsp(\ns_ticker: str = '',\nexport: str = '',\ntickers_show: bool = False,\nchart: bool = False,\n)\n{{< /highlight >}}"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<p>\nDisplay Relative Strength Percentile [Source: https://github.com/skyte/relative-strength]\n</p>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("p",{parentName:"li"},"  s_ticker : str\nStock ticker\nexport : str\nFormat of export file\ntickers_show : bool\nBoolean to check if tickers in the same industry as the stock should be shown\nchart: bool\nFlag to display chart"))))}u.isMDXComponent=!0}}]);