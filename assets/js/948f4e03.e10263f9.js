"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85867],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var u=n.createContext({}),p=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=p(a),k=l,N=s["".concat(u,".").concat(k)]||s[k]||d[k]||r;return a?n.createElement(N,i(i({ref:e},m),{},{components:a})):n.createElement(N,i({ref:e},m))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=s;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},47659:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>u,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var n=a(87462),l=(a(67294),a(3905)),r=a(65488),i=a(85162);const o={title:"tcn",description:"OpenBB SDK Function"},u="tcn",p={unversionedId:"functions/forecast/tcn",id:"functions/forecast/tcn",title:"tcn",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/forecast/tcn.md",sourceDirName:"functions/forecast",slug:"/functions/forecast/tcn",permalink:"/sdk/functions/forecast/tcn",draft:!1,tags:[],version:"current",frontMatter:{title:"tcn",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"sto",permalink:"/sdk/functions/forecast/sto"},next:{title:"tft",permalink:"/sdk/functions/forecast/tft"}},m={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}],s={toc:d};function k(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tcn"},"tcn"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"model",label:"Model",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Perform TCN forecasting"),(0,l.kt)("p",null,"Source Code: [",(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/tcn_model.py#L20"},"link"),"]"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def get_tcn_data(data: Union[pd.Series, pd.DataFrame], target_column: str = "close", n_predict: int = 5, past_covariates: str = None, train_split: float = 0.85, forecast_horizon: int = 5, input_chunk_length: int = 14, output_chunk_length: int = 5, dropout: float = 0.1, num_filters: int = 6, weight_norm: bool = True, dilation_base: int = 2, n_epochs: int = 100, learning_rate: float = 0.001, batch_size: int = 800, model_save_name: str = "tcn_model", force_reset: bool = True, save_checkpoints: bool = True) -> Tuple[List[Optional[darts.timeseries.TimeSeries]], List[Optional[darts.timeseries.TimeSeries]], List[Optional[darts.timeseries.TimeSeries]], Optional[float], Optional[type[darts.models.forecasting.tcn_model.TCNModel]]]\n')),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"Union","[pd.Series, pd.DataFrame]"),(0,l.kt)("td",{parentName:"tr",align:null},"Input Data"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"target_column"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},'Target column to forecast. Defaults to "close".'),(0,l.kt)("td",{parentName:"tr",align:null},"close"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"n_predict"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Days to predict. Defaults to 5."),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"train_split"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Train/val split. Defaults to 0.85."),(0,l.kt)("td",{parentName:"tr",align:null},"0.85"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"past_covariates"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Multiple secondary columns to factor in when forecasting. Defaults to None."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"forecast_horizon"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Forecast horizon when performing historical forecasting. Defaults to 5."),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"input_chunk_length"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of past time steps that are fed to the forecasting module at prediction time. Defaults to 14."),(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"output_chunk_length"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The length of the forecast of the model. Defaults to 5."),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dropout"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Fraction of neurons affected by Dropout. Defaults to 0.1."),(0,l.kt)("td",{parentName:"tr",align:null},"0.1"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"num_filters"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of filters in a convolutional layer of the TCN. Defaults to 6."),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"weight_norm"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean value indicating whether to use weight normalization. Defaults to True."),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dilation_base"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The base of the exponent that will determine the dilation on every level. Defaults to 2."),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_size"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of time series (input and output sequences) used in each training pass. Defaults to 32."),(0,l.kt)("td",{parentName:"tr",align:null},"800"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"n_epochs"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of epochs over which to train the model. Defaults to 100."),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"learning_rate"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Defaults to 1e-3."),(0,l.kt)("td",{parentName:"tr",align:null},"0.001"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"model_save_name"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},'Name for model. Defaults to "brnn_model".'),(0,l.kt)("td",{parentName:"tr",align:null},"tcn_model"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"force_reset"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"If set to True, any previously-existing model with the same name will be reset",(0,l.kt)("br",null),"(all checkpoints will be discarded). Defaults to True."),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"save_checkpoints"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether or not to automatically save the untrained model and checkpoints from training.",(0,l.kt)("br",null),"Defaults to True."),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"True")))),(0,l.kt)("h2",{id:"returns"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tuple[List","[TimeSeries]",", List","[TimeSeries]",", List","[TimeSeries]",", Optional","[float]",", type","[TCNModel]","]"),(0,l.kt)("td",{parentName:"tr",align:null},"Adjusted Data series,",(0,l.kt)("br",null),"Historical forecast by best RNN model,",(0,l.kt)("br",null),"list of Predictions,",(0,l.kt)("br",null),"Mean average precision error,",(0,l.kt)("br",null),"Best TCN Model."))))),(0,l.kt)(i.Z,{value:"view",label:"View",mdxType:"TabItem"},(0,l.kt)("p",null,"Display TCN forecast"),(0,l.kt)("p",null,"Source Code: [",(0,l.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/tcn_view.py#L20"},"link"),"]"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'def display_tcn_forecast(data: Union[pd.DataFrame, pd.Series], target_column: str = "close", dataset_name: str = "", n_predict: int = 5, past_covariates: str = None, train_split: float = 0.85, forecast_horizon: int = 5, input_chunk_length: int = 14, output_chunk_length: int = 5, dropout: float = 0.1, num_filters: int = 6, weight_norm: bool = True, dilation_base: int = 2, n_epochs: int = 100, learning_rate: float = 0.001, batch_size: int = 800, model_save_name: str = "tcn_model", force_reset: bool = True, save_checkpoints: bool = True, export: str = "", residuals: bool = False, forecast_only: bool = False, start_date: Optional[datetime.datetime] = None, end_date: Optional[datetime.datetime] = None, naive: bool = False, export_pred_raw: bool = False, external_axes: Optional[List[axes]] = None) -> None\n')),(0,l.kt)("h2",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"Union","[pd.Series, pd.DataFrame]"),(0,l.kt)("td",{parentName:"tr",align:null},"Input Data"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"target_column"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},'Target column to forecast. Defaults to "close".'),(0,l.kt)("td",{parentName:"tr",align:null},"close"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dataset_name"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the ticker to be predicted"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"n_predict"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Days to predict. Defaults to 5."),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"train_split"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Train/val split. Defaults to 0.85."),(0,l.kt)("td",{parentName:"tr",align:null},"0.85"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"past_covariates"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Multiple secondary columns to factor in when forecasting. Defaults to None."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"forecast_horizon"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Forecast horizon when performing historical forecasting. Defaults to 5."),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"input_chunk_length"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of past time steps that are fed to the forecasting module at prediction time. Defaults to 14."),(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"output_chunk_length"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The length of the forecast of the model. Defaults to 5."),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dropout"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Fraction of neurons affected by Dropout. Defaults to 0.1."),(0,l.kt)("td",{parentName:"tr",align:null},"0.1"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"num_filters"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of filters in a convolutional layer of the TCN. Defaults to 6."),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"weight_norm"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean value indicating whether to use weight normalization. Defaults to True."),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dilation_base"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"The base of the exponent that will determine the dilation on every level. Defaults to 2."),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_size"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of time series (input and output sequences) used in each training pass. Defaults to 32."),(0,l.kt)("td",{parentName:"tr",align:null},"800"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"n_epochs"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of epochs over which to train the model. Defaults to 100."),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"learning_rate"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Defaults to 1e-3."),(0,l.kt)("td",{parentName:"tr",align:null},"0.001"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"model_save_name"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},'Name for model. Defaults to "brnn_model".'),(0,l.kt)("td",{parentName:"tr",align:null},"tcn_model"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"force_reset"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"If set to True, any previously-existing model with the same name will be reset",(0,l.kt)("br",null),"(all checkpoints will be discarded). Defaults to True."),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"save_checkpoints"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether or not to automatically save the untrained model and checkpoints from training. Defaults to True."),(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"export"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"Format to export data"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"residuals"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to show residuals for the model. Defaults to False."),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"forecast_only"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to only show dates in the forecasting range. Defaults to False."),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"start_date"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional","[datetime]"),(0,l.kt)("td",{parentName:"tr",align:null},"The starting date to perform analysis, data before this is trimmed. Defaults to None."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"end_date"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional","[datetime]"),(0,l.kt)("td",{parentName:"tr",align:null},"The ending date to perform analysis, data after this is trimmed. Defaults to None."),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"naive"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to show the naive baseline. This just assumes the closing price will be the same",(0,l.kt)("br",null),"as the previous day's closing price. Defaults to False."),(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"external_axes"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional[List","[plt.axes]","]"),(0,l.kt)("td",{parentName:"tr",align:null},"External axes to plot on"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"True")))),(0,l.kt)("h2",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,"This function does not return anything"))))}k.isMDXComponent=!0},85162:(t,e,a)=>{a.d(e,{Z:()=>i});var n=a(67294),l=a(86010);const r="tabItem_Ymn6";function i(t){let{children:e,hidden:a,className:i}=t;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:a},e)}},65488:(t,e,a)=>{a.d(e,{Z:()=>k});var n=a(87462),l=a(67294),r=a(86010),i=a(72389),o=a(67392),u=a(7094),p=a(12466);const m="tabList__CuJ",d="tabItem_LNqP";function s(t){var e;const{lazy:a,block:i,defaultValue:s,values:k,groupId:N,className:g}=t,c=l.Children.map(t.children,(t=>{if((0,l.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=k??c.map((t=>{let{props:{value:e,label:a,attributes:n}}=t;return{value:e,label:a,attributes:n}})),h=(0,o.l)(f,((t,e)=>t.value===e.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===s?s:s??(null==(e=c.find((t=>t.props.default)))?void 0:e.props.value)??c[0].props.value;if(null!==b&&!f.some((t=>t.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:T}=(0,u.U)(),[_,v]=(0,l.useState)(b),D=[],{blockElementScrollPositionUntilNextRender:w}=(0,p.o5)();if(null!=N){const t=y[N];null!=t&&t!==_&&f.some((e=>e.value===t))&&v(t)}const O=t=>{const e=t.currentTarget,a=D.indexOf(e),n=f[a].value;n!==_&&(w(e),v(n),null!=N&&T(N,String(n)))},x=t=>{var e;let a=null;switch(t.key){case"Enter":O(t);break;case"ArrowRight":{const e=D.indexOf(t.currentTarget)+1;a=D[e]??D[0];break}case"ArrowLeft":{const e=D.indexOf(t.currentTarget)-1;a=D[e]??D[D.length-1];break}}null==(e=a)||e.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},g)},f.map((t=>{let{value:e,label:a,attributes:i}=t;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:_===e?0:-1,"aria-selected":_===e,key:e,ref:t=>D.push(t),onKeyDown:x,onClick:O},i,{className:(0,r.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":_===e})}),a??e)}))),a?(0,l.cloneElement)(c.filter((t=>t.props.value===_))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},c.map(((t,e)=>(0,l.cloneElement)(t,{key:e,hidden:t.props.value!==_})))))}function k(t){const e=(0,i.Z)();return l.createElement(s,(0,n.Z)({key:String(e)},t))}}}]);