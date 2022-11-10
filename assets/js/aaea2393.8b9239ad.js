"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68046],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,u=d["".concat(c,".").concat(h)]||d[h]||m[h]||o;return n?r.createElement(u,s(s({ref:t},p),{},{components:n})):r.createElement(u,s({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},s=void 0,i={unversionedId:"features/stocks/ta/recom",id:"features/stocks/ta/recom",title:"recom",description:".. role:: python(code)",source:"@site/terminal/features/stocks/ta/recom.md",sourceDirName:"features/stocks/ta",slug:"/features/stocks/ta/recom",permalink:"/terminal/features/stocks/ta/recom",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/stocks/ta/recom.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"stocks_data",permalink:"/terminal/features/stocks/sia/stocks_data"},next:{title:"rsp",permalink:"/terminal/features/stocks/ta/rsp"}},c={},l=[],p={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,a.kt)("p",null,"|"),(0,a.kt)("p",null,"To obtain charts, make sure to add :python:",(0,a.kt)("inlineCode",{parentName:"p"},"chart = True")," as the last parameter."),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,a.kt)("p",null,"{{< highlight python >}}\nstocks.ta.recom(\nsymbol: str,\nscreener: str = 'america',\nexchange: str = '',\ninterval: str = '',\nchart: bool = False,\n) -> pandas.core.frame.DataFrame\n{{< /highlight >}}"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<p>\nGet tradingview recommendation based on technical indicators\n</p>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("p",{parentName:"li"},"  symbol : str\nTicker symbol to get the recommendation from tradingview based on technical indicators\nscreener : str\nScreener based on tradingview docs ",(0,a.kt)("a",{parentName:"p",href:"https://python-tradingview-ta.readthedocs.io/en/latest/usage.html"},"https://python-tradingview-ta.readthedocs.io/en/latest/usage.html"),"\nexchange: str\nExchange based on tradingview docs ",(0,a.kt)("a",{parentName:"p",href:"https://python-tradingview-ta.readthedocs.io/en/latest/usage.html"},"https://python-tradingview-ta.readthedocs.io/en/latest/usage.html"),"\ninterval: str\nInterval time to check technical indicators and correspondent recommendation\nchart: bool\nFlag to display chart"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)("p",{parentName:"li"},"  df_recommendation: pd.DataFrame\nDataframe of tradingview recommendations based on technical indicators"))),(0,a.kt)("p",null,"|"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<h3>\n> Getting charts\n</h3>\n")),(0,a.kt)("p",null,"{{< highlight python >}}\nstocks.ta.recom(\nsymbol: str,\nscreener: str = 'america',\nexchange: str = '',\ninterval: str = '',\nexport: str = '',\nchart: bool = False,\n)\n{{< /highlight >}}"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<p>\nPrint tradingview recommendation based on technical indicators\n</p>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("p",{parentName:"li"},"  symbol : str\nTicker symbol to get tradingview recommendation based on technical indicators\nscreener : str\nScreener based on tradingview docs ",(0,a.kt)("a",{parentName:"p",href:"https://python-tradingview-ta.readthedocs.io/en/latest/usage.html"},"https://python-tradingview-ta.readthedocs.io/en/latest/usage.html"),"\nexchange: str\nExchange based on tradingview docs ",(0,a.kt)("a",{parentName:"p",href:"https://python-tradingview-ta.readthedocs.io/en/latest/usage.html"},"https://python-tradingview-ta.readthedocs.io/en/latest/usage.html"),"\ninterval: str\nInterval time to check technical indicators and correspondent recommendation\nexport: str\nFormat of export file\nchart: bool\nFlag to display chart"))))}m.isMDXComponent=!0}}]);