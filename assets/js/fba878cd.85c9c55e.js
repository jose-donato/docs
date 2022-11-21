"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37518],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var g=r.createContext({}),d=function(t){var e=r.useContext(g),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(g.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,g=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=d(a),k=n,h=s["".concat(g,".").concat(k)]||s[k]||o[k]||i;return a?r.createElement(h,l(l({ref:e},m),{},{components:a})):r.createElement(h,l({ref:e},m))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=s;var p={};for(var g in e)hasOwnProperty.call(e,g)&&(p[g]=e[g]);p.originalType=t,p.mdxType="string"==typeof t?t:n,l[1]=p;for(var d=2;d<i;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},70876:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>g,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const i={title:"Basics",sidebar_position:2},l=void 0,p={unversionedId:"guides/basics/index",id:"guides/basics/index",title:"Basics",description:"Importing the SDK",source:"@site/content/sdk/guides/basics/index.md",sourceDirName:"guides/basics",slug:"/guides/basics/",permalink:"/sdk/guides/basics/",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Basics",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/sdk/getstarted/faq"},next:{title:"View vs Models",permalink:"/sdk/guides/basics/view-vs-models"}},g={},d=[{value:"Importing the SDK",id:"importing-the-sdk",level:3},{value:"<strong>Navigation</strong>",id:"navigation",level:3},{value:"<strong>Docstrings</strong>",id:"docstrings",level:3},{value:"<strong>OpenBBUserData Folder</strong>",id:"openbbuserdata-folder",level:3},{value:"Requesting and Handling Data",id:"requesting-and-handling-data",level:2},{value:"Dataframes",id:"dataframes",level:3},{value:"Displaying Charts",id:"displaying-charts",level:3}],m={toc:d};function o(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"importing-the-sdk"},"Importing the SDK"),(0,n.kt)("p",null,"Now that you have the SDK installed, the first step is to import the OpenBB SDK in your preferred code editor. Nearly everything required to interact with any function from the OpenBB Terminal gets imported in one line. Begin a Python script or Notebook file with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from openbb_terminal.sdk import openbb\n")),(0,n.kt)("p",null,"Example snippets used in the remainder of this guide will assume the code block above is used, and that the ",(0,n.kt)("inlineCode",{parentName:"p"},"Python kernel")," selected is the environment created during the installation process."),(0,n.kt)("h3",{id:"navigation"},(0,n.kt)("strong",{parentName:"h3"},"Navigation")),(0,n.kt)("p",null,"In the same way as operating the OpenBB Terminal, functions are divided into menus which are scrollable after code completion is activated. Entering a period, ",(0,n.kt)("inlineCode",{parentName:"p"},"."),", after ",(0,n.kt)("inlineCode",{parentName:"p"},"openbb"),", will display the Sub-menus available."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/202795900-5f1cb00a-a0ff-4899-b6e2-c5af54b653d1.png",alt:"Navigation",title:"Navigation"})),(0,n.kt)("p",null,"An alternate way to view the contents of a menu is to use Python's built-in help."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"help(openbb.stocks.dd)\n")),(0,n.kt)("h3",{id:"docstrings"},(0,n.kt)("strong",{parentName:"h3"},"Docstrings")),(0,n.kt)("p",null,"In addition to Python's built-in help, docstrings are also displayed in the Contextual Help window, within a Jupyter environment or by running ",(0,n.kt)("inlineCode",{parentName:"p"},"help(openbb.economy.events)")," in your code editor."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"help(openbb.economy.events)\n\nHelp on Operation in module openbb_terminal.core.library.operation:\n\n<openbb_terminal.core.library.operation.Operation object>\n    Get economic calendar for countries between specified dates\n\n    Parameters\n    ----------\n    countries : [List[str],str]\n        List of countries to include in calendar.  Empty returns all\n    start_date : str\n        Start date for calendar\n    end_date : str\n        End date for calendar\n\n    Returns\n    -------\n    pd.DataFrame\n        Economic calendar\n")),(0,n.kt)("h3",{id:"openbbuserdata-folder"},(0,n.kt)("strong",{parentName:"h3"},"OpenBBUserData Folder")),(0,n.kt)("p",null,"The OpenBB SDK shares settings, keys, and the ",(0,n.kt)("inlineCode",{parentName:"p"},"OpenBBUserData")," folder with the Terminal. Portfolio files, screener presets, and Matplotlib style sheets are all shared resources. This folder will be created after the first installation and it is read by subsequent installations. The default location for it is in the root of the operating system user account folder. For functions where files are read from these locations, like screeners, it is not neccessary to include the full path. The code block below returns results from the stock screener, using the preset, ",(0,n.kt)("inlineCode",{parentName:"p"},"unusual_options"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"results = []\n\nresults = openbb.stocks.screener.screener_data(\n    preset_loaded = 'unusual_volume.ini',\n    data_type = 'technical',\n    limit = 5,\n)\nresults = results.sort_values(ascending = False, by = ['Volume'])\nresults.head(5)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"Ticker"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Beta"),(0,n.kt)("th",{parentName:"tr",align:"right"},"ATR"),(0,n.kt)("th",{parentName:"tr",align:"right"},"SMA20"),(0,n.kt)("th",{parentName:"tr",align:"right"},"SMA50"),(0,n.kt)("th",{parentName:"tr",align:"right"},"SMA200"),(0,n.kt)("th",{parentName:"tr",align:"right"},"52W High"),(0,n.kt)("th",{parentName:"tr",align:"right"},"52W Low"),(0,n.kt)("th",{parentName:"tr",align:"right"},"RSI"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Price"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Change"),(0,n.kt)("th",{parentName:"tr",align:"right"},"from Open"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Gap"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Volume"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"48"),(0,n.kt)("td",{parentName:"tr",align:"left"},"CUEN"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.61"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.04"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.0367"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.2802"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.5626"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.8793"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.1505"),(0,n.kt)("td",{parentName:"tr",align:"right"},"39.65"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.35"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0494"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.2249"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.3539"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.15487e+07")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"16"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PDSB"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.54"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.55"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.6788"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.0466"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.7899"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.248"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.0104"),(0,n.kt)("td",{parentName:"tr",align:"right"},"83.52"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8.7"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.2323"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.1951"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0312"),(0,n.kt)("td",{parentName:"tr",align:"right"},"6.32774e+06")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"32"),(0,n.kt)("td",{parentName:"tr",align:"left"},"IBTE"),(0,n.kt)("td",{parentName:"tr",align:"right"},"nan"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.05"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0025"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.0015"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.0214"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.0661"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0076"),(0,n.kt)("td",{parentName:"tr",align:"right"},"53.72"),(0,n.kt)("td",{parentName:"tr",align:"right"},"23.89"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0008"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0004"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0004"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5.85758e+06")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"PTLO"),(0,n.kt)("td",{parentName:"tr",align:"right"},"nan"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.28"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.033"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.038"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0368"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.6097"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.5187"),(0,n.kt)("td",{parentName:"tr",align:"right"},"52.02"),(0,n.kt)("td",{parentName:"tr",align:"right"},"22.53"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.0941"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.004"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.0905"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.96768e+06")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"65"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ABMD"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.32"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10.78"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.1822"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.3316"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.3296"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.0201"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.7027"),(0,n.kt)("td",{parentName:"tr",align:"right"},"78.79"),(0,n.kt)("td",{parentName:"tr",align:"right"},"374.32"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0006"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.0006"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0011"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.50787e+06")))),(0,n.kt)("h2",{id:"requesting-and-handling-data"},"Requesting and Handling Data"),(0,n.kt)("h3",{id:"dataframes"},"Dataframes"),(0,n.kt)("p",null,"The results from data functions are not stored to memory unless explicitly instructed to. Most functions returning data are presented as a Pandas DataFrame."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"openbb.economy.events()\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"Time (GMT)"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Country"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Event"),(0,n.kt)("th",{parentName:"tr",align:"left"},"actual"),(0,n.kt)("th",{parentName:"tr",align:"left"},"consensus"),(0,n.kt)("th",{parentName:"tr",align:"left"},"previous"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"01:30"),(0,n.kt)("td",{parentName:"tr",align:"left"},"France"),(0,n.kt)("td",{parentName:"tr",align:"left"},"French Unemployment Rate"),(0,n.kt)("td",{parentName:"tr",align:"left"},"7.3%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"7.3%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"7.4%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-15")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"02:00"),(0,n.kt)("td",{parentName:"tr",align:"left"},"United Kingdom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Average Earnings ex Bonus"),(0,n.kt)("td",{parentName:"tr",align:"left"},"5.7%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"5.5%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"5.5%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-15")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"02:00"),(0,n.kt)("td",{parentName:"tr",align:"left"},"United Kingdom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Average Earnings Index +Bonus"),(0,n.kt)("td",{parentName:"tr",align:"left"},"6.0%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"5.9%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"6.1%"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-15")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"02:00"),(0,n.kt)("td",{parentName:"tr",align:"left"},"United Kingdom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Claimant Count Change"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.3K"),(0,n.kt)("td",{parentName:"tr",align:"left"},"17.3K"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.9K"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-15")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"02:00"),(0,n.kt)("td",{parentName:"tr",align:"left"},"United Kingdom"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Employment Change 3M/3M"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-52K"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-25K"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-109K"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-15")))),(0,n.kt)("p",null,"Modify the syntax slightly to deliver the output into a DataFrame:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"economic_calendar = openbb.economy.events()\n")),(0,n.kt)("p",null,"Defined as a variable, interacting with the results becomes a matter of manipulating tables. For example, the code block below will filter the results of the events function to display only events scheduled at a specific time."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"economic_calendar = openbb.economy.events()\neconomic_calendar.set_index(keys = ['Time (GMT)'], append = True, inplace = True)\nevents = economic_calendar.filter(like = '9:00', axis = 0)\n\nevents\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"Country"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Event"),(0,n.kt)("th",{parentName:"tr",align:"left"},"actual"),(0,n.kt)("th",{parentName:"tr",align:"left"},"consensus"),(0,n.kt)("th",{parentName:"tr",align:"left"},"previous"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"09:00"),(0,n.kt)("td",{parentName:"tr",align:"left"},"United States"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fed Governor Cook Speaks"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-15")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"09:00"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Germany"),(0,n.kt)("td",{parentName:"tr",align:"left"},"German Buba Balz Speaks"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-15")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"09:00"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Germany"),(0,n.kt)("td",{parentName:"tr",align:"left"},"German Buba Vice President Buch Speaks"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-15")))),(0,n.kt)("p",null,"Where the input to a function is a list, it may be desireable to derive that list from a different function. This can be useful for screening tickers, or analyzing particular industries or sectors. The Comparison Analysis sub-module, within Stocks, is one set of functions that can benefit from this kind of workflow. Instead of something like:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"openbb.stocks.ca.screener(similar = ['AAPL', 'NFLX', 'META', 'AMZN', 'MSFT', 'GOOGL', 'DIS', 'TSLA'], data_type = 'valuation')\n")),(0,n.kt)("p",null,"Try, ",(0,n.kt)("inlineCode",{parentName:"p"},"openbb.etf.holdings"),", to populate a list dynamically:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"symbols = openbb.etf.holdings('DIA')\ndia_symbols = list(symbols.index.drop(['N/A']))\ndia_valuation = openbb.stocks.ca.screener(similar = dia_symbols, data_type = 'valuation')\ndia_valuation = dia_valuation.sort_values(by = ['Price'], ascending = False).convert_dtypes()\n\ndia_valuation.head(5)\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"}),(0,n.kt)("th",{parentName:"tr",align:"left"},"Ticker"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Market Cap"),(0,n.kt)("th",{parentName:"tr",align:"right"},"P/E"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Fwd P/E"),(0,n.kt)("th",{parentName:"tr",align:"left"},"PEG"),(0,n.kt)("th",{parentName:"tr",align:"right"},"P/S"),(0,n.kt)("th",{parentName:"tr",align:"left"},"P/B"),(0,n.kt)("th",{parentName:"tr",align:"right"},"P/C"),(0,n.kt)("th",{parentName:"tr",align:"right"},"P/FCF"),(0,n.kt)("th",{parentName:"tr",align:"right"},"EPS this Y"),(0,n.kt)("th",{parentName:"tr",align:"right"},"EPS next Y"),(0,n.kt)("th",{parentName:"tr",align:"right"},"EPS past 5Y"),(0,n.kt)("th",{parentName:"tr",align:"right"},"EPS next 5Y"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Sales past 5Y"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Price"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Change"),(0,n.kt)("th",{parentName:"tr",align:"right"},"Volume"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"25"),(0,n.kt)("td",{parentName:"tr",align:"left"},"UNH"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5.0033e+11"),(0,n.kt)("td",{parentName:"tr",align:"right"},"25.17"),(0,n.kt)("td",{parentName:"tr",align:"right"},"20.61"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.77"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.59"),(0,n.kt)("td",{parentName:"tr",align:"left"},"6.43"),(0,n.kt)("td",{parentName:"tr",align:"right"},"12.88"),(0,n.kt)("td",{parentName:"tr",align:"right"},"19.61"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.128"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.1315"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.201"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.1422"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.092"),(0,n.kt)("td",{parentName:"tr",align:"right"},"503.01"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.0209"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5007787")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"GS"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.282e+11"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10.18"),(0,n.kt)("td",{parentName:"tr",align:"right"},"10.17"),(0,n.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.08"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.24"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.45"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.98"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.403"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0976"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.296"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.0912"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.113"),(0,n.kt)("td",{parentName:"tr",align:"right"},"382.88"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0014"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3184768")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"HD"),(0,n.kt)("td",{parentName:"tr",align:"right"},"3.1097e+11"),(0,n.kt)("td",{parentName:"tr",align:"right"},"18.86"),(0,n.kt)("td",{parentName:"tr",align:"right"},"17.86"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1.2"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1334.43"),(0,n.kt)("td",{parentName:"tr",align:"right"},"247"),(0,n.kt)("td",{parentName:"tr",align:"right"},"89.72"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.301"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0361"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.192"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.157"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.098"),(0,n.kt)("td",{parentName:"tr",align:"right"},"311.93"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0163"),(0,n.kt)("td",{parentName:"tr",align:"right"},"9239159")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"AMGN"),(0,n.kt)("td",{parentName:"tr",align:"right"},"1.5543e+11"),(0,n.kt)("td",{parentName:"tr",align:"right"},"22.86"),(0,n.kt)("td",{parentName:"tr",align:"right"},"15.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.38"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"41.77"),(0,n.kt)("td",{parentName:"tr",align:"right"},"13.54"),(0,n.kt)("td",{parentName:"tr",align:"right"},"32.04"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.165"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0486"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.001"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0677"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.025"),(0,n.kt)("td",{parentName:"tr",align:"right"},"283.6"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.006"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2761083")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"18"),(0,n.kt)("td",{parentName:"tr",align:"left"},"MCD"),(0,n.kt)("td",{parentName:"tr",align:"right"},"2.0272e+11"),(0,n.kt)("td",{parentName:"tr",align:"right"},"34.3"),(0,n.kt)("td",{parentName:"tr",align:"right"},"26.01"),(0,n.kt)("td",{parentName:"tr",align:"left"},"5.14"),(0,n.kt)("td",{parentName:"tr",align:"right"},"8.71"),(0,n.kt)("td",{parentName:"tr",align:"left"},"N/A"),(0,n.kt)("td",{parentName:"tr",align:"right"},"71.67"),(0,n.kt)("td",{parentName:"tr",align:"right"},"118.65"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.591"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0522"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.13"),(0,n.kt)("td",{parentName:"tr",align:"right"},"0.0667"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.012"),(0,n.kt)("td",{parentName:"tr",align:"right"},"267.84"),(0,n.kt)("td",{parentName:"tr",align:"right"},"-0.0163"),(0,n.kt)("td",{parentName:"tr",align:"right"},"5421817")))),(0,n.kt)("h3",{id:"displaying-charts"},"Displaying Charts"),(0,n.kt)("p",null,"The OpenBB SDK has built-in charting libraries for Matplotlib, for any chart available from the Terminal. User style sheets can be added to the folder, ",(0,n.kt)("inlineCode",{parentName:"p"},"~/OpenBBUserData/styles/user"),". Styles are shared properties between the OpenBB Terminal and the SDK."),(0,n.kt)("p",null,"Functions, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"candle"),", exist to display charts. Others, like those within the Technical Analysis module, have the option to return either, a chart or raw data. The next examples will outline a few different scenarios."),(0,n.kt)("p",null,"Data from the previous example, ",(0,n.kt)("inlineCode",{parentName:"p"},"spx_daily"),", can feed the inputs to the ",(0,n.kt)("inlineCode",{parentName:"p"},"openbb.stocks.candle")," function. However, if this particular ",(0,n.kt)("inlineCode",{parentName:"p"},"DateTime Index")," remains sorted by descending dates, the x-axis will be backwards and the chart will read from right-to-left. To correct this, sort the index with ",(0,n.kt)("inlineCode",{parentName:"p"},"ascending = True"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"spx_daily.sort_index(ascending = True, inplace = True)\nopenbb.stocks.candle(symbol = '', data = spx, asset_type = 'SPX Daily Chart From January 2, 1990')\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/202800196-ca30fe7f-0a6d-4b38-8a03-a825c3467900.png",alt:"openbb.stocks.candle",title:"openbb.stocks.candle"})),(0,n.kt)("p",null,"If there is no data already in memory, assign the ",(0,n.kt)("inlineCode",{parentName:"p"},"data")," argument as a load function, for example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"openbb.stocks.candle(\n    data = openbb.stocks.load(\n        symbol = 'SPY',\n        start_date = '1993-11-01',\n        monthly = True),\n    asset_type = 'SPY - Monthly Chart from November, 1993',\n    symbol = ''\n)\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/202801049-083ec045-7038-440b-8a54-7a02269e4a40.png",alt:"openbb.stocks.candle",title:"openbb.stocks.candle"})),(0,n.kt)("p",null,"Where functions in the Terminal display either a chart or raw data, the command will have an additional ",(0,n.kt)("inlineCode",{parentName:"p"},"_chart")," component. For example, Donchian Channels:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"openbb.ta.donchian(openbb.stocks.load('SPY', interval = 15))\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"date"),(0,n.kt)("th",{parentName:"tr",align:"right"},"DCL_20_20"),(0,n.kt)("th",{parentName:"tr",align:"right"},"DCM_20_20"),(0,n.kt)("th",{parentName:"tr",align:"right"},"DCU_20_20"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-15 14:45:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"394.49"),(0,n.kt)("td",{parentName:"tr",align:"right"},"398.33"),(0,n.kt)("td",{parentName:"tr",align:"right"},"402.17")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-15 15:00:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"394.49"),(0,n.kt)("td",{parentName:"tr",align:"right"},"398.195"),(0,n.kt)("td",{parentName:"tr",align:"right"},"401.9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-15 15:15:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"394.49"),(0,n.kt)("td",{parentName:"tr",align:"right"},"398.195"),(0,n.kt)("td",{parentName:"tr",align:"right"},"401.9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-15 15:30:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"394.49"),(0,n.kt)("td",{parentName:"tr",align:"right"},"398.105"),(0,n.kt)("td",{parentName:"tr",align:"right"},"401.72")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-15 15:45:00"),(0,n.kt)("td",{parentName:"tr",align:"right"},"394.49"),(0,n.kt)("td",{parentName:"tr",align:"right"},"398.027"),(0,n.kt)("td",{parentName:"tr",align:"right"},"401.565")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"openbb.ta.donchian_chart(\n    data = openbb.stocks.load('SPY', interval = 15),\n    symbol = 'SPY 15 Minute Data'\n)\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/202802907-40fa97c8-055d-4ef5-bbc2-7f01a5c5b738.png",alt:"openbb.ta.donchian",title:"openbb.ta.donchian"})),(0,n.kt)("p",null,"Futures curves are another example where this syntax is applied:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"openbb.futures.curve_chart('GE')\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/201583945-18364efa-c305-4c1a-a032-f779e28894c8.png",alt:"openbb.futures.curve",title:"openbb.futures.curve"})),(0,n.kt)("p",null,"The guides section for each module explore further functionality and provide sample code snippets."))}o.isMDXComponent=!0}}]);