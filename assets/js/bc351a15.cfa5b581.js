"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34479],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},l=void 0,i={unversionedId:"features/etf/candle",id:"features/etf/candle",title:"candle",description:".. role:: python(code)",source:"@site/terminal/features/etf/candle.md",sourceDirName:"features/etf",slug:"/features/etf/candle",permalink:"/terminal/features/etf/candle",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/etf/candle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ycrv",permalink:"/terminal/features/economy/ycrv"},next:{title:"mover",permalink:"/terminal/features/etf/disc/mover"}},s={},c=[],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,r.kt)("p",null,"|"),(0,r.kt)("p",null,".. raw:: html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,r.kt)("p",null,"{{< highlight python >}}\netf.candle(\nsymbol: str,\ndata: pandas.core.frame.DataFrame = None,\nuse_matplotlib: bool = True,\nintraday: bool = False,\nadd_trend: bool = False,\nma: Optional[Iterable","[int]","] = None,\nasset_type: str = '',\nstart_date: Union","[datetime.datetime, str,\nNoneType]"," = datetime.datetime(\n2019, 11, 6, 10, 18, 10, 664216, chart: bool = False,\n), interval: int = 1440,\nend_date: Union","[datetime.datetime, str,\nNoneType]"," = datetime.datetime(\n2022, 11, 10, 10, 18, 10, 664216, chart: bool = False,\n), prepost: bool = False,\nsource: str = 'YahooFinance',\niexrange: str = 'ytd',\nweekly: bool = False,\nmonthly: bool = False,\nexternal_axes: Optional[List","[matplotlib.axes._axes.Axes]","] = None,\nraw: bool = False,\nyscale: str = 'linear',\nchart: bool = False,\n)\n{{< /highlight >}}"),(0,r.kt)("p",null,".. raw:: html"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<p>\nShow candle plot of loaded ticker.\n\n[Source: Yahoo Finance, IEX Cloud or Alpha Vantage]\n</p>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("p",{parentName:"li"},"  symbol: str\nTicker name\ndata: pd.DataFrame\nStock dataframe\nuse_matplotlib: bool\nFlag to use matplotlib instead of interactive plotly chart\nintraday: bool\nFlag for intraday data for plotly range breaks\nadd_trend: bool\nFlag to add high and low trends to chart\nma: Tuple","[int]","\nMoving averages to add to the candle\nasset_type","_",": str\nString to include in title\nexternal_axes : Optional[List","[plt.Axes]","], optional\nExternal axes (2 axes are expected in the list), by default None\nasset_type","_",": str\nString to include in title\nstart_date: str or datetime, optional\nStart date to get data from with. - datetime or string format (YYYY-MM-DD)\ninterval: int\nInterval (in minutes) to get data 1, 5, 15, 30, 60 or 1440\nend_date: str or datetime, optional\nEnd date to get data from with. - datetime or string format (YYYY-MM-DD)\nprepost: bool\nPre and After hours data\nsource: str\nSource of data extracted\niexrange: str\nTimeframe to get IEX data.\nweekly: bool\nFlag to get weekly data\nmonthly: bool\nFlag to get monthly data\nraw : bool, optional\nFlag to display raw data, by default False\nyscale: str\nLinear or log for yscale"))))}p.isMDXComponent=!0}}]);