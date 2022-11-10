"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67763],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),f=o,h=d["".concat(l,".").concat(f)]||d[f]||m[f]||r;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},99385:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={},i=void 0,s={unversionedId:"features/portfolio/po/meanrisk",id:"features/portfolio/po/meanrisk",title:"meanrisk",description:".. role:: python(code)",source:"@site/terminal/features/portfolio/po/meanrisk.md",sourceDirName:"features/portfolio/po",slug:"/features/portfolio/po/meanrisk",permalink:"/terminal/features/portfolio/po/meanrisk",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/portfolio/po/meanrisk.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"maxutil",permalink:"/terminal/features/portfolio/po/maxutil"},next:{title:"minrisk",permalink:"/terminal/features/portfolio/po/minrisk"}},l={},p=[],u={toc:p};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,o.kt)("p",null,"|"),(0,o.kt)("p",null,"To obtain charts, make sure to add :python:",(0,o.kt)("inlineCode",{parentName:"p"},"chart = True")," as the last parameter."),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,o.kt)("p",null,"{{< highlight python >}}\nportfolio.po.meanrisk(\nsymbols: List","[str]",",\ninterval: str = '3y',\nstart_date: str = '',\nend_date: str = '',\nlog_returns: bool = False,\nfreq: str = 'D',\nmaxnan: float = 0.05,\nthreshold: float = 0,\nmethod: str = 'time',\nrisk_measure: str = 'MV',\nobjective: str = 'Sharpe',\nrisk_free_rate: float = 0,\nrisk_aversion: float = 1,\nalpha: float = 0.05,\ntarget_return: float = -1,\ntarget_risk: float = -1,\nmean: str = 'hist',\ncovariance: str = 'hist',\nd_ewma: float = 0.94,\nvalue: float = 1.0,\nvalue_short: float = 0.0,\nchart: bool = False,\n) -> Tuple\n{{< /highlight >}}"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<p>\nBuilds a mean risk optimal portfolio\n</p>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",{parentName:"li"},"  symbols : List","[str]","\nList of portfolio stocks\ninterval : str, optional\ninterval to get stock data, by default \"3mo\"\nstart_date: str, optional\nIf not using interval, start date string (YYYY-MM-DD)\nend_date: str, optional\nIf not using interval, end date string (YYYY-MM-DD). If empty use last\nweekday.\nlog_returns: bool, optional\nIf True calculate log returns, else arithmetic returns. Default value\nis False\nfreq: str, optional\nThe frequency used to calculate returns. Default value is 'D'. Possible\nvalues are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'D' for daily returns.\n  - 'W' for weekly returns.\n  - 'M' for monthly returns.\n")),(0,o.kt)("p",{parentName:"li"},"  maxnan: float\nMax percentage of nan values accepted per asset to be included in\nreturns.\nthreshold: float\nValue used to replace outliers that are higher to threshold.\nmethod: str\nMethod used to fill nan values. Default value is 'time'. For more information see ",(0,o.kt)("inlineCode",{parentName:"p"},"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"),"__.\nobjective: str\nObjective function of the optimization model.\nThe default is 'Sharpe'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'MinRisk': Minimize the selected risk measure.\n  - 'Utility': Maximize the risk averse utility function.\n  - 'Sharpe': Maximize the risk adjusted return ratio based on the selected risk measure.\n  - 'MaxRet': Maximize the expected return of the portfolio.\n")),(0,o.kt)("p",{parentName:"li"},"  risk_measure: str, optional\nThe risk measure used to optimize the portfolio.\nThe default is 'MV'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'MV': Standard Deviation.\n  - 'MAD': Mean Absolute Deviation.\n  - 'MSV': Semi Standard Deviation.\n  - 'FLPM': First Lower Partial Moment (Omega Ratio).\n  - 'SLPM': Second Lower Partial Moment (Sortino Ratio).\n  - 'CVaR': Conditional Value at Risk.\n  - 'EVaR': Entropic Value at Risk.\n  - 'WR': Worst Realization.\n  - 'ADD': Average Drawdown of uncompounded cumulative returns.\n  - 'UCI': Ulcer Index of uncompounded cumulative returns.\n  - 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.\n  - 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.\n  - 'MDD': Maximum Drawdown of uncompounded cumulative returns.\n")),(0,o.kt)("p",{parentName:"li"},"  risk_free_rate: float, optional\nRisk free rate, must be in annual frequency. Used for\n'FLPM' and 'SLPM' and Sharpe objective function. The default is 0.\nrisk_aversion: float, optional\nRisk aversion factor of the 'Utility' objective function.\nThe default is 1.\nalpha: float, optional\nSignificance level of CVaR, EVaR, CDaR and EDaR\ntarget_return: float, optional\nConstraint on minimum level of portfolio's return.\ntarget_risk: float, optional\nConstraint on maximum level of portfolio's risk.\nmean: str, optional\nThe method used to estimate the expected returns.\nThe default value is 'hist'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'hist': use historical estimates.\n  - 'ewma1': use ewma with adjust=True. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.\n  - 'ewma2': use ewma with adjust=False. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.\n")),(0,o.kt)("p",{parentName:"li"},"  covariance: str, optional\nThe method used to estimate the covariance matrix:\nThe default is 'hist'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'hist': use historical estimates.\n  - 'ewma1': use ewma with adjust=True. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.\n  - 'ewma2': use ewma with adjust=False. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.\n  - 'ledoit': use the Ledoit and Wolf Shrinkage method.\n  - 'oas': use the Oracle Approximation Shrinkage method.\n  - 'shrunk': use the basic Shrunk Covariance method.\n  - 'gl': use the basic Graphical Lasso Covariance method.\n  - 'jlogo': use the j-LoGo Covariance method. For more information see: `a-jLogo`.\n  - 'fixed': denoise using fixed method. For more information see chapter 2 of `a-MLforAM`.\n  - 'spectral': denoise using spectral method. For more information see chapter 2 of `a-MLforAM`.\n  - 'shrink': denoise using shrink method. For more information see chapter 2 of `a-MLforAM`.\n")),(0,o.kt)("p",{parentName:"li"},"  d_ewma: float, optional\nThe smoothing factor of ewma methods.\nThe default is 0.94.\nvalue : float, optional\nAmount of money to allocate. The default is 1.\nvalue_short : float, optional\nAmount to allocate to portfolio in short positions. The default is 0.\nchart: bool\nFlag to display chart"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Returns")),(0,o.kt)("p",{parentName:"li"},"  Tuple\nDictionary of portfolio weights and DataFrame of stock returns"))),(0,o.kt)("p",null,"|"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<h3>\n> Getting charts\n</h3>\n")),(0,o.kt)("p",null,"{{< highlight python >}}\nportfolio.po.meanrisk(\nsymbols: List","[str]",",\ninterval: str = '3y',\nstart_date: str = '',\nend_date: str = '',\nlog_returns: bool = False,\nfreq: str = 'D',\nmaxnan: float = 0.05,\nthreshold: float = 0,\nmethod: str = 'time',\nrisk_measure: str = 'mv',\nobjective: str = 'sharpe',\nrisk_free_rate: float = 0,\nrisk_aversion: float = 1,\nalpha: float = 0.05,\ntarget_return: float = -1,\ntarget_risk: float = -1,\nmean: str = 'hist',\ncovariance: str = 'hist',\nd_ewma: float = 0.94,\nvalue: float = 1.0,\nvalue_short: float = 0.0,\ntable: bool = False,\nchart: bool = False,\n) -> Dict\n{{< /highlight >}}"),(0,o.kt)("p",null,".. raw:: html"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<p>\nBuilds a mean risk optimal portfolio\n</p>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("p",{parentName:"li"},"  symbols : List","[str]","\nList of portfolio tickers\ninterval : str, optional\ninterval to look at returns from\nstart_date: str, optional\nIf not using interval, start date string (YYYY-MM-DD)\nend_date: str, optional\nIf not using interval, end date string (YYYY-MM-DD). If empty use last\nweekday.\nlog_returns: bool, optional\nIf True calculate log returns, else arithmetic returns. Default value\nis False\nfreq: str, optional\nThe frequency used to calculate returns. Default value is 'D'. Possible\nvalues are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'D' for daily returns.\n  - 'W' for weekly returns.\n  - 'M' for monthly returns.\n")),(0,o.kt)("p",{parentName:"li"},"  maxnan: float, optional\nMax percentage of nan values accepted per asset to be included in\nreturns.\nthreshold: float, optional\nValue used to replace outliers that are higher to threshold.\nmethod: str\nMethod used to fill nan values. Default value is 'time'. For more information see ",(0,o.kt)("inlineCode",{parentName:"p"},"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"),"__.\nrisk_measure: str, optional\nThe risk measure used to optimize the portfolio.\nThe default is 'MV'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'MV': Standard Deviation.\n  - 'MAD': Mean Absolute Deviation.\n  - 'MSV': Semi Standard Deviation.\n  - 'FLPM': First Lower Partial Moment (Omega Ratio).\n  - 'SLPM': Second Lower Partial Moment (Sortino Ratio).\n  - 'CVaR': Conditional Value at Risk.\n  - 'EVaR': Entropic Value at Risk.\n  - 'WR': Worst Realization.\n  - 'ADD': Average Drawdown of uncompounded cumulative returns.\n  - 'UCI': Ulcer Index of uncompounded cumulative returns.\n  - 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.\n  - 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.\n  - 'MDD': Maximum Drawdown of uncompounded cumulative returns.\n")),(0,o.kt)("p",{parentName:"li"},"  objective: str\nObjective function of the optimization model.\nThe default is 'Sharpe'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'MinRisk': Minimize the selected risk measure.\n  - 'Utility': Maximize the risk averse utility function.\n  - 'Sharpe': Maximize the risk adjusted return ratio based on the selected risk measure.\n  - 'MaxRet': Maximize the expected return of the portfolio.\n")),(0,o.kt)("p",{parentName:"li"},"  risk_free_rate: float, optional\nRisk free rate, must be in the same interval of assets returns. Used for\n'FLPM' and 'SLPM' and Sharpe objective function. The default is 0.\nrisk_aversion: float, optional\nRisk aversion factor of the 'Utility' objective function.\nThe default is 1.\nalpha: float, optional\nSignificance level of CVaR, EVaR, CDaR and EDaR\ntarget_return: float, optional\nConstraint on minimum level of portfolio's return.\ntarget_risk: float, optional\nConstraint on maximum level of portfolio's risk.\nmean: str, optional\nThe method used to estimate the expected returns.\nThe default value is 'hist'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'hist': use historical estimates.\n  - 'ewma1': use ewma with adjust=True. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.\n  - 'ewma2': use ewma with adjust=False. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.\n")),(0,o.kt)("p",{parentName:"li"},"  covariance: str, optional\nThe method used to estimate the covariance matrix:\nThe default is 'hist'. Possible values are:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"  - 'hist': use historical estimates.\n  - 'ewma1': use ewma with adjust=True. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.\n  - 'ewma2': use ewma with adjust=False. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.\n  - 'ledoit': use the Ledoit and Wolf Shrinkage method.\n  - 'oas': use the Oracle Approximation Shrinkage method.\n  - 'shrunk': use the basic Shrunk Covariance method.\n  - 'gl': use the basic Graphical Lasso Covariance method.\n  - 'jlogo': use the j-LoGo Covariance method. For more information see: `a-jLogo`.\n  - 'fixed': denoise using fixed method. For more information see chapter 2 of `a-MLforAM`.\n  - 'spectral': denoise using spectral method. For more information see chapter 2 of `a-MLforAM`.\n  - 'shrink': denoise using shrink method. For more information see chapter 2 of `a-MLforAM`.\n")),(0,o.kt)("p",{parentName:"li"},"  d_ewma: float, optional\nThe smoothing factor of ewma methods.\nThe default is 0.94.\nvalue : float, optional\nAmount to allocate to portfolio in long positions, by default 1.0\nvalue_short : float, optional\nAmount to allocate to portfolio in short positions, by default 0.0\ntable: bool, optional\nTrue if plot table weights, by default False\nchart: bool\nFlag to display chart"))))}m.isMDXComponent=!0}}]);