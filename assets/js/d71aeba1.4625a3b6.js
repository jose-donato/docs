"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38557],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,m=d["".concat(i,".").concat(p)]||d[p]||f[p]||o;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51504:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},s=void 0,l={unversionedId:"features/forecast/tft/tft",id:"features/forecast/tft/tft",title:"tft",description:"Perform TFT forecast (Temporal Fusion Transformer):",source:"@site/content/terminal/features/forecast/tft/tft.md",sourceDirName:"features/forecast/tft",slug:"/features/forecast/tft/",permalink:"/docs/terminal/features/forecast/tft/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/forecast/tft/tft.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"tcn",permalink:"/docs/terminal/features/forecast/tcn/"},next:{title:"theta",permalink:"/docs/terminal/features/forecast/theta/"}},i={},c=[],u={toc:c};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"usage: tft [--lstm-layers LSTM_LAYERS] [--num-attention-heads NUM_ATTENTION_HEADS] [--full-attention] [--hidden-continuous-size HIDDEN_CONTINUOUS_SIZE] [--hidden-size HIDDEN_SIZE]\n           [--past-covariates PAST_COVARIATES] [--all-past-covariates] [--naive] [-d {AAPL}] [-c TARGET_COLUMN] [-n N_DAYS] [-t TRAIN_SPLIT] [-i INPUT_CHUNK_LENGTH]\n           [-o OUTPUT_CHUNK_LENGTH] [--force-reset FORCE_RESET] [--save-checkpoints SAVE_CHECKPOINTS] [--model-save-name MODEL_SAVE_NAME] [--n-epochs N_EPOCHS] [--dropout DROPOUT]\n           [--batch-size BATCH_SIZE] [--end S_END_DATE] [--start S_START_DATE] [--residuals] [--forecast-only] [--export-pred-raw] [-h] [--export EXPORT]\n")),(0,r.kt)("p",null,"Perform TFT forecast (Temporal Fusion Transformer):\n",(0,r.kt)("a",{parentName:"p",href:"https://unit8co.github.io/darts/generated_api/darts.models.forecasting.tft_model.html"},"https://unit8co.github.io/darts/generated_api/darts.models.forecasting.tft_model.html")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"optional arguments:\n  --lstm-layers LSTM_LAYERS\n                        Number of LSTM layers. (default: 1)\n  --num-attention-heads NUM_ATTENTION_HEADS\n                        Number of attention heads. (default: 4)\n  --full-attention      Whether to apply a multi-head attention query. (default: False)\n  --hidden-continuous-size HIDDEN_CONTINUOUS_SIZE\n                        Default hidden size for processing continuous variables. (default: 8)\n  --hidden-size HIDDEN_SIZE\n                        Size for feature maps for each hidden RNN layer (h_n) (default: 16)\n  --past-covariates PAST_COVARIATES\n                        Past covariates(columns/features) in same dataset. Comma separated. (default: None)\n  --all-past-covariates\n                        Adds all rows as past covariates except for date and the target column. (default: False)\n  --naive               Show the naive baseline for a model. (default: False)\n  -d {AAPL}, --target-dataset {AAPL}\n                        The name of the dataset you want to select (default: None)\n  -c TARGET_COLUMN, --target-column TARGET_COLUMN\n                        The name of the specific column you want to use (default: close)\n  -n N_DAYS, --n-days N_DAYS\n                        prediction days. (default: 5)\n  -t TRAIN_SPLIT, --train-split TRAIN_SPLIT\n                        Start point for rolling training and forecast window. 0.0-1.0 (default: 0.85)\n  -i INPUT_CHUNK_LENGTH, --input-chunk-length INPUT_CHUNK_LENGTH\n                        Number of past time steps for forecasting module at prediction time. (default: 14)\n  -o OUTPUT_CHUNK_LENGTH, --output-chunk-length OUTPUT_CHUNK_LENGTH\n                        The length of the forecast of the model. (default: 5)\n  --force-reset FORCE_RESET\n                        If set to True, any previously-existing model with the same name will be reset (all checkpoints will be discarded). (default: True)\n  --save-checkpoints SAVE_CHECKPOINTS\n                        Whether to automatically save the untrained model and checkpoints. (default: True)\n  --model-save-name MODEL_SAVE_NAME\n                        Name of the model to save. (default: tft_model)\n  --n-epochs N_EPOCHS   Number of epochs over which to train the model. (default: 300)\n  --dropout DROPOUT     Fraction of neurons afected by Dropout. (default: 0.1)\n  --batch-size BATCH_SIZE\n                        Number of time series (input and output) used in each training pass (default: 32)\n  --end S_END_DATE      The end date (format YYYY-MM-DD) to select for testing (default: None)\n  --start S_START_DATE  The start date (format YYYY-MM-DD) to select for testing (default: None)\n  --residuals           Show the residuals for the model. (default: False)\n  --forecast-only       Do not plot the hisotorical data without forecasts. (default: False)\n  --export-pred-raw     Export predictions to a csv file. (default: False)\n  -h, --help            show this help message (default: False)\n  --export EXPORT       Export figure into png, jpg, pdf, svg (default: )\n\nFor more information and examples, use 'about tft' to access the related guide.\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"2022 Jul 23, 10:36 (\ud83e\udd8b) /forecast/ $ load GME_20220719_123734.csv -a GME\n\n2022 Jul 23, 11:03 (\ud83e\udd8b) /forecast/ $ tft GME\n100%|\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588| 115/115 [00:07<00:00, 15.10it/s]\nTFT model obtains MAPE: 44.60%\n\n\n\n       Actual price: $ 146.64\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503 Datetime            \u2503 Prediction \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 2022-07-19 00:00:00 \u2502 $ 169.69   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-07-20 00:00:00 \u2502 $ 168.53   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-07-21 00:00:00 \u2502 $ 167.33   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-07-22 00:00:00 \u2502 $ 167.23   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2022-07-25 00:00:00 \u2502 $ 165.82   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/72827203/180615444-47bcdd54-0693-4415-9617-ed3a571b26c6.png",alt:"tft"})))}f.isMDXComponent=!0}}]);