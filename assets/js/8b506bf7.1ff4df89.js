"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25869],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function u(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var i=n.createContext({}),p=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,i=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),m=p(a),k=l,N=m["".concat(i,".").concat(k)]||m[k]||s[k]||r;return a?n.createElement(N,o(o({ref:e},d),{},{components:a})):n.createElement(N,o({ref:e},d))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,o=new Array(r);o[0]=m;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:l,o[1]=u;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85776:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>u,metadata:()=>p,toc:()=>s});var n=a(87462),l=(a(67294),a(3905)),r=a(65099),o=a(85162);const u={title:"ef",description:"OpenBB SDK Function"},i="ef",p={unversionedId:"functions/portfolio/po/ef",id:"functions/portfolio/po/ef",title:"ef",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/portfolio/po/ef.md",sourceDirName:"functions/portfolio/po",slug:"/functions/portfolio/po/ef",permalink:"/sdk/functions/portfolio/po/ef",draft:!1,tags:[],version:"current",frontMatter:{title:"ef",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"blacklitterman",permalink:"/sdk/functions/portfolio/po/blacklitterman"},next:{title:"equal",permalink:"/sdk/functions/portfolio/po/equal"}},d={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2},{value:"Examples",id:"examples-1",level:2}],m={toc:s};function k(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ef"},"ef"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Get efficient frontier"),(0,l.kt)("p",null,"Source Code: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/optimizer_model.py#L1514"},"link")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_ef(symbols: List[str], interval: str, start_date: str, end_date: str, log_returns: bool, freq: str, maxnan: float, threshold: float, method: str, risk_measure: str, risk_free_rate: float, alpha: float, value: float, value_short: float, n_portfolios: int, seed: int) -> None\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"symbols"),(0,l.kt)("td",{parentName:"tr",align:null},"List","[str]"),(0,l.kt)("td",{parentName:"tr",align:null},"List of portfolio tickers"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interval"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"interval to look at returns from"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"start_date"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"If not using interval, start date string (YYYY-MM-DD)"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"end_date"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"If not using interval, end date string (YYYY-MM-DD). If empty use last",(0,l.kt)("br",null),"weekday."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log_returns"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"If True calculate log returns, else arithmetic returns. Default value",(0,l.kt)("br",null),"is False"),(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"freq"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"The frequency used to calculate returns. Default value is 'D'. Possible",(0,l.kt)("br",null),"values are:",(0,l.kt)("br",null),(0,l.kt)("br",null),"- 'D' for daily returns.",(0,l.kt)("br",null),"- 'W' for weekly returns.",(0,l.kt)("br",null),"- 'M' for monthly returns."),(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxnan"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Max percentage of nan values accepted per asset to be included in",(0,l.kt)("br",null),"returns."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"threshold"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Value used to replace outliers that are higher to threshold."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Method used to fill nan values. Default value is 'time'. For more information see ",(0,l.kt)("inlineCode",{parentName:"td"},"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"),"__."),(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"risk_measure"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"The risk measure used to optimize the portfolio.",(0,l.kt)("br",null),"The default is 'MV'. Possible values are:",(0,l.kt)("br",null),(0,l.kt)("br",null),"- 'MV': Standard Deviation.",(0,l.kt)("br",null),"- 'MAD': Mean Absolute Deviation.",(0,l.kt)("br",null),"- 'MSV': Semi Standard Deviation.",(0,l.kt)("br",null),"- 'FLPM': First Lower Partial Moment (Omega Ratio).",(0,l.kt)("br",null),"- 'SLPM': Second Lower Partial Moment (Sortino Ratio).",(0,l.kt)("br",null),"- 'CVaR': Conditional Value at Risk.",(0,l.kt)("br",null),"- 'EVaR': Entropic Value at Risk.",(0,l.kt)("br",null),"- 'WR': Worst Realization.",(0,l.kt)("br",null),"- 'ADD': Average Drawdown of uncompounded cumulative returns.",(0,l.kt)("br",null),"- 'UCI': Ulcer Index of uncompounded cumulative returns.",(0,l.kt)("br",null),"- 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.",(0,l.kt)("br",null),"- 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.",(0,l.kt)("br",null),"- 'MDD': Maximum Drawdown of uncompounded cumulative returns."),(0,l.kt)("td",{parentName:"tr",align:null},"is"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"risk_free_rate"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Risk free rate, must be in the same interval of assets returns. Used for",(0,l.kt)("br",null),"'FLPM' and 'SLPM' and Sharpe objective function. The default is 0."),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Significance level of CVaR, EVaR, CDaR and EDaR",(0,l.kt)("br",null),"The default is 0.05."),(0,l.kt)("td",{parentName:"tr",align:null},"0.05"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount to allocate to portfolio in long positions, by default 1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value_short"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount to allocate to portfolio in short positions, by default 0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"n_portfolios"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},'"Number of portfolios to simulate. The default value is 100.'),(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"seed"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Seed used to generate random portfolios. The default value is 123."),(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"True")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"returns"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tuple["),(0,l.kt)("td",{parentName:"tr",align:null},"pd.DataFrame,",(0,l.kt)("br",null),"pd.DataFrame,",(0,l.kt)("br",null),"pd.DataFrame,",(0,l.kt)("br",null),"pd.DataFrame,",(0,l.kt)("br",null),"Optional","[pd.DataFrame]",",",(0,l.kt)("br",null),"NDArray","[floating]",",",(0,l.kt)("br",null),"NDArray","[floating]",",",(0,l.kt)("br",null),"rp.Portfolio,")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("hr",null)),(0,l.kt)(o.Z,{value:"view",label:"View",mdxType:"TabItem"},(0,l.kt)("p",null,"Display efficient frontier"),(0,l.kt)("p",null,"Source Code: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/optimizer_view.py#L2074"},"link")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def display_ef(symbols: List[str], interval: str, start_date: str, end_date: str, log_returns: bool, freq: str, maxnan: float, threshold: float, method: str, risk_measure: str, risk_free_rate: float, alpha: float, value: float, value_short: float, n_portfolios: int, seed: int, tangency: bool, plot_tickers: bool, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"symbols"),(0,l.kt)("td",{parentName:"tr",align:null},"List","[str]"),(0,l.kt)("td",{parentName:"tr",align:null},"List of portfolio tickers"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interval"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"interval to look at returns from"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"start_date"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"If not using interval, start date string (YYYY-MM-DD)"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"end_date"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"If not using interval, end date string (YYYY-MM-DD). If empty use last",(0,l.kt)("br",null),"weekday."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log_returns"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"If True calculate log returns, else arithmetic returns. Default value",(0,l.kt)("br",null),"is False"),(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"freq"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"The frequency used to calculate returns. Default value is 'D'. Possible",(0,l.kt)("br",null),"values are:",(0,l.kt)("br",null),"- 'D' for daily returns.",(0,l.kt)("br",null),"- 'W' for weekly returns.",(0,l.kt)("br",null),"- 'M' for monthly returns."),(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxnan"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Max percentage of nan values accepted per asset to be included in",(0,l.kt)("br",null),"returns."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"threshold"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Value used to replace outliers that are higher to threshold."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Method used to fill nan values. Default value is 'time'. For more information see ",(0,l.kt)("inlineCode",{parentName:"td"},"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"),"__."),(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"risk_measure"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"The risk measure used to optimize the portfolio.",(0,l.kt)("br",null),"The default is 'MV'. Possible values are:",(0,l.kt)("br",null),(0,l.kt)("br",null),"- 'MV': Standard Deviation.",(0,l.kt)("br",null),"- 'MAD': Mean Absolute Deviation.",(0,l.kt)("br",null),"- 'MSV': Semi Standard Deviation.",(0,l.kt)("br",null),"- 'FLPM': First Lower Partial Moment (Omega Ratio).",(0,l.kt)("br",null),"- 'SLPM': Second Lower Partial Moment (Sortino Ratio).",(0,l.kt)("br",null),"- 'CVaR': Conditional Value at Risk.",(0,l.kt)("br",null),"- 'EVaR': Entropic Value at Risk.",(0,l.kt)("br",null),"- 'WR': Worst Realization.",(0,l.kt)("br",null),"- 'ADD': Average Drawdown of uncompounded cumulative returns.",(0,l.kt)("br",null),"- 'UCI': Ulcer Index of uncompounded cumulative returns.",(0,l.kt)("br",null),"- 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.",(0,l.kt)("br",null),"- 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.",(0,l.kt)("br",null),"- 'MDD': Maximum Drawdown of uncompounded cumulative returns."),(0,l.kt)("td",{parentName:"tr",align:null},"is"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"risk_free_rate"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Risk free rate, must be in the same interval of assets returns. Used for",(0,l.kt)("br",null),"'FLPM' and 'SLPM' and Sharpe objective function. The default is 0."),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Significance level of CVaR, EVaR, CDaR and EDaR",(0,l.kt)("br",null),"The default is 0.05."),(0,l.kt)("td",{parentName:"tr",align:null},"0.05"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount to allocate to portfolio in long positions, by default 1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value_short"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount to allocate to portfolio in short positions, by default 0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"n_portfolios"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},'"Number of portfolios to simulate. The default value is 100.'),(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"seed"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Seed used to generate random portfolios. The default value is 123."),(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tangency"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Adds the optimal line with the risk-free asset."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"external_axes"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional[List","[plt.Axes]","]"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional axes to plot data on"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"plot_tickers"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to plot the tickers for the assets"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,"This function does not return anything"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"examples-1"},"Examples"),(0,l.kt)("hr",null))))}k.isMDXComponent=!0},85162:(t,e,a)=>{a.d(e,{Z:()=>o});var n=a(67294),l=a(86010);const r="tabItem_Ymn6";function o(t){let{children:e,hidden:a,className:o}=t;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},e)}},65099:(t,e,a)=>{a.d(e,{Z:()=>k});var n=a(87462),l=a(67294),r=a(86010),o=a(72389),u=a(67392),i=a(7094),p=a(12466);const d="tabItem_hGfb";var s=a(16550);function m(t){var e;const{lazy:a,block:o,defaultValue:m,values:k,groupId:N,className:g}=t,f=l.Children.map(t.children,(t=>{if((0,l.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),c=k??f.map((t=>{let{props:{value:e,label:a,attributes:n}}=t;return{value:e,label:a,attributes:n}})),b=(0,u.l)(c,((t,e)=>t.value===e.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===m?m:m??(null==(e=f.find((t=>t.props.default)))?void 0:e.props.value)??f[0].props.value;if(null!==h&&!c.some((t=>t.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${c.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,i.U)(),[D,T]=(0,l.useState)(h),w=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=N){const t=v[N];null!=t&&t!==D&&c.some((e=>e.value===t))&&T(t)}const _=t=>{const e=t.currentTarget,a=w.indexOf(e),n=c[a].value;n!==D&&(x(e),T(n),null!=N&&y(N,String(n)))},M=t=>{var e;let a=null;switch(t.key){case"Enter":_(t);break;case"ArrowRight":{const e=w.indexOf(t.currentTarget)+1;a=w[e]??w[0];break}case"ArrowLeft":{const e=w.indexOf(t.currentTarget)-1;a=w[e]??w[w.length-1];break}}null==(e=a)||e.focus()},{pathname:O}=(0,s.TH)();return l.createElement("div",null,l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("_group-tab list-none lg:-ml-7 my-6")},c.map((t=>{let{value:e,label:a,attributes:o}=t;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:D===e?0:-1,"aria-selected":D===e,key:e,ref:t=>w.push(t),onKeyDown:M,onClick:_},o,{className:(0,r.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase text-sm border-b",d,null==o?void 0:o.className,{"border-b-2 pointer-events-none":D===e,"cursor-pointer":D!==e,"border-b-2 text-[#669dcb] border-[#669dcb]":D===e&&O.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":D===e&&O.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":D!==e&&O.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#abd2f1] hover:border-[#abd2f1]":D!==e&&O.startsWith("/terminal")})}),a??e)})),l.createElement("li",{className:"w-full border-b border-grey-600 pointer-events-none py-1 mb-[9.5px]"})),a?(0,l.cloneElement)(f.filter((t=>t.props.value===D))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map(((t,e)=>(0,l.cloneElement)(t,{key:e,hidden:t.props.value!==D})))))}function k(t){const e=(0,o.Z)();return l.createElement(m,(0,n.Z)({key:String(e)},t))}}}]);