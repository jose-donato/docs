"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80707],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),d=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),p=d(a),k=r,g=p["".concat(u,".").concat(k)]||p[k]||m[k]||l;return a?n.createElement(g,o(o({ref:e},s),{},{components:a})):n.createElement(g,o({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},90483:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>u,default:()=>k,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var n=a(87462),r=(a(67294),a(3905)),l=a(65099),o=a(85162);const i={title:"maxret",description:"OpenBB SDK Function"},u="maxret",d={unversionedId:"functions/portfolio/po/maxret",id:"functions/portfolio/po/maxret",title:"maxret",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/portfolio/po/maxret.md",sourceDirName:"functions/portfolio/po",slug:"/functions/portfolio/po/maxret",permalink:"/sdk/functions/portfolio/po/maxret",draft:!1,tags:[],version:"current",frontMatter:{title:"maxret",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"maxdiv",permalink:"/sdk/functions/portfolio/po/maxdiv"},next:{title:"maxsharpe",permalink:"/sdk/functions/portfolio/po/maxsharpe"}},s={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}],p={toc:m};function k(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"maxret"},"maxret"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Builds a maximal return/risk ratio portfolio"),(0,r.kt)("p",null,"Source Code: [",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/optimizer_model.py#L961"},"link"),"]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def get_max_ret(symbols: List[str], interval: str = "3y", start_date: str = "", end_date: str = "", log_returns: bool = False, freq: str = "D", maxnan: float = 0.05, threshold: float = 0, method: str = "time", risk_measure: str = "MV", risk_free_rate: float = 0, risk_aversion: float = 1, alpha: float = 0.05, target_return: float = -1, target_risk: float = -1, mean: str = "hist", covariance: str = "hist", d_ewma: float = 0.94, value: float = 1.0, value_short: float = 0.0) -> Tuple[Optional[dict], pd.DataFrame]\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbols"),(0,r.kt)("td",{parentName:"tr",align:null},"List","[str]"),(0,r.kt)("td",{parentName:"tr",align:null},"List of portfolio tickers"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"interval"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"interval to look at returns from"),(0,r.kt)("td",{parentName:"tr",align:null},"3y"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start_date"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"If not using interval, start date string (YYYY-MM-DD)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end_date"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"If not using interval, end date string (YYYY-MM-DD). If empty use last",(0,r.kt)("br",null),"weekday."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_returns"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"If True calculate log returns, else arithmetic returns. Default value",(0,r.kt)("br",null),"is False"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"freq"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The frequency used to calculate returns. Default value is 'D'. Possible",(0,r.kt)("br",null),"values are:",(0,r.kt)("br",null),(0,r.kt)("br",null),"- 'D' for daily returns.",(0,r.kt)("br",null),"- 'W' for weekly returns.",(0,r.kt)("br",null),"- 'M' for monthly returns."),(0,r.kt)("td",{parentName:"tr",align:null},"D"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxnan"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Max percentage of nan values accepted per asset to be included in",(0,r.kt)("br",null),"returns."),(0,r.kt)("td",{parentName:"tr",align:null},"0.05"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"threshold"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Value used to replace outliers that are higher to threshold."),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Method used to fill nan values. Default value is 'time'. For more information see ",(0,r.kt)("inlineCode",{parentName:"td"},"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"),"__."),(0,r.kt)("td",{parentName:"tr",align:null},"time"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"risk_measure"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The risk measure used to optimize the portfolio.",(0,r.kt)("br",null),"The default is 'MV'. Possible values are:",(0,r.kt)("br",null),(0,r.kt)("br",null),"- 'MV': Standard Deviation.",(0,r.kt)("br",null),"- 'MAD': Mean Absolute Deviation.",(0,r.kt)("br",null),"- 'MSV': Semi Standard Deviation.",(0,r.kt)("br",null),"- 'FLPM': First Lower Partial Moment (Omega Ratio).",(0,r.kt)("br",null),"- 'SLPM': Second Lower Partial Moment (Sortino Ratio).",(0,r.kt)("br",null),"- 'CVaR': Conditional Value at Risk.",(0,r.kt)("br",null),"- 'EVaR': Entropic Value at Risk.",(0,r.kt)("br",null),"- 'WR': Worst Realization.",(0,r.kt)("br",null),"- 'ADD': Average Drawdown of uncompounded cumulative returns.",(0,r.kt)("br",null),"- 'UCI': Ulcer Index of uncompounded cumulative returns.",(0,r.kt)("br",null),"- 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.",(0,r.kt)("br",null),"- 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.",(0,r.kt)("br",null),"- 'MDD': Maximum Drawdown of uncompounded cumulative returns."),(0,r.kt)("td",{parentName:"tr",align:null},"MV"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"risk_free_rate"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Risk free rate, must be in the same interval of assets returns. Used for",(0,r.kt)("br",null),"'FLPM' and 'SLPM' and Sharpe objective function. The default is 0."),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alpha"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Significance level of CVaR, EVaR, CDaR and EDaR"),(0,r.kt)("td",{parentName:"tr",align:null},"0.05"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target_return"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Constraint on minimum level of portfolio's return."),(0,r.kt)("td",{parentName:"tr",align:null},"-1"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target_risk"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Constraint on maximum level of portfolio's risk."),(0,r.kt)("td",{parentName:"tr",align:null},"-1"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mean"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The method used to estimate the expected returns.",(0,r.kt)("br",null),"The default value is 'hist'. Possible values are:",(0,r.kt)("br",null),(0,r.kt)("br",null),"- 'hist': use historical estimates.",(0,r.kt)("br",null),"- 'ewma1': use ewma with adjust=True. For more information see ",(0,r.kt)("inlineCode",{parentName:"td"},"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"),(0,r.kt)("strong",{parentName:"td"},".",(0,r.kt)("br",null),"- 'ewma2': use ewma with adjust=False. For more information see ",(0,r.kt)("inlineCode",{parentName:"strong"},"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>")),"."),(0,r.kt)("td",{parentName:"tr",align:null},"hist"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"covariance"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The method used to estimate the covariance matrix:",(0,r.kt)("br",null),"The default is 'hist'. Possible values are:",(0,r.kt)("br",null),(0,r.kt)("br",null),"- 'hist': use historical estimates.",(0,r.kt)("br",null),"- 'ewma1': use ewma with adjust=True. For more information see ",(0,r.kt)("inlineCode",{parentName:"td"},"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"),(0,r.kt)("strong",{parentName:"td"},".",(0,r.kt)("br",null),"- 'ewma2': use ewma with adjust=False. For more information see ",(0,r.kt)("inlineCode",{parentName:"strong"},"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>")),".",(0,r.kt)("br",null),"- 'ledoit': use the Ledoit and Wolf Shrinkage method.",(0,r.kt)("br",null),"- 'oas': use the Oracle Approximation Shrinkage method.",(0,r.kt)("br",null),"- 'shrunk': use the basic Shrunk Covariance method.",(0,r.kt)("br",null),"- 'gl': use the basic Graphical Lasso Covariance method.",(0,r.kt)("br",null),"- 'jlogo': use the j-LoGo Covariance method. For more information see: ",(0,r.kt)("inlineCode",{parentName:"td"},"a-jLogo"),".",(0,r.kt)("br",null),"- 'fixed': denoise using fixed method. For more information see chapter 2 of ",(0,r.kt)("inlineCode",{parentName:"td"},"a-MLforAM"),".",(0,r.kt)("br",null),"- 'spectral': denoise using spectral method. For more information see chapter 2 of ",(0,r.kt)("inlineCode",{parentName:"td"},"a-MLforAM"),".",(0,r.kt)("br",null),"- 'shrink': denoise using shrink method. For more information see chapter 2 of ",(0,r.kt)("inlineCode",{parentName:"td"},"a-MLforAM"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"hist"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"d_ewma"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"The smoothing factor of ewma methods.",(0,r.kt)("br",null),"The default is 0.94."),(0,r.kt)("td",{parentName:"tr",align:null},"0.94"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount to allocate to portfolio in long positions, by default 1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value_short"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount to allocate to portfolio in short positions, by default 0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tuple[Optional","[dict]",", pd.DataFrame]"),(0,r.kt)("td",{parentName:"tr",align:null},"Dictionary of portfolio weights,",(0,r.kt)("br",null),"DataFrame of stock returns.")))),(0,r.kt)("hr",null)),(0,r.kt)(o.Z,{value:"view",label:"View",mdxType:"TabItem"},(0,r.kt)("p",null,"Builds a maximal return portfolio"),(0,r.kt)("p",null,"Source Code: [",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/optimizer_view.py#L1537"},"link"),"]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def display_max_ret(symbols: List[str], interval: str = "3y", start_date: str = "", end_date: str = "", log_returns: bool = False, freq: str = "D", maxnan: float = 0.05, threshold: float = 0, method: str = "time", risk_measure: str = "MV", risk_free_rate: float = 0, risk_aversion: float = 1, alpha: float = 0.05, target_return: float = -1, target_risk: float = -1, mean: str = "hist", covariance: str = "hist", d_ewma: float = 0.94, value: float = 1.0, value_short: float = 0.0, table: bool = False) -> Dict\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbols"),(0,r.kt)("td",{parentName:"tr",align:null},"List","[str]"),(0,r.kt)("td",{parentName:"tr",align:null},"List of portfolio tickers"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"interval"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"interval to look at returns from"),(0,r.kt)("td",{parentName:"tr",align:null},"3y"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start_date"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"If not using interval, start date string (YYYY-MM-DD)"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end_date"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"If not using interval, end date string (YYYY-MM-DD). If empty use last",(0,r.kt)("br",null),"weekday."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_returns"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"If True calculate log returns, else arithmetic returns. Default value",(0,r.kt)("br",null),"is False"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"freq"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The frequency used to calculate returns. Default value is 'D'. Possible",(0,r.kt)("br",null),"values are:",(0,r.kt)("br",null),"- 'D' for daily returns.",(0,r.kt)("br",null),"- 'W' for weekly returns.",(0,r.kt)("br",null),"- 'M' for monthly returns."),(0,r.kt)("td",{parentName:"tr",align:null},"D"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxnan"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Max percentage of nan values accepted per asset to be included in",(0,r.kt)("br",null),"returns."),(0,r.kt)("td",{parentName:"tr",align:null},"0.05"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"threshold"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Value used to replace outliers that are higher to threshold."),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"Method used to fill nan values. Default value is 'time'. For more information see ",(0,r.kt)("inlineCode",{parentName:"td"},"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"),"__."),(0,r.kt)("td",{parentName:"tr",align:null},"time"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"risk_measure"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The risk measure used to optimize the portfolio.",(0,r.kt)("br",null),"The default is 'MV'. Possible values are:",(0,r.kt)("br",null),(0,r.kt)("br",null),"- 'MV': Standard Deviation.",(0,r.kt)("br",null),"- 'MAD': Mean Absolute Deviation.",(0,r.kt)("br",null),"- 'MSV': Semi Standard Deviation.",(0,r.kt)("br",null),"- 'FLPM': First Lower Partial Moment (Omega Ratio).",(0,r.kt)("br",null),"- 'SLPM': Second Lower Partial Moment (Sortino Ratio).",(0,r.kt)("br",null),"- 'CVaR': Conditional Value at Risk.",(0,r.kt)("br",null),"- 'EVaR': Entropic Value at Risk.",(0,r.kt)("br",null),"- 'WR': Worst Realization.",(0,r.kt)("br",null),"- 'ADD': Average Drawdown of uncompounded cumulative returns.",(0,r.kt)("br",null),"- 'UCI': Ulcer Index of uncompounded cumulative returns.",(0,r.kt)("br",null),"- 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.",(0,r.kt)("br",null),"- 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.",(0,r.kt)("br",null),"- 'MDD': Maximum Drawdown of uncompounded cumulative returns."),(0,r.kt)("td",{parentName:"tr",align:null},"MV"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"risk_free_rate"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Risk free rate, must be in the same interval of assets returns. Used for",(0,r.kt)("br",null),"'FLPM' and 'SLPM' and Sharpe objective function. The default is 0."),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"risk_aversion"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Risk aversion factor of the 'Utility' objective function.",(0,r.kt)("br",null),"The default is 1."),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alpha"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Significance level of CVaR, EVaR, CDaR and EDaR"),(0,r.kt)("td",{parentName:"tr",align:null},"0.05"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target_return"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Constraint on minimum level of portfolio's return."),(0,r.kt)("td",{parentName:"tr",align:null},"-1"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"target_risk"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Constraint on maximum level of portfolio's risk."),(0,r.kt)("td",{parentName:"tr",align:null},"-1"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mean"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The method used to estimate the expected returns.",(0,r.kt)("br",null),"The default value is 'hist'. Possible values are:",(0,r.kt)("br",null),(0,r.kt)("br",null),"- 'hist': use historical estimates.",(0,r.kt)("br",null),"- 'ewma1': use ewma with adjust=True. For more information see ",(0,r.kt)("inlineCode",{parentName:"td"},"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"),(0,r.kt)("strong",{parentName:"td"},".",(0,r.kt)("br",null),"- 'ewma2': use ewma with adjust=False. For more information see ",(0,r.kt)("inlineCode",{parentName:"strong"},"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>")),"."),(0,r.kt)("td",{parentName:"tr",align:null},"hist"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"covariance"),(0,r.kt)("td",{parentName:"tr",align:null},"str"),(0,r.kt)("td",{parentName:"tr",align:null},"The method used to estimate the covariance matrix:",(0,r.kt)("br",null),"The default is 'hist'. Possible values are:",(0,r.kt)("br",null),(0,r.kt)("br",null),"- 'hist': use historical estimates.",(0,r.kt)("br",null),"- 'ewma1': use ewma with adjust=True. For more information see ",(0,r.kt)("inlineCode",{parentName:"td"},"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"),(0,r.kt)("strong",{parentName:"td"},".",(0,r.kt)("br",null),"- 'ewma2': use ewma with adjust=False. For more information see ",(0,r.kt)("inlineCode",{parentName:"strong"},"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>")),".",(0,r.kt)("br",null),"- 'ledoit': use the Ledoit and Wolf Shrinkage method.",(0,r.kt)("br",null),"- 'oas': use the Oracle Approximation Shrinkage method.",(0,r.kt)("br",null),"- 'shrunk': use the basic Shrunk Covariance method.",(0,r.kt)("br",null),"- 'gl': use the basic Graphical Lasso Covariance method.",(0,r.kt)("br",null),"- 'jlogo': use the j-LoGo Covariance method. For more information see: ",(0,r.kt)("inlineCode",{parentName:"td"},"a-jLogo"),".",(0,r.kt)("br",null),"- 'fixed': denoise using fixed method. For more information see chapter 2 of ",(0,r.kt)("inlineCode",{parentName:"td"},"a-MLforAM"),".",(0,r.kt)("br",null),"- 'spectral': denoise using spectral method. For more information see chapter 2 of ",(0,r.kt)("inlineCode",{parentName:"td"},"a-MLforAM"),".",(0,r.kt)("br",null),"- 'shrink': denoise using shrink method. For more information see chapter 2 of ",(0,r.kt)("inlineCode",{parentName:"td"},"a-MLforAM"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"hist"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"d_ewma"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"The smoothing factor of ewma methods.",(0,r.kt)("br",null),"The default is 0.94."),(0,r.kt)("td",{parentName:"tr",align:null},"0.94"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount to allocate to portfolio in long positions, by default 1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value_short"),(0,r.kt)("td",{parentName:"tr",align:null},"float"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount to allocate to portfolio in short positions, by default 0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"table"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"True if plot table weights, by default False"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,"This function does not return anything"),(0,r.kt)("hr",null))))}k.isMDXComponent=!0},85162:(t,e,a)=>{a.d(e,{Z:()=>o});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function o(t){let{children:e,hidden:a,className:o}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},e)}},65099:(t,e,a)=>{a.d(e,{Z:()=>k});var n=a(87462),r=a(67294),l=a(86010),o=a(72389),i=a(67392),u=a(7094),d=a(12466);const s="tabItem_hGfb";var m=a(16550);function p(t){var e;const{lazy:a,block:o,defaultValue:p,values:k,groupId:g,className:N}=t,f=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),c=k??f.map((t=>{let{props:{value:e,label:a,attributes:n}}=t;return{value:e,label:a,attributes:n}})),b=(0,i.l)(c,((t,e)=>t.value===e.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===p?p:p??(null==(e=f.find((t=>t.props.default)))?void 0:e.props.value)??f[0].props.value;if(null!==h&&!c.some((t=>t.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${c.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,u.U)(),[w,T]=(0,r.useState)(h),D=[],{blockElementScrollPositionUntilNextRender:x}=(0,d.o5)();if(null!=g){const t=v[g];null!=t&&t!==w&&c.some((e=>e.value===t))&&T(t)}const M=t=>{const e=t.currentTarget,a=D.indexOf(e),n=c[a].value;n!==w&&(x(e),T(n),null!=g&&y(g,String(n)))},_=t=>{var e;let a=null;switch(t.key){case"Enter":M(t);break;case"ArrowRight":{const e=D.indexOf(t.currentTarget)+1;a=D[e]??D[0];break}case"ArrowLeft":{const e=D.indexOf(t.currentTarget)-1;a=D[e]??D[D.length-1];break}}null==(e=a)||e.focus()},{pathname:C}=(0,m.TH)();return r.createElement("div",null,r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none lg:-ml-7 my-6")},c.map((t=>{let{value:e,label:a,attributes:o}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:t=>D.push(t),onKeyDown:_,onClick:M},o,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase text-sm border-b",s,null==o?void 0:o.className,{"border-b-2 pointer-events-none":w===e,"cursor-pointer":w!==e,"border-b-2 text-[#669dcb] border-[#669dcb]":w===e&&C.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":w===e&&C.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":w!==e&&C.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#abd2f1] hover:border-[#abd2f1]":w!==e&&C.startsWith("/terminal")})}),a??e)})),r.createElement("li",{className:"w-full border-b border-grey-600 pointer-events-none py-1 mb-[9.5px]"})),a?(0,r.cloneElement)(f.filter((t=>t.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==w})))))}function k(t){const e=(0,o.Z)();return r.createElement(p,(0,n.Z)({key:String(e)},t))}}}]);