"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25869],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):u(u({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),s=p(a),k=l,N=s["".concat(o,".").concat(k)]||s[k]||m[k]||r;return a?n.createElement(N,u(u({ref:e},d),{},{components:a})):n.createElement(N,u({ref:e},d))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,u=new Array(r);u[0]=s;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:l,u[1]=i;for(var p=2;p<r;p++)u[p]=a[p];return n.createElement.apply(null,u)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},85776:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(87462),l=(a(67294),a(3905)),r=a(65488),u=a(85162);const i={title:"ef",description:"OpenBB SDK Function"},o="ef",p={unversionedId:"functions/portfolio/po/ef",id:"functions/portfolio/po/ef",title:"ef",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/portfolio/po/ef.md",sourceDirName:"functions/portfolio/po",slug:"/functions/portfolio/po/ef",permalink:"/sdk/functions/portfolio/po/ef",draft:!1,tags:[],version:"current",frontMatter:{title:"ef",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"blacklitterman",permalink:"/sdk/functions/portfolio/po/blacklitterman"},next:{title:"equal",permalink:"/sdk/functions/portfolio/po/equal"}},d={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}],s={toc:m};function k(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ef"},"ef"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Get efficient frontier"),(0,l.kt)("p",null,"Source Code: [",(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/optimizer_model.py#L1514"},"link"),"]"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def get_ef(symbols: List[str], interval: str = "3y", start_date: str = "", end_date: str = "", log_returns: bool = False, freq: str = "D", maxnan: float = 0.05, threshold: float = 0, method: str = "time", risk_measure: str = "MV", risk_free_rate: float = 0, alpha: float = 0.05, value: float = 1.0, value_short: float = 0.0, n_portfolios: int = 100, seed: int = 123) -> Tuple[pd.DataFrame, pd.DataFrame, pd.DataFrame, pd.DataFrame, Optional[pd.DataFrame], numpy.ndarray[Any, numpy.dtype[numpy.floating]], numpy.ndarray[Any, numpy.dtype[numpy.floating]], riskfolio.Portfolio.Portfolio]\n')),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"symbols"),(0,l.kt)("td",{parentName:"tr",align:null},"List","[str]"),(0,l.kt)("td",{parentName:"tr",align:null},"List of portfolio tickers"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interval"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"interval to look at returns from"),(0,l.kt)("td",{parentName:"tr",align:null},"3y"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"start_date"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"If not using interval, start date string (YYYY-MM-DD)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"end_date"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"If not using interval, end date string (YYYY-MM-DD). If empty use last",(0,l.kt)("br",null),"weekday."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log_returns"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"If True calculate log returns, else arithmetic returns. Default value",(0,l.kt)("br",null),"is False"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"freq"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"The frequency used to calculate returns. Default value is 'D'. Possible",(0,l.kt)("br",null),"values are:",(0,l.kt)("br",null),(0,l.kt)("br",null),"- 'D' for daily returns.",(0,l.kt)("br",null),"- 'W' for weekly returns.",(0,l.kt)("br",null),"- 'M' for monthly returns."),(0,l.kt)("td",{parentName:"tr",align:null},"D"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxnan"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Max percentage of nan values accepted per asset to be included in",(0,l.kt)("br",null),"returns."),(0,l.kt)("td",{parentName:"tr",align:null},"0.05"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"threshold"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Value used to replace outliers that are higher to threshold."),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Method used to fill nan values. Default value is 'time'. For more information see ",(0,l.kt)("inlineCode",{parentName:"td"},"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"),"__."),(0,l.kt)("td",{parentName:"tr",align:null},"time"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"risk_measure"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"The risk measure used to optimize the portfolio.",(0,l.kt)("br",null),"The default is 'MV'. Possible values are:",(0,l.kt)("br",null),(0,l.kt)("br",null),"- 'MV': Standard Deviation.",(0,l.kt)("br",null),"- 'MAD': Mean Absolute Deviation.",(0,l.kt)("br",null),"- 'MSV': Semi Standard Deviation.",(0,l.kt)("br",null),"- 'FLPM': First Lower Partial Moment (Omega Ratio).",(0,l.kt)("br",null),"- 'SLPM': Second Lower Partial Moment (Sortino Ratio).",(0,l.kt)("br",null),"- 'CVaR': Conditional Value at Risk.",(0,l.kt)("br",null),"- 'EVaR': Entropic Value at Risk.",(0,l.kt)("br",null),"- 'WR': Worst Realization.",(0,l.kt)("br",null),"- 'ADD': Average Drawdown of uncompounded cumulative returns.",(0,l.kt)("br",null),"- 'UCI': Ulcer Index of uncompounded cumulative returns.",(0,l.kt)("br",null),"- 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.",(0,l.kt)("br",null),"- 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.",(0,l.kt)("br",null),"- 'MDD': Maximum Drawdown of uncompounded cumulative returns."),(0,l.kt)("td",{parentName:"tr",align:null},"MV"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"risk_free_rate"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Risk free rate, must be in the same interval of assets returns. Used for",(0,l.kt)("br",null),"'FLPM' and 'SLPM' and Sharpe objective function. The default is 0."),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Significance level of CVaR, EVaR, CDaR and EDaR",(0,l.kt)("br",null),"The default is 0.05."),(0,l.kt)("td",{parentName:"tr",align:null},"0.05"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount to allocate to portfolio in long positions, by default 1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value_short"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount to allocate to portfolio in short positions, by default 0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"n_portfolios"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},'"Number of portfolios to simulate. The default value is 100.'),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"seed"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Seed used to generate random portfolios. The default value is 123."),(0,l.kt)("td",{parentName:"tr",align:null},"123"),(0,l.kt)("td",{parentName:"tr",align:null},"True")))),(0,l.kt)("h2",{id:"returns"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tuple["),(0,l.kt)("td",{parentName:"tr",align:null},"pd.DataFrame,",(0,l.kt)("br",null),"pd.DataFrame,",(0,l.kt)("br",null),"pd.DataFrame,",(0,l.kt)("br",null),"pd.DataFrame,",(0,l.kt)("br",null),"Optional","[pd.DataFrame]",",",(0,l.kt)("br",null),"NDArray","[floating]",",",(0,l.kt)("br",null),"NDArray","[floating]",",",(0,l.kt)("br",null),"rp.Portfolio,"))))),(0,l.kt)(u.Z,{value:"view",label:"View",mdxType:"TabItem"},(0,l.kt)("p",null,"Display efficient frontier"),(0,l.kt)("p",null,"Source Code: [",(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/optimizer_view.py#L2074"},"link"),"]"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def display_ef(symbols: List[str], interval: str = "3y", start_date: str = "", end_date: str = "", log_returns: bool = False, freq: str = "D", maxnan: float = 0.05, threshold: float = 0, method: str = "time", risk_measure: str = "MV", risk_free_rate: float = 0, alpha: float = 0.05, value: float = 1.0, value_short: float = 0.0, n_portfolios: int = 100, seed: int = 123, tangency: bool = False, plot_tickers: bool = True, external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None) -> None\n')),(0,l.kt)("h2",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"symbols"),(0,l.kt)("td",{parentName:"tr",align:null},"List","[str]"),(0,l.kt)("td",{parentName:"tr",align:null},"List of portfolio tickers"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"interval"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"interval to look at returns from"),(0,l.kt)("td",{parentName:"tr",align:null},"3y"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"start_date"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"If not using interval, start date string (YYYY-MM-DD)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"end_date"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"If not using interval, end date string (YYYY-MM-DD). If empty use last",(0,l.kt)("br",null),"weekday."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log_returns"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"If True calculate log returns, else arithmetic returns. Default value",(0,l.kt)("br",null),"is False"),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"freq"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"The frequency used to calculate returns. Default value is 'D'. Possible",(0,l.kt)("br",null),"values are:",(0,l.kt)("br",null),"- 'D' for daily returns.",(0,l.kt)("br",null),"- 'W' for weekly returns.",(0,l.kt)("br",null),"- 'M' for monthly returns."),(0,l.kt)("td",{parentName:"tr",align:null},"D"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxnan"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Max percentage of nan values accepted per asset to be included in",(0,l.kt)("br",null),"returns."),(0,l.kt)("td",{parentName:"tr",align:null},"0.05"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"threshold"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Value used to replace outliers that are higher to threshold."),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"method"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Method used to fill nan values. Default value is 'time'. For more information see ",(0,l.kt)("inlineCode",{parentName:"td"},"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"),"__."),(0,l.kt)("td",{parentName:"tr",align:null},"time"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"risk_measure"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"The risk measure used to optimize the portfolio.",(0,l.kt)("br",null),"The default is 'MV'. Possible values are:",(0,l.kt)("br",null),(0,l.kt)("br",null),"- 'MV': Standard Deviation.",(0,l.kt)("br",null),"- 'MAD': Mean Absolute Deviation.",(0,l.kt)("br",null),"- 'MSV': Semi Standard Deviation.",(0,l.kt)("br",null),"- 'FLPM': First Lower Partial Moment (Omega Ratio).",(0,l.kt)("br",null),"- 'SLPM': Second Lower Partial Moment (Sortino Ratio).",(0,l.kt)("br",null),"- 'CVaR': Conditional Value at Risk.",(0,l.kt)("br",null),"- 'EVaR': Entropic Value at Risk.",(0,l.kt)("br",null),"- 'WR': Worst Realization.",(0,l.kt)("br",null),"- 'ADD': Average Drawdown of uncompounded cumulative returns.",(0,l.kt)("br",null),"- 'UCI': Ulcer Index of uncompounded cumulative returns.",(0,l.kt)("br",null),"- 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.",(0,l.kt)("br",null),"- 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.",(0,l.kt)("br",null),"- 'MDD': Maximum Drawdown of uncompounded cumulative returns."),(0,l.kt)("td",{parentName:"tr",align:null},"MV"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"risk_free_rate"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Risk free rate, must be in the same interval of assets returns. Used for",(0,l.kt)("br",null),"'FLPM' and 'SLPM' and Sharpe objective function. The default is 0."),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"alpha"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Significance level of CVaR, EVaR, CDaR and EDaR",(0,l.kt)("br",null),"The default is 0.05."),(0,l.kt)("td",{parentName:"tr",align:null},"0.05"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount to allocate to portfolio in long positions, by default 1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"1.0"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value_short"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Amount to allocate to portfolio in short positions, by default 0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"n_portfolios"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},'"Number of portfolios to simulate. The default value is 100.'),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"seed"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Seed used to generate random portfolios. The default value is 123."),(0,l.kt)("td",{parentName:"tr",align:null},"123"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tangency"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Adds the optimal line with the risk-free asset."),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"external_axes"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional[List","[plt.Axes]","]"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional axes to plot data on"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"plot_tickers"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to plot the tickers for the assets"),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"True")))),(0,l.kt)("h2",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,"This function does not return anything"))))}k.isMDXComponent=!0},85162:(t,e,a)=>{a.d(e,{Z:()=>u});var n=a(67294),l=a(86010);const r="tabItem_Ymn6";function u(t){let{children:e,hidden:a,className:u}=t;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,u),hidden:a},e)}},65488:(t,e,a)=>{a.d(e,{Z:()=>k});var n=a(87462),l=a(67294),r=a(86010),u=a(72389),i=a(67392),o=a(7094),p=a(12466);const d="tabList__CuJ",m="tabItem_LNqP";function s(t){var e;const{lazy:a,block:u,defaultValue:s,values:k,groupId:N,className:g}=t,f=l.Children.map(t.children,(t=>{if((0,l.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),c=k??f.map((t=>{let{props:{value:e,label:a,attributes:n}}=t;return{value:e,label:a,attributes:n}})),b=(0,i.l)(c,((t,e)=>t.value===e.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===s?s:s??(null==(e=f.find((t=>t.props.default)))?void 0:e.props.value)??f[0].props.value;if(null!==h&&!c.some((t=>t.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${c.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,o.U)(),[D,T]=(0,l.useState)(h),_=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=N){const t=y[N];null!=t&&t!==D&&c.some((e=>e.value===t))&&T(t)}const M=t=>{const e=t.currentTarget,a=_.indexOf(e),n=c[a].value;n!==D&&(w(e),T(n),null!=N&&v(N,String(n)))},O=t=>{var e;let a=null;switch(t.key){case"Enter":M(t);break;case"ArrowRight":{const e=_.indexOf(t.currentTarget)+1;a=_[e]??_[0];break}case"ArrowLeft":{const e=_.indexOf(t.currentTarget)-1;a=_[e]??_[_.length-1];break}}null==(e=a)||e.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":u},g)},c.map((t=>{let{value:e,label:a,attributes:u}=t;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:D===e?0:-1,"aria-selected":D===e,key:e,ref:t=>_.push(t),onKeyDown:O,onClick:M},u,{className:(0,r.Z)("tabs__item",m,null==u?void 0:u.className,{"tabs__item--active":D===e})}),a??e)}))),a?(0,l.cloneElement)(f.filter((t=>t.props.value===D))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map(((t,e)=>(0,l.cloneElement)(t,{key:e,hidden:t.props.value!==D})))))}function k(t){const e=(0,u.Z)();return l.createElement(s,(0,n.Z)({key:String(e)},t))}}}]);