"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40418],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var u=r.createContext({}),p=function(t){var e=r.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,u=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=p(a),c=n,y=m["".concat(u,".").concat(c)]||m[c]||s[c]||l;return a?r.createElement(y,o(o({ref:e},d),{},{components:a})):r.createElement(y,o({ref:e},d))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},28364:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>u,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905)),l=a(65099),o=a(85162);const i={title:"tyld",description:"OpenBB SDK Function"},u="tyld",p={unversionedId:"functions/economy/tyld",id:"functions/economy/tyld",title:"tyld",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/economy/tyld.md",sourceDirName:"functions/economy",slug:"/functions/economy/tyld",permalink:"/sdk/functions/economy/tyld",draft:!1,tags:[],version:"current",frontMatter:{title:"tyld",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"treasury_maturities",permalink:"/sdk/functions/economy/treasury_maturities"},next:{title:"unemp",permalink:"/sdk/functions/economy/unemp"}},d={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}],m={toc:s};function c(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"tyld"},"tyld"),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,n.kt)("p",null,"Get historical yield for a given maturity"),(0,n.kt)("p",null,"Source Code: [",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/alphavantage_model.py#L230"},"link"),"]"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'def get_treasury_yield(interval: str = "m", maturity: str = "10y", start_date: str = "2010-01-01") -> pd.DataFrame\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"interval"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},'Interval for data.  Can be "d","w","m" for daily, weekly or monthly, by default "m"'),(0,n.kt)("td",{parentName:"tr",align:null},"m"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start_date"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},'Start date for data.  Should be in YYYY-MM-DD format, by default "2010-01-01"'),(0,n.kt)("td",{parentName:"tr",align:null},"2010-01-01"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"maturity"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},'Maturity timeline.  Can be "3mo","5y","10y" or "30y", by default "10y"'),(0,n.kt)("td",{parentName:"tr",align:null},"10y"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns"},"Returns"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,n.kt)("td",{parentName:"tr",align:null},"Dataframe of historical yields")))),(0,n.kt)("hr",null)),(0,n.kt)(o.Z,{value:"view",label:"View",mdxType:"TabItem"},(0,n.kt)("p",null,"Display historical treasury yield for given maturity"),(0,n.kt)("p",null,"Source Code: [",(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/alphavantage_view.py#L315"},"link"),"]"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'def display_treasury_yield(interval: str = "m", maturity: str = "10y", start_date: str = "2010-01-01", raw: bool = False, export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None) -> None\n')),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"interval"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},'Interval for data.  Can be "d","w","m" for daily, weekly or monthly, by default "m"'),(0,n.kt)("td",{parentName:"tr",align:null},"m"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"maturity"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},'Maturity timeline.  Can be "3mo","5y","10y" or "30y", by default "10y"'),(0,n.kt)("td",{parentName:"tr",align:null},"10y"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"start_date"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},'Start date for data.  Should be in YYYY-MM-DD format, by default "2010-01-01"'),(0,n.kt)("td",{parentName:"tr",align:null},"2010-01-01"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"raw"),(0,n.kt)("td",{parentName:"tr",align:null},"bool"),(0,n.kt)("td",{parentName:"tr",align:null},"Flag to display raw data, by default False"),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"export"),(0,n.kt)("td",{parentName:"tr",align:null},"str"),(0,n.kt)("td",{parentName:"tr",align:null},'Format to export data, by default ""'),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"external_axes"),(0,n.kt)("td",{parentName:"tr",align:null},"Optional[List","[plt.Axes]","]"),(0,n.kt)("td",{parentName:"tr",align:null},"External axes (1 axis is expected in the list), by default None"),(0,n.kt)("td",{parentName:"tr",align:null},"None"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,"This function does not return anything"),(0,n.kt)("hr",null))))}c.isMDXComponent=!0},85162:(t,e,a)=>{a.d(e,{Z:()=>o});var r=a(67294),n=a(86010);const l="tabItem_Ymn6";function o(t){let{children:e,hidden:a,className:o}=t;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,o),hidden:a},e)}},65099:(t,e,a)=>{a.d(e,{Z:()=>c});var r=a(87462),n=a(67294),l=a(86010),o=a(72389),i=a(67392),u=a(7094),p=a(12466);const d="tabItem_hGfb";var s=a(16550);function m(t){var e;const{lazy:a,block:o,defaultValue:m,values:c,groupId:y,className:k}=t,b=n.Children.map(t.children,(t=>{if((0,n.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=c??b.map((t=>{let{props:{value:e,label:a,attributes:r}}=t;return{value:e,label:a,attributes:r}})),g=(0,i.l)(f,((t,e)=>t.value===e.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===m?m:m??(null==(e=b.find((t=>t.props.default)))?void 0:e.props.value)??b[0].props.value;if(null!==N&&!f.some((t=>t.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${f.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:v}=(0,u.U)(),[x,T]=(0,n.useState)(N),O=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=y){const t=h[y];null!=t&&t!==x&&f.some((e=>e.value===t))&&T(t)}const D=t=>{const e=t.currentTarget,a=O.indexOf(e),r=f[a].value;r!==x&&(w(e),T(r),null!=y&&v(y,String(r)))},E=t=>{var e;let a=null;switch(t.key){case"Enter":D(t);break;case"ArrowRight":{const e=O.indexOf(t.currentTarget)+1;a=O[e]??O[0];break}case"ArrowLeft":{const e=O.indexOf(t.currentTarget)-1;a=O[e]??O[O.length-1];break}}null==(e=a)||e.focus()},{pathname:_}=(0,s.TH)();return n.createElement("div",null,n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("_group-tab list-none lg:-ml-7 my-6")},f.map((t=>{let{value:e,label:a,attributes:o}=t;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:t=>O.push(t),onKeyDown:E,onClick:D},o,{className:(0,l.Z)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase text-sm border-b",d,null==o?void 0:o.className,{"border-b-2 pointer-events-none":x===e,"cursor-pointer":x!==e,"border-b-2 text-[#669dcb] border-[#669dcb]":x===e&&_.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":x===e&&_.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":x!==e&&_.startsWith("/sdk"),"border-grey-600 text-grey-600 hover:text-[#abd2f1] hover:border-[#abd2f1]":x!==e&&_.startsWith("/terminal")})}),a??e)})),n.createElement("li",{className:"w-full border-b border-grey-600 pointer-events-none py-1 mb-[9.5px]"})),a?(0,n.cloneElement)(b.filter((t=>t.props.value===x))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},b.map(((t,e)=>(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==x})))))}function c(t){const e=(0,o.Z)();return n.createElement(m,(0,r.Z)({key:String(e)},t))}}}]);