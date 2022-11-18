"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[64963],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>h});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),m=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),k=m(a),h=n,s=k["".concat(p,".").concat(h)]||k[h]||g[h]||o;return a?r.createElement(s,i(i({ref:e},d),{},{components:a})):r.createElement(s,i({ref:e},d))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,i=new Array(o);i[0]=k;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var m=2;m<o;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},70869:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const o={title:"Portfolio",keywords:["portfolio","attribution","optimization","pnl","benchmark","return","volatility","metrics","broker","integration","report"],excerpt:"The Introduction to Portfolio explains how to use the menu and provides a brief description of its sub-menus"},i=void 0,l={unversionedId:"guides/guides/portfolio",id:"guides/guides/portfolio",title:"Portfolio",description:"The capabilities of the",source:"@site/content/sdk/guides/guides/portfolio.md",sourceDirName:"guides/guides",slug:"/guides/guides/portfolio",permalink:"/sdk/guides/guides/portfolio",draft:!1,tags:[],version:"current",frontMatter:{title:"Portfolio",keywords:["portfolio","attribution","optimization","pnl","benchmark","return","volatility","metrics","broker","integration","report"],excerpt:"The Introduction to Portfolio explains how to use the menu and provides a brief description of its sub-menus"},sidebar:"tutorialSidebar",previous:{title:"Keys",permalink:"/sdk/guides/guides/keys"},next:{title:"Sector Industry Analysis",permalink:"/sdk/guides/guides/sia"}},p={},m=[{value:"How to use",id:"how-to-use",level:2},{value:"Examples",id:"examples",level:2}],d={toc:m};function g(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The capabilities of the"),(0,n.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/portfolio/",target:"_blank"},"Portfolio menu")," from the OpenBB Terminal are wrapped into a powerful SDK, enabling users to work with the data in a flexible environment that can be fully customized to meet the needs of any user. This menu is dedicated to properly explaining and optimizing your own portfolio with features to load your own orderbook (transactions) it is possible to compare your results to that of a",(0,n.kt)("a",{href:"https://www.investopedia.com/terms/b/benchmark.asp",target:"_blank"},"benchmark"),'. For example, you are able to load both your portfolio and a benchmark, then have the option to look into the performance compared to the benchmark asking the question "_What if I invested all my money in the benchmark instead?_" as well as see a wide variety of statistics and metrics. Next to that, with these findings you can apply optimization techniques to your portfolio through functionalities regarding',(0,n.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/sdk/portfolio/po/",target:"_blank"},"Portfolio Optimization"),".",(0,n.kt)("h2",{id:"how-to-use"},"How to use"),(0,n.kt)("p",null,"Start a Python script or Notebook file by importing the module:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.sdk import openbb\n")),(0,n.kt)("p",null,"The contents of the menu is printed by running a cell with ",(0,n.kt)("inlineCode",{parentName:"p"},"openbb.portfolio"),"\nwhich returns the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"PORTFOLIO Menu\n\n\nA brief description below highlights the main Functions and Modules available in the ETF SDK\n\n| Path                       |    Type    |                                  Description |\n| :------------------------- | :--------: | -------------------------------------------: |\n| openbb.portfolio.summary          |  Function  |        Chart OHLC + Volume + Moving Averages |\n| openbb.portfolio.po            | Sub-Module |         Best/Worst/Highest Volume ETFs Today |\n| openbb.portfolio.dret |  Function  |                           Lookup by Category |\n| openbb.portfolio.holdp     |  Function  |                               Lookup by Name |\n| openbb.portfolio.yret        |  Function  |                         Holdings and Weights |\n| openbb.portfolio.rbeta              |  Function  |                        Lookup by Description |\n| openbb.portfolio.rsharpe            |  Function  |                    Get Historical Price Data |\n| openbb.portfolio.distr              |  Function  | Lookup by Name (More Details Than `by_name`) |\n| openbb.portfolio.om            |  Function  |                  News Headlines for a Ticker |\n| openbb.portfolio.es        |  Function  |                  Basic Statistics for an ETF |\n| openbb.portfolio.perf             | Function |                                 ETF Screener |\n| openbb.portfolio.rsort         |  Function  |       Text Description and Summary of an ETF |\n| openbb.portfolio.bench         | Function |                  Dictionary of {Ticker:Name} |\n| openbb.portfolio.metric         |  Sub-Module  |      Table or Pie Graph of Sector Weightings |\n| openbb.portfolio.alloc         |  Function  |      Table or Pie Graph of Sector Weightings |\n| openbb.portfolio.rvol         |  Function  |      Table or Pie Graph of Sector Weightings |\n| openbb.portfolio.var         |  Function  |      Table or Pie Graph of Sector Weightings |\n| openbb.portfolio.load         |  Function  |      Table or Pie Graph of Sector Weightings |\n| openbb.portfolio.show         |  Function  |      Table or Pie Graph of Sector Weightings |\n| openbb.portfolio.mret         |  Function  |      Table or Pie Graph of Sector Weightings |\n| openbb.portfolio.holdv         |  Function  |      Table or Pie Graph of Sector Weightings |\n\nAlteratively you can print the contents of the Porfolio SDK with:\n\u200b\n\n```python\nhelp(openbb.portfolio)\n")),(0,n.kt)("p",null,'The first step in using this menu is loading a portfolio. Here, we provide an\nexample titled "Public_Equity_Orderbook.xlsx" which can be loaded in. This file\nalso serves as a template when you wish to fill in your own orders. This results\nin the following:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from openbb_terminal.sdk import Portfolio\n\n# Define your own orderbook location here\norderbook_path = "Public_Equity_Orderbook.xlsx"\n\n# Load in the transactions\ntransactions = Portfolio.read_orderbook(orderbook_path)\nP = Portfolio(transactions)\nP.generate_portfolio_data()\n\n# Load in the benchmark, by default this is the SPY ETF\nP.load_benchmark()\n')),(0,n.kt)("p",null,"Note that the Excel sheet requires the following columns:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Date")," - The date the trade occurred"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Name")," - The name of the security"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Type")," - The type of the security. Use Cash/Stock/Crypto/ETF as appropriate"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Price")," - The price the security was added or removed at, on a per-unit\nbasis"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Quantity")," - How much of the security in question was added or removed"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Side")," - Whether you bought or sold. Use Buy/Deposit/1 to add to the\nportfolio or Sell/Withdrawal/0 to remove from the portfolio a search criteria,\ncountry, sector or industry.")),(0,n.kt)("p",null,"Furthermore, the chosen Excel sheet above also has additional columns but these\nare ",(0,n.kt)("em",{parentName:"p"},"optional"),'. The OpenBB Terminal can figure out by itself what industry,\nsector, country and region belongs to the loaded in equity. You can see this in\naction by loading in the "Public_Equity_Orderbook_No_Categorization.xlsx" Excel\nsheet.'),(0,n.kt)("p",null,"With the ",(0,n.kt)("inlineCode",{parentName:"p"},"get_orderbook")," on the ",(0,n.kt)("inlineCode",{parentName:"p"},"Portfolio")," class command we can show how the\ndata has been loaded in:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"P.get_orderbook()\n")),(0,n.kt)("p",null,"This returns the following (a portion of the data):"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Ticker"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Side"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Price"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Quantity"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Fees"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Investment"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Currency"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Sector"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Industry"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Country"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Region"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"38"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},"STOCK"),(0,n.kt)("td",{parentName:"tr",align:"left"},"YUM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Buy"),(0,n.kt)("td",{parentName:"tr",align:"right"},"115.76"),(0,n.kt)("td",{parentName:"tr",align:"right"},"11"),(0,n.kt)("td",{parentName:"tr",align:"right"},"40"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1313.36"),(0,n.kt)("td",{parentName:"tr",align:"left"},"USD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Consumer Cyclical"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Restaurants"),(0,n.kt)("td",{parentName:"tr",align:"left"},"United States"),(0,n.kt)("td",{parentName:"tr",align:"left"},"North America")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"37"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-12"),(0,n.kt)("td",{parentName:"tr",align:"left"},"STOCK"),(0,n.kt)("td",{parentName:"tr",align:"left"},"DGX"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Buy"),(0,n.kt)("td",{parentName:"tr",align:"right"},"137.27"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10"),(0,n.kt)("td",{parentName:"tr",align:"right"},"30"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1402.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"USD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Healthcare"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Diagnostics & Research"),(0,n.kt)("td",{parentName:"tr",align:"left"},"United States"),(0,n.kt)("td",{parentName:"tr",align:"left"},"North America")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"36"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-03-04"),(0,n.kt)("td",{parentName:"tr",align:"left"},"STOCK"),(0,n.kt)("td",{parentName:"tr",align:"left"},"TSM"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Buy"),(0,n.kt)("td",{parentName:"tr",align:"right"},"105.06"),(0,n.kt)("td",{parentName:"tr",align:"right"},"30"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3151.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"USD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Technology"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Semiconductors"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Taiwan"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Asia")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"35"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},"STOCK"),(0,n.kt)("td",{parentName:"tr",align:"left"},"BABA"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Buy"),(0,n.kt)("td",{parentName:"tr",align:"right"},"122.88"),(0,n.kt)("td",{parentName:"tr",align:"right"},"30"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3686.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"USD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Consumer Cyclical"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Internet Retail"),(0,n.kt)("td",{parentName:"tr",align:"left"},"China"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Asia")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"34"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},"STOCK"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NKE"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Buy"),(0,n.kt)("td",{parentName:"tr",align:"right"},"166.42"),(0,n.kt)("td",{parentName:"tr",align:"right"},"13"),(0,n.kt)("td",{parentName:"tr",align:"right"},"20"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2183.46"),(0,n.kt)("td",{parentName:"tr",align:"left"},"USD"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Consumer Cyclical"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Footwear & Accessories"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Germany"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Europe")))),(0,n.kt)("p",null,"With the portfolio and benchmark loaded in, we can see how the portfolio\nperformed compared to if you invested the same amount of money into the\nbenchmark instead. This reflects the capabilities of you, as an investor, to\noutperform a passive strategy."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"openbb.portfolio.perf(P)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"Portfolio"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Benchmark"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Difference"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Total Investment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"48693.95"),(0,n.kt)("td",{parentName:"tr",align:"left"},"48693.95"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Total Value"),(0,n.kt)("td",{parentName:"tr",align:"left"},"54591.70"),(0,n.kt)("td",{parentName:"tr",align:"left"},"60379.68"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-5787.97")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Total % Return"),(0,n.kt)("td",{parentName:"tr",align:"left"},"12.11%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"24.00%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-11.89%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Total Abs Return"),(0,n.kt)("td",{parentName:"tr",align:"left"},"5897.75"),(0,n.kt)("td",{parentName:"tr",align:"left"},"11685.73"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-5787.97")))),(0,n.kt)("p",null,"Compliment this by showing the volatility of the portfolio for different time\nperiods with the volatility measure."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"openbb.portfolio.volatility(P)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"right"},"Portfolio ","[%]"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Benchmark ","[%]"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mtd"),(0,n.kt)("td",{parentName:"tr",align:"right"},"7.024"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.589")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"qtd"),(0,n.kt)("td",{parentName:"tr",align:"right"},"13.515"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8.823")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ytd"),(0,n.kt)("td",{parentName:"tr",align:"right"},"34.853"),(0,n.kt)("td",{parentName:"tr",align:"right"},"22.489")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3m"),(0,n.kt)("td",{parentName:"tr",align:"right"},"18.119"),(0,n.kt)("td",{parentName:"tr",align:"right"},"12.562")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"6m"),(0,n.kt)("td",{parentName:"tr",align:"right"},"26.216"),(0,n.kt)("td",{parentName:"tr",align:"right"},"17.64")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1y"),(0,n.kt)("td",{parentName:"tr",align:"right"},"36.341"),(0,n.kt)("td",{parentName:"tr",align:"right"},"23.303")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3y"),(0,n.kt)("td",{parentName:"tr",align:"right"},"54.114"),(0,n.kt)("td",{parentName:"tr",align:"right"},"42.435")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5y"),(0,n.kt)("td",{parentName:"tr",align:"right"},"62.103"),(0,n.kt)("td",{parentName:"tr",align:"right"},"47.383")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"10y"),(0,n.kt)("td",{parentName:"tr",align:"right"},"72.617"),(0,n.kt)("td",{parentName:"tr",align:"right"},"54.408")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"all"),(0,n.kt)("td",{parentName:"tr",align:"right"},"91.162"),(0,n.kt)("td",{parentName:"tr",align:"right"},"62.297")))),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,'Instead of loading the "Public_Equity_Orderbook.xlsx" file, we now load in\n"Public_Equity_Orderbook_No_Categorization.xlsx" which does not include\ncategorization of the stocks by industry, sector, country and region. Therefore,\nwe let the OpenBB Terminal figure this out. This takes a bit longer to load.'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from openbb_terminal.sdk import Portfolio\n\n# Define your own orderbook location here\norderbook_path = "Public_Equity_Orderbook_No_Categorization.xlsx"\n\n# Load in the transactions\ntransactions = Portfolio.read_orderbook(orderbook_path)\nP = Portfolio(transactions)\nP.generate_portfolio_data()\n\n# Load in the benchmark, by default this is the SPY ETF\nP.load_benchmark()\n')),(0,n.kt)("p",null,"Then, we can show our performance compared to that of the benchmark."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"openbb.portfolio.perf(P)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"Portfolio"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Benchmark"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Difference"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Total Investment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"48693.95"),(0,n.kt)("td",{parentName:"tr",align:"left"},"48693.95"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Total Value"),(0,n.kt)("td",{parentName:"tr",align:"left"},"54795.03"),(0,n.kt)("td",{parentName:"tr",align:"left"},"60472.14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-5677.11")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Total % Return"),(0,n.kt)("td",{parentName:"tr",align:"left"},"12.53%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"24.19%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-11.66%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Total Abs Return"),(0,n.kt)("td",{parentName:"tr",align:"left"},"6101.08"),(0,n.kt)("td",{parentName:"tr",align:"left"},"11778.19"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-5677.11")))),(0,n.kt)("p",null,"Furthermore, we can also show the rolling beta."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"openbb.portfolio.rbeta(P, chart=True)\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/180178392-96efb6e1-60a1-4f76-92d8-434fb3637c21.png",alt:"Rolling Beta of the Portfolio"})),(0,n.kt)("p",null,"This helps in understanding that, even though you achieved a superior return,\nthis also came at a greater risk compared to that of the benchmark. With the\navailable functionalities you can further look into these results, e.g. by\nlooking at the sharpe ratio:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"openbb.portfolio.sharpe(P)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"right"},"Portfolio"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Benchmark"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"mtd"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.193"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.207")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"qtd"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.144"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.132")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"ytd"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.077"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.058")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3m"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.069"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.071")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"6m"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.013"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.013")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1y"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.073"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.046")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"3y"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.021"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.029")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"5y"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.026"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.035")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"10y"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.044"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.049")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"all"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.03"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.045")))))}g.isMDXComponent=!0}}]);