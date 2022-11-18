"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59860],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>d});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),s=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},m=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=s(r),d=n,g=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return r?a.createElement(g,l(l({ref:e},m),{},{components:r})):a.createElement(g,l({ref:e},m))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},84688:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={title:"Futures"},l=void 0,o={unversionedId:"guides/guides/futures",id:"guides/guides/futures",title:"Futures",description:"The functions from the OpenBB Terminal Futures menu is part of the SDK layer, and provides methods for programmatically accessing the data and charts associated with them. Get started by importing the OpenBB SDK to the Python script or Jupyter Notebook file.",source:"@site/content/sdk/guides/guides/futures.md",sourceDirName:"guides/guides",slug:"/guides/guides/futures",permalink:"/sdk/guides/guides/futures",draft:!1,tags:[],version:"current",frontMatter:{title:"Futures"},sidebar:"tutorialSidebar",previous:{title:"Forex",permalink:"/sdk/guides/guides/forex"},next:{title:"Keys",permalink:"/sdk/guides/guides/keys"}},p={},s=[{value:"How to Use",id:"how-to-use",level:2},{value:"Examples",id:"examples",level:2},{value:"Import Statements",id:"import-statements",level:3},{value:"Search",id:"search",level:3},{value:"Curve",id:"curve",level:3},{value:"Historical",id:"historical",level:3}],m={toc:s};function c(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The functions from the OpenBB Terminal Futures menu is part of the SDK layer, and provides methods for programmatically accessing the data and charts associated with them. Get started by importing the OpenBB SDK to the Python script or Jupyter Notebook file."),(0,n.kt)("p",null,"Below is a brief description of each function within the Futures module:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Path"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.futures.curve"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Futures Forward Curve Data")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.futures.curve_chart"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Futures Forward Curve Chart")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.futures.search"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Search Available Futures")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.futures.historical"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Historical OHLC+V Data")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"openbb.futures.historical_chart"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Function"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Chart Historical Price of Individual Contracts")))),(0,n.kt)("h2",{id:"how-to-use"},"How to Use"),(0,n.kt)("p",null,"Print the doctstring for any function with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"help(openbb.futures.curve)\n\nHelp on Operation in module openbb_terminal.core.library.operation:\n\n<openbb_terminal.core.library.operation.Operation object>\n    Use 'futures.curve_chart' to access the view.\n    Get curve futures [Source: Yahoo Finance]\n\n        Parameters\n        ----------\n        symbol: str\n            symbol to get forward curve\n\n        Returns\n        -------\n        pd.DataFrame\n            Dictionary with sector weightings allocation\n")),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"The examples here will assume that the block below is included at the top of the file:"),(0,n.kt)("h3",{id:"import-statements"},"Import Statements"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.sdk import openbb\nimport pandas as pd\n%matplotlib inline\n")),(0,n.kt)("h3",{id:"search"},"Search"),(0,n.kt)("p",null,"Futures can be searched by description, exchange, or category."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"obb.futures.search(description = 'Eurodollar')\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"Ticker"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Exchange"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Category"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"66"),(0,n.kt)("td",{parentName:"tr",align:"left"},"GE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Eurodollar Futures"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"currency")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"67"),(0,n.kt)("td",{parentName:"tr",align:"left"},"GLB"),(0,n.kt)("td",{parentName:"tr",align:"left"},"One-Month Eurodollar Futures"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"currency")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"152"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SED"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SED (SOFR-Eurodollar) Spread Futures"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CME"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bonds")))),(0,n.kt)("p",null,"The historical front-month price is captured to a DataFrame with:"),(0,n.kt)("h3",{id:"curve"},"Curve"),(0,n.kt)("p",null,"The forward curve data for a symbol is fetched with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"eurodollar = openbb.futures.curve('GE')\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Expiration"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Futures"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-01 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"95.3561")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-01 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"94.9925")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-01-01 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"94.985")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-02-01 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"94.9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-03-01 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"94.825")))),(0,n.kt)("p",null,"...continued"),(0,n.kt)("p",null,"To display a chart of the data, use ",(0,n.kt)("inlineCode",{parentName:"p"},"curve_chart"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"openbb.futures.curve_chart(symbol = 'GE')\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/202352342-eecf872d-8934-42e7-8b53-4e3415bc2993.png",alt:"openbb.futures.curve_chart",title:"openbb.futures.curve_chart"})),(0,n.kt)("h3",{id:"historical"},"Historical"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"historical")," function can fetch the historical front-month price:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"wti_continuous = obb.futures.historical('CL')\n")),(0,n.kt)("p",null,"Or, while actively trading, individual contracts. The example below requests historical data for the December WTI contract from 2023 to 2030, starting at the first recorded trading day of the December 2030 contract."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"cl_2312 = openbb.futures.historical(symbols = ['CL'], expiry = '2023-12')\ncl_2312 = cl_2312.rename(columns={'Adj Close':'2023-12'})\ncl_2412 = openbb.futures.historical(symbols = ['CL'], expiry = '2024-12')\ncl_2412 = cl_2412.rename(columns={'Adj Close':'2024-12'})\ncl_2512 = openbb.futures.historical(symbols = ['CL'], expiry = '2025-12')\ncl_2512 = cl_2512.rename(columns={'Adj Close':'2025-12'})\ncl_2612 = openbb.futures.historical(symbols = ['CL'], expiry = '2026-12')\ncl_2612 = cl_2612.rename(columns={'Adj Close':'2026-12'})\ncl_2712 = openbb.futures.historical(symbols = ['CL'], expiry = '2027-12')\ncl_2712 = cl_2712.rename(columns={'Adj Close':'2027-12'})\ncl_2812 = openbb.futures.historical(symbols = ['CL'], expiry = '2028-12')\ncl_2812 = cl_2812.rename(columns={'Adj Close':'2028-12'})\ncl_2912 = openbb.futures.historical(symbols = ['CL'], expiry = '2029-12')\ncl_2912 = cl_2912.rename(columns={'Adj Close':'2029-12'})\ncl_3012 = openbb.futures.historical(symbols = ['CL'], expiry = '2030-12')\ncl_3012 = cl_3012.rename(columns={'Adj Close':'2030-12'})\n\nhistorical = pd.DataFrame(data = [cl_2312['2023-12'],cl_2412['2024-12'],cl_2512['2025-12'],cl_2612['2026-12'],cl_2712['2027-12'],cl_2812['2028-12'],cl_2912['2029-12'],cl_3012['2030-12']]).transpose()\nhistorical = historical.dropna()\n\nhistorical\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"right"},"2023-12"),(0,n.kt)("th",{parentName:"tr",align:"right"},"2024-12"),(0,n.kt)("th",{parentName:"tr",align:"right"},"2025-12"),(0,n.kt)("th",{parentName:"tr",align:"right"},"2026-12"),(0,n.kt)("th",{parentName:"tr",align:"right"},"2027-12"),(0,n.kt)("th",{parentName:"tr",align:"right"},"2028-12"),(0,n.kt)("th",{parentName:"tr",align:"right"},"2029-12"),(0,n.kt)("th",{parentName:"tr",align:"right"},"2030-12"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2020-01-24 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"49.61"),(0,n.kt)("td",{parentName:"tr",align:"right"},"50.14"),(0,n.kt)("td",{parentName:"tr",align:"right"},"50.7"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.56"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.63"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.63"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.63"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.63")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2020-01-27 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"49.94"),(0,n.kt)("td",{parentName:"tr",align:"right"},"50.6"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.18"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.05"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.12"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.12"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.12"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.12")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2020-01-28 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"50.17"),(0,n.kt)("td",{parentName:"tr",align:"right"},"50.78"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.23"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.55"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.62"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.62"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.62"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.62")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2020-01-29 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"50.07"),(0,n.kt)("td",{parentName:"tr",align:"right"},"50.64"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.13"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.6"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.67"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.67"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.67"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.67")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2020-01-30 00:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"50.27"),(0,n.kt)("td",{parentName:"tr",align:"right"},"50.91"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.44"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.49"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.56"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.56"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.56"),(0,n.kt)("td",{parentName:"tr",align:"right"},"51.56")))),(0,n.kt)("p",null,"...continued\n| 2022-11-09 00:00:00 |     76.69 |     71.62 |     68.01 |     65.1  |     62.52 |     60.17 |     58.12 |     56.49 |\n| 2022-11-10 00:00:00 |     77    |     71.64 |     67.89 |     64.86 |     62.26 |     59.91 |     57.86 |     56.23 |\n| 2022-11-11 00:00:00 |     78.81 |     73.1  |     69.22 |     66.19 |     63.6  |     61.25 |     59.2  |     57.57 |\n| 2022-11-14 00:00:00 |     77.4  |     72.35 |     68.89 |     66.15 |     63.62 |     61.25 |     59.13 |     57.5  |\n| 2022-11-15 00:00:00 |     78.82 |     73.66 |     70.14 |     67.36 |     64.94 |     62.62 |     60.49 |     58.68 |"))}c.isMDXComponent=!0}}]);