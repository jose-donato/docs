"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19198],{3905:(t,e,r)=>{r.d(e,{Zo:()=>i,kt:()=>k});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),c=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},i=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,i=p(t,["components","mdxType","originalType","parentName"]),u=c(r),k=n,f=u["".concat(s,".").concat(k)]||u[k]||m[k]||o;return r?a.createElement(f,l(l({ref:e},i),{},{components:r})):a.createElement(f,l({ref:e},i))}));function k(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,l=new Array(o);l[0]=u;var p={};for(var s in e)hasOwnProperty.call(e,s)&&(p[s]=e[s]);p.originalType=t,p.mdxType="string"==typeof t?t:n,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9597:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={},l=void 0,p={unversionedId:"features/stocks/fa/mktcap",id:"features/stocks/fa/mktcap",title:"mktcap",description:".. role:: python(code)",source:"@site/terminal/features/stocks/fa/mktcap.md",sourceDirName:"features/stocks/fa",slug:"/features/stocks/fa/mktcap",permalink:"/terminal/features/stocks/fa/mktcap",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/stocks/fa/mktcap.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"mgmt",permalink:"/terminal/features/stocks/fa/mgmt"},next:{title:"poly_financials",permalink:"/terminal/features/stocks/fa/poly_financials"}},s={},c=[],i={toc:c};function m(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},i,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,n.kt)("p",null,"|"),(0,n.kt)("p",null,"To obtain charts, make sure to add :python:",(0,n.kt)("inlineCode",{parentName:"p"},"chart = True")," as the last parameter."),(0,n.kt)("p",null,".. raw:: html"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,n.kt)("p",null,"{{< highlight python >}}\nstocks.fa.mktcap(\nsymbol: str,\nstart_date: str = '2019-11-08',\nchart: bool = False,\n) -> Tuple","[pandas.core.frame.DataFrame, str]","\n{{< /highlight >}}"),(0,n.kt)("p",null,".. raw:: html"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<p>\nGet market cap over time for ticker. [Source: Yahoo Finance]\n</p>\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("p",{parentName:"li"},"  symbol: str\nTicker to get market cap over time\nstart_date: str\nStart date to display market cap\nchart: bool\nFlag to display chart"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Returns")),(0,n.kt)("p",{parentName:"li"},"  pd.DataFrame:\nDataframe of estimated market cap over time\nstr:\nCurrency of ticker"))),(0,n.kt)("p",null,"|"),(0,n.kt)("p",null,".. raw:: html"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<h3>\n> Getting charts\n</h3>\n")),(0,n.kt)("p",null,"{{< highlight python >}}\nstocks.fa.mktcap(\nsymbol: str,\nstart_date: str = '2019-11-08',\nexport: str = '',\nexternal_axes: Optional[List","[matplotlib.axes._axes.Axes]","] = None,\nchart: bool = False,\n)\n{{< /highlight >}}"),(0,n.kt)("p",null,".. raw:: html"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"<p>\nDisplay market cap over time. [Source: Yahoo Finance]\n</p>\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Parameters")),(0,n.kt)("p",{parentName:"li"},"  symbol: str\nStock ticker symbol\nstart_date: str\nStart date to display market cap\nexport: str\nFormat to export data\nexternal_axes : Optional[List","[plt.Axes]","], optional\nExternal axes (1 axis is expected in the list), by default None\nchart: bool\nFlag to display chart"))))}m.isMDXComponent=!0}}]);