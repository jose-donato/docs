"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86915],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),p=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),s=p(a),k=r,c=s["".concat(u,".").concat(k)]||s[k]||d[k]||l;return a?n.createElement(c,o(o({ref:e},m),{},{components:a})):n.createElement(c,o({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},68238:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>u,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),l=a(65488),o=a(85162);const i={title:"maxdecorr",description:"OpenBB SDK Function"},u="maxdecorr",p={unversionedId:"functions/portfolio/po/maxdecorr",id:"functions/portfolio/po/maxdecorr",title:"maxdecorr",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/portfolio/po/maxdecorr.md",sourceDirName:"functions/portfolio/po",slug:"/functions/portfolio/po/maxdecorr",permalink:"/sdk/functions/portfolio/po/maxdecorr",draft:!1,tags:[],version:"current",frontMatter:{title:"maxdecorr",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"load_bl_views",permalink:"/sdk/functions/portfolio/po/load_bl_views"},next:{title:"maxdiv",permalink:"/sdk/functions/portfolio/po/maxdiv"}},m={},d=[{value:"openbb_terminal.portfolio.portfolio_optimization.optimizer_model.get_max_decorrelation_portfolio",id:"openbb_terminalportfolioportfolio_optimizationoptimizer_modelget_max_decorrelation_portfolio",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"openbb_terminal.portfolio.portfolio_optimization.optimizer_view.display_max_decorr",id:"openbb_terminalportfolioportfolio_optimizationoptimizer_viewdisplay_max_decorr",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2},{value:"Examples",id:"examples-1",level:2}],s={toc:d};function k(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"maxdecorr"},"maxdecorr"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,r.kt)("h2",{id:"openbb_terminalportfolioportfolio_optimizationoptimizer_modelget_max_decorrelation_portfolio"},"openbb_terminal.portfolio.portfolio_optimization.optimizer_model.get_max_decorrelation_portfolio"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/portfolio/portfolio_optimization/optimizer_model.py'",title:"'openbb_terminal/portfolio/portfolio_optimization/optimizer_model.py'"},"def get_max_decorrelation_portfolio(symbols: List[str], interval: str, start_date: str, end_date: str, log_returns: bool, freq: str, maxnan: float, threshold: float, method: str, covariance: str, d_ewma: float, value: float, value_short: float) -> Tuple\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/optimizer_model.py#L1223"},"Source Code")),(0,r.kt)("p",null,"Description: Builds a maximal decorrelation portfolio"),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbols"),(0,r.kt)("td",{parentName:"tr",align:null},"List","[str]"),(0,r.kt)("td",{parentName:"tr",align:null},"List of portfolio stocks"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"interval"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},'interval to get stock data, by default "3mo"'),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start_date"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"If not using interval, start date string (YYYY-MM-DD)"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end_date"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"If not using interval, end date string (YYYY-MM-DD). If empty use last",(0,r.kt)("br",null),"weekday."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_returns"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"If True calculate log returns, else arithmetic returns. Default value",(0,r.kt)("br",null),"is False"),(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"freq"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The frequency used to calculate returns. Default value is 'D'. Possible",(0,r.kt)("br",null),"values are:",(0,r.kt)("br",null),(0,r.kt)("br",null),"- 'D' for daily returns.",(0,r.kt)("br",null),"- 'W' for weekly returns.",(0,r.kt)("br",null),"- 'M' for monthly returns."),(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxnan"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Max percentage of nan values accepted per asset to be included in",(0,r.kt)("br",null),"returns."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"threshold"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Value used to replace outliers that are higher to threshold."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Method used to fill nan values. Default value is 'time'. For more information see s",(0,r.kt)("inlineCode",{parentName:"td"},"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"),"__."),(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"covariance"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The method used to estimate the covariance matrix:",(0,r.kt)("br",null),"The default is 'hist'. Possible values are:",(0,r.kt)("br",null),(0,r.kt)("br",null),"- 'hist': use historical estimates.",(0,r.kt)("br",null),"- 'ewma1': use ewma with adjust=True. For more information see ",(0,r.kt)("inlineCode",{parentName:"td"},"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"),(0,r.kt)("strong",{parentName:"td"},".",(0,r.kt)("br",null),"- 'ewma2': use ewma with adjust=False. For more information see ",(0,r.kt)("inlineCode",{parentName:"strong"},"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>")),".",(0,r.kt)("br",null),"- 'ledoit': use the Ledoit and Wolf Shrinkage method.",(0,r.kt)("br",null),"- 'oas': use the Oracle Approximation Shrinkage method.",(0,r.kt)("br",null),"- 'shrunk': use the basic Shrunk Covariance method.",(0,r.kt)("br",null),"- 'gl': use the basic Graphical Lasso Covariance method.",(0,r.kt)("br",null),"- 'jlogo': use the j-LoGo Covariance method. For more information see: ",(0,r.kt)("inlineCode",{parentName:"td"},"a-jLogo"),".",(0,r.kt)("br",null),"- 'fixed': denoise using fixed method. For more information see chapter 2 of ",(0,r.kt)("inlineCode",{parentName:"td"},"a-MLforAM"),".",(0,r.kt)("br",null),"- 'spectral': denoise using spectral method. For more information see chapter 2 of ",(0,r.kt)("inlineCode",{parentName:"td"},"a-MLforAM"),".",(0,r.kt)("br",null),"- 'shrink': denoise using shrink method. For more information see chapter 2 of ",(0,r.kt)("inlineCode",{parentName:"td"},"a-MLforAM"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"is"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"d_ewma"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"The smoothing factor of ewma methods.",(0,r.kt)("br",null),"The default is 0.94."),(0,r.kt)("td",{parentName:"tr",align:null},"0.94"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount of money to allocate. The default is 1."),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value_short"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount to allocate to portfolio in short positions. The default is 0."),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tuple[Optional","[dict]",", pd.DataFrame]"),(0,r.kt)("td",{parentName:"tr",align:null},"Dictionary of portfolio weights,",(0,r.kt)("br",null),"DataFrame of stock returns.")))),(0,r.kt)("h2",{id:"examples"},"Examples")),(0,r.kt)(o.Z,{value:"view",label:"View",mdxType:"TabItem"},(0,r.kt)("h2",{id:"openbb_terminalportfolioportfolio_optimizationoptimizer_viewdisplay_max_decorr"},"openbb_terminal.portfolio.portfolio_optimization.optimizer_view.display_max_decorr"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/portfolio/portfolio_optimization/optimizer_view.py'",title:"'openbb_terminal/portfolio/portfolio_optimization/optimizer_view.py'"},"def display_max_decorr(symbols: List[str], interval: str, start_date: str, end_date: str, log_returns: bool, freq: str, maxnan: float, threshold: float, method: str, covariance: str, d_ewma: float, value: float, value_short: float, table: bool) -> Dict\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/optimizer_view.py#L1827"},"Source Code")),(0,r.kt)("p",null,"Description: Builds a maximal decorrelation portfolio"),(0,r.kt)("h2",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbols"),(0,r.kt)("td",{parentName:"tr",align:null},"List","[str]"),(0,r.kt)("td",{parentName:"tr",align:null},"List of portfolio tickers"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"interval"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"interval to look at returns from"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start_date"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"If not using interval, start date string (YYYY-MM-DD)"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end_date"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"If not using interval, end date string (YYYY-MM-DD). If empty use last",(0,r.kt)("br",null),"weekday."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_returns"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"If True calculate log returns, else arithmetic returns. Default value",(0,r.kt)("br",null),"is False"),(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"freq"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The frequency used to calculate returns. Default value is 'D'. Possible",(0,r.kt)("br",null),"values are:",(0,r.kt)("br",null),"- 'D' for daily returns.",(0,r.kt)("br",null),"- 'W' for weekly returns.",(0,r.kt)("br",null),"- 'M' for monthly returns."),(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxnan"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Max percentage of nan values accepted per asset to be included in",(0,r.kt)("br",null),"returns."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"threshold"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Value used to replace outliers that are higher to threshold."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Method used to fill nan values. Default value is 'time'. For more information see ",(0,r.kt)("inlineCode",{parentName:"td"},"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"),"__."),(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"covariance"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The method used to estimate the covariance matrix:",(0,r.kt)("br",null),"The default is 'hist'. Possible values are:",(0,r.kt)("br",null),(0,r.kt)("br",null),"- 'hist': use historical estimates.",(0,r.kt)("br",null),"- 'ewma1': use ewma with adjust=True. For more information see ",(0,r.kt)("inlineCode",{parentName:"td"},"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"),(0,r.kt)("strong",{parentName:"td"},".",(0,r.kt)("br",null),"- 'ewma2': use ewma with adjust=False. For more information see ",(0,r.kt)("inlineCode",{parentName:"strong"},"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>")),".",(0,r.kt)("br",null),"- 'ledoit': use the Ledoit and Wolf Shrinkage method.",(0,r.kt)("br",null),"- 'oas': use the Oracle Approximation Shrinkage method.",(0,r.kt)("br",null),"- 'shrunk': use the basic Shrunk Covariance method.",(0,r.kt)("br",null),"- 'gl': use the basic Graphical Lasso Covariance method.",(0,r.kt)("br",null),"- 'jlogo': use the j-LoGo Covariance method. For more information see: ",(0,r.kt)("inlineCode",{parentName:"td"},"a-jLogo"),".",(0,r.kt)("br",null),"- 'fixed': denoise using fixed method. For more information see chapter 2 of ",(0,r.kt)("inlineCode",{parentName:"td"},"a-MLforAM"),".",(0,r.kt)("br",null),"- 'spectral': denoise using spectral method. For more information see chapter 2 of ",(0,r.kt)("inlineCode",{parentName:"td"},"a-MLforAM"),".",(0,r.kt)("br",null),"- 'shrink': denoise using shrink method. For more information see chapter 2 of ",(0,r.kt)("inlineCode",{parentName:"td"},"a-MLforAM"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"is"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"d_ewma"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"The smoothing factor of ewma methods.",(0,r.kt)("br",null),"The default is 0.94."),(0,r.kt)("td",{parentName:"tr",align:null},"0.94"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount to allocate to portfolio in long positions, by default 1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value_short"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount to allocate to portfolio in short positions, by default 0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"True if plot table weights, by default False"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("h2",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,"This function does not return anything"),(0,r.kt)("h2",{id:"examples-1"},"Examples"))))}k.isMDXComponent=!0},85162:(t,e,a)=>{a.d(e,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(t){let{children:e,hidden:a,className:o}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},e)}},65488:(t,e,a)=>{a.d(e,{Z:()=>k});var n=a(87462),r=a(67294),l=a(86010),o=a(72389),i=a(67392),u=a(7094),p=a(12466);const m="tabList__CuJ",d="tabItem_LNqP";function s(t){var e;const{lazy:a,block:o,defaultValue:s,values:k,groupId:c,className:g}=t,f=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=k??f.map((t=>{let{props:{value:e,label:a,attributes:n}}=t;return{value:e,label:a,attributes:n}})),b=(0,i.l)(N,((t,e)=>t.value===e.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===s?s:s??(null==(e=f.find((t=>t.props.default)))?void 0:e.props.value)??f[0].props.value;if(null!==h&&!N.some((t=>t.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${N.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,u.U)(),[_,w]=(0,r.useState)(h),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=c){const t=v[c];null!=t&&t!==_&&N.some((e=>e.value===t))&&w(t)}const D=t=>{const e=t.currentTarget,a=x.indexOf(e),n=N[a].value;n!==_&&(T(e),w(n),null!=c&&y(c,String(n)))},O=t=>{var e;let a=null;switch(t.key){case"Enter":D(t);break;case"ArrowRight":{const e=x.indexOf(t.currentTarget)+1;a=x[e]??x[0];break}case"ArrowLeft":{const e=x.indexOf(t.currentTarget)-1;a=x[e]??x[x.length-1];break}}null==(e=a)||e.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},g)},N.map((t=>{let{value:e,label:a,attributes:o}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:_===e?0:-1,"aria-selected":_===e,key:e,ref:t=>x.push(t),onKeyDown:O,onClick:D},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":_===e})}),a??e)}))),a?(0,r.cloneElement)(f.filter((t=>t.props.value===_))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==_})))))}function k(t){const e=(0,o.Z)();return r.createElement(s,(0,n.Z)({key:String(e)},t))}}}]);