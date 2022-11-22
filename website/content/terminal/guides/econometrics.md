---
title: Econometrics
keywords: ['econometrics', 'statistics', 'regression', 'panel data', 'time series', 'research', 'thesis', 'university']
excerpt: "The Introduction to Econometrics explains how to use the menu"

---

The Econometrics menu's purpose is to provide the user the ability to perform statistical research on custom datasets. The menu allows the user to load in his/her own dataset(s), modify the data by (for example) adding columns or setting indices, apply statistical tests (e.g. <a href="https://en.wikipedia.org/wiki/Breusch%E2%80%93Godfrey_test" target="_blank">Breusch-Godfrey autocorrelation tests</a>) as well as OLS regressions and Panel regressions (e.g. <a href="https://en.wikipedia.org/wiki/Random_effects_model" target="_blank">Random Effects</a> and <a href="https://en.wikipedia.org/wiki/Fixed_effects_model" target="_blank">Fixed Effects</a>)

### Accessing the Econometrics menu

The Econometrics menu is called upon by typing `econometrics` which opens the following menu:

![Econometrics Menu OpenBB Terminal](https://user-images.githubusercontent.com/46355364/174588406-7f120cf7-933e-4bef-a7f6-ba0c7c7d5028.png)

You have the ability to load in your own custom datasets but there is also the option to use example datasets which are used within this guide as well. These datasets can be found by using the <a href="/terminal/reference/econometrics/load" target="_blank">load</a> command and typing `load --examples`. See below:

```
2022 Jun 20, 04:33 (🦋) /econometrics/ $ load --examples

                            Examples from Statsmodels
┏━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ file name          ┃ description                                               ┃
┡━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┩
│ anes96             │ American National Election Survey 1996                    │
├────────────────────┼───────────────────────────────────────────────────────────┤
│ cancer             │ Breast Cancer Data                                        │
├────────────────────┼───────────────────────────────────────────────────────────┤
│ ccard              │ Bill Greene’s credit scoring data.                        │
├────────────────────┼───────────────────────────────────────────────────────────┤
│ cancer_china       │ Smoking and lung cancer in eight cities in China.         │
├────────────────────┼───────────────────────────────────────────────────────────┤
│ co2                │ Mauna Loa Weekly Atmospheric CO2 Data                     │
├────────────────────┼───────────────────────────────────────────────────────────┤
│ committee          │ First 100 days of the US House of Representatives 1995    │
├────────────────────┼───────────────────────────────────────────────────────────┤
│ copper             │ World Copper Market 1951-1975 Dataset                     │
├────────────────────┼───────────────────────────────────────────────────────────┤
│ cpunish            │ US Capital Punishment dataset.                            │
├────────────────────┼───────────────────────────────────────────────────────────┤
│ danish_data        │ Danish Money Demand Data                                  │
├────────────────────┼───────────────────────────────────────────────────────────┤
│ elnino             │ El Nino - Sea Surface Temperatures                        │
├────────────────────┼───────────────────────────────────────────────────────────┤
│ engel              │ Engel (1857) food expenditure data                        │
├────────────────────┼───────────────────────────────────────────────────────────┤
│ fair               │ Affairs dataset                                           │
├────────────────────┼───────────────────────────────────────────────────────────┤
│ fertility          │ World Bank Fertility Data                                 │
├────────────────────┼───────────────────────────────────────────────────────────┤
│ grunfeld           │ Grunfeld (1950) Investment Data                           │
├────────────────────┼───────────────────────────────────────────────────────────┤
│ heart              │ Transplant Survival Data                                  │
├────────────────────┼───────────────────────────────────────────────────────────┤
│ interest_inflation │ (West) German interest and inflation rate 1972-1998       │
├────────────────────┼───────────────────────────────────────────────────────────┤
│ longley            │ Longley dataset                                           │
├────────────────────┼───────────────────────────────────────────────────────────┤
│ macrodata          │ United States Macroeconomic data                          │
├────────────────────┼───────────────────────────────────────────────────────────┤
│ modechoice         │ Travel Mode Choice                                        │
├────────────────────┼───────────────────────────────────────────────────────────┤
│ nile               │ Nile River flows at Ashwan 1871-1970                      │
├────────────────────┼───────────────────────────────────────────────────────────┤
│ randhie            │ RAND Health Insurance Experiment Data                     │
├────────────────────┼───────────────────────────────────────────────────────────┤
│ scotland           │ Taxation Powers Vote for the Scottish Parliament 1997     │
├────────────────────┼───────────────────────────────────────────────────────────┤
│ spector            │ Spector and Mazzeo (1980) - Program Effectiveness Data    │
├────────────────────┼───────────────────────────────────────────────────────────┤
│ stackloss          │ Stack loss data                                           │
├────────────────────┼───────────────────────────────────────────────────────────┤
│ star98             │ Star98 Educational Dataset                                │
├────────────────────┼───────────────────────────────────────────────────────────┤
│ statecrim          │ Statewide Crime Data 2009                                 │
├────────────────────┼───────────────────────────────────────────────────────────┤
│ strikes            │ U.S. Strike Duration Data                                 │
├────────────────────┼───────────────────────────────────────────────────────────┤
│ sunspots           │ Yearly sunspots data 1700-2008                            │
├────────────────────┼───────────────────────────────────────────────────────────┤
│ wage_panel         │ Veila and M. Verbeek (1998): Whose Wages Do Unions Raise? │
└────────────────────┴───────────────────────────────────────────────────────────┘
```

As there is a clear difference between time series data, which is 1-dimensional data (e.g. a single company over time) and panel data, which is 2-dimensional data (e.g. multiple companies over time) both use-cases are provided.

### Working with Time Series data

To demonstrate the usage of the menu, the <a href="https://www.statsmodels.org/dev/datasets/generated/longley.html" target="_blank">longley</a> dataset is loaded in. This can be done by `load longley` as shown below:

```
2022 Jun 20, 04:36 (🦋) /econometrics/ $ load longley

2022 Jun 20, 04:38 (🦋) /econometrics/ $ ?
╭─────────────────────────────────────────────────────────────────────────────────────────────────── Econometrics ───────────────────────────────────────────────────────────────────────────────────────────────────╮
│                                                                                                                                                                                                                    │
│ Looking for data in:                                                                                                                                                                                               │
│                                                                                                                                                                                                                    │
│         /Users/jeroenbouma/Documents/OpenBB Terminal/custom_imports                                                                                                                                                │
│                                                                                                                                                                                                                    │
│     load               load a dataset (also works with StatsModels datasets)                                                                                                                                       │
│     remove             remove one of the loaded datasets                                                                                                                                                           │
│                                                                                                                                                                                                                    │
│ Loaded files and data columns:                                                                                                                                                                                     │
│   longley : totemp, gnpdefl, gnp, unemp, armed, pop, year                                                                                                                                                          │
│                                                                                                                                                                                                                    │
│ Exploration:                                                                                                                                                                                                       │
│     show               show a portion of a loaded dataset                                                                                                                                                          │
│     plot               plot data from a dataset                                                                                                                                                                    │
│     type               change types of the columns or display their types                                                                                                                                          │
│     desc               show descriptive statistics of a dataset                                                                                                                                                    │
│     index              set (multi) index based on columns                                                                                                                                                          │
│     clean              clean a dataset by filling or dropping NaNs                                                                                                                                                 │
│     add                Add columns to dataset with option to use formulas                                                                                                                                          │
│     delete             Delete columns from dataset                                                                                                                                                                 │
│     combine            Combine columns from different datasets                                                                                                                                                     │
│     rename             Rename column from dataset                                                                                                                                                                  │
│     export             export a processed dataset                                                                                                                                                                  │
│ Tests:                                                                                                                                                                                                             │
│     norm               perform normality tests on a column of a dataset                                                                                                                                            │
│     root               perform unitroot tests (ADF & KPSS) on a column of a dataset                                                                                                                                │
│     granger            Granger causality tests on two columns                                                                                                                                                      │
│     coint              co-integration test on a multitude of columns                                                                                                                                               │
│ Regression:                                                                                                                                                                                                        │
│     ols                fit a (multi) linear regression model                                                                                                                                                       │
│     panel              estimate model based on various regression techniques                                                                                                                                       │
│     compare            compare results of all estimated models                                                                                                                                                     │
│ Regression Tests:                                                                                                                                                                                                  │
│     dwat               Durbin-Watson autocorrelation test on the residuals of the regression                                                                                                                       │
│     bgod               Breusch-Godfrey autocorrelation tests with lags on the residuals of the regression                                                                                                          │
│     bpag               Breusch-Pagan heteroscedasticity test on the residuals of the regression                                                                                                                    │
│                                                                                                                                                                                                                    │
╰─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── OpenBB Terminal v1.3.0 (https://openbb.co) ─╯
```

Beneath `Loaded files and data columns` you can find the longley dataset and its columns. You can create an alias for this dataset with the `-a` argument as shown within the <a href="/terminal/reference/econometrics/ols" target="_blank">ols</a> command. To see a portion of this dataset, the <a href="/terminal/reference/econometrics/show" target="_blank">show</a> command can be used as shown below:

```
2022 Jun 20, 04:38 (🦋) /econometrics/ $ show

                    Dataset longley | Showing 10 of 16 rows
┏━━━┳━━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━┓
┃   ┃ totemp   ┃ gnpdefl ┃ gnp       ┃ unemp   ┃ armed   ┃ pop       ┃ year    ┃
┡━━━╇━━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━┩
│ 0 │ 60323.00 │ 83.00   │ 234289.00 │ 2356.00 │ 1590.00 │ 107608.00 │ 1947.00 │
├───┼──────────┼─────────┼───────────┼─────────┼─────────┼───────────┼─────────┤
│ 1 │ 61122.00 │ 88.50   │ 259426.00 │ 2325.00 │ 1456.00 │ 108632.00 │ 1948.00 │
├───┼──────────┼─────────┼───────────┼─────────┼─────────┼───────────┼─────────┤
│ 2 │ 60171.00 │ 88.20   │ 258054.00 │ 3682.00 │ 1616.00 │ 109773.00 │ 1949.00 │
├───┼──────────┼─────────┼───────────┼─────────┼─────────┼───────────┼─────────┤
│ 3 │ 61187.00 │ 89.50   │ 284599.00 │ 3351.00 │ 1650.00 │ 110929.00 │ 1950.00 │
├───┼──────────┼─────────┼───────────┼─────────┼─────────┼───────────┼─────────┤
│ 4 │ 63221.00 │ 96.20   │ 328975.00 │ 2099.00 │ 3099.00 │ 112075.00 │ 1951.00 │
├───┼──────────┼─────────┼───────────┼─────────┼─────────┼───────────┼─────────┤
│ 5 │ 63639.00 │ 98.10   │ 346999.00 │ 1932.00 │ 3594.00 │ 113270.00 │ 1952.00 │
├───┼──────────┼─────────┼───────────┼─────────┼─────────┼───────────┼─────────┤
│ 6 │ 64989.00 │ 99.00   │ 365385.00 │ 1870.00 │ 3547.00 │ 115094.00 │ 1953.00 │
├───┼──────────┼─────────┼───────────┼─────────┼─────────┼───────────┼─────────┤
│ 7 │ 63761.00 │ 100.00  │ 363112.00 │ 3578.00 │ 3350.00 │ 116219.00 │ 1954.00 │
├───┼──────────┼─────────┼───────────┼─────────┼─────────┼───────────┼─────────┤
│ 8 │ 66019.00 │ 101.20  │ 397469.00 │ 2904.00 │ 3048.00 │ 117388.00 │ 1955.00 │
├───┼──────────┼─────────┼───────────┼─────────┼─────────┼───────────┼─────────┤
│ 9 │ 67857.00 │ 104.60  │ 419180.00 │ 2822.00 │ 2857.00 │ 118734.00 │ 1956.00 │
└───┴──────────┴─────────┴───────────┴─────────┴─────────┴───────────┴─────────┘
```

This can be extended by also showing the descriptive statistics, this can be done with the <a href="/terminal/reference/econometrics/desc" target="_blank">desc</a> command and including the `longley` dataset. This command also allows descriptive statistics for individual columns to be displayed (e.g. `desc longley.totemp`)

```
2022 Jun 20, 04:44 (🦋) /econometrics/ $ desc longley

                         Statistics for dataset: 'longley'
┏━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━┓
┃       ┃ totemp   ┃ gnpdefl ┃ gnp       ┃ unemp   ┃ armed   ┃ pop       ┃ year    ┃
┡━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━┩
│ count │ 16.00    │ 16.00   │ 16.00     │ 16.00   │ 16.00   │ 16.00     │ 16.00   │
├───────┼──────────┼─────────┼───────────┼─────────┼─────────┼───────────┼─────────┤
│ mean  │ 65317.00 │ 101.68  │ 387698.44 │ 3193.31 │ 2606.69 │ 117424.00 │ 1954.50 │
├───────┼──────────┼─────────┼───────────┼─────────┼─────────┼───────────┼─────────┤
│ std   │ 3511.97  │ 10.79   │ 99394.94  │ 934.46  │ 695.92  │ 6956.10   │ 4.76    │
├───────┼──────────┼─────────┼───────────┼─────────┼─────────┼───────────┼─────────┤
│ min   │ 60171.00 │ 83.00   │ 234289.00 │ 1870.00 │ 1456.00 │ 107608.00 │ 1947.00 │
├───────┼──────────┼─────────┼───────────┼─────────┼─────────┼───────────┼─────────┤
│ 25%   │ 62712.50 │ 94.53   │ 317881.00 │ 2348.25 │ 2298.00 │ 111788.50 │ 1950.75 │
├───────┼──────────┼─────────┼───────────┼─────────┼─────────┼───────────┼─────────┤
│ 50%   │ 65504.00 │ 100.60  │ 381427.00 │ 3143.50 │ 2717.50 │ 116803.50 │ 1954.50 │
├───────┼──────────┼─────────┼───────────┼─────────┼─────────┼───────────┼─────────┤
│ 75%   │ 68290.50 │ 111.25  │ 454085.50 │ 3842.50 │ 3060.75 │ 122304.00 │ 1958.25 │
├───────┼──────────┼─────────┼───────────┼─────────┼─────────┼───────────┼─────────┤
│ max   │ 70551.00 │ 116.90  │ 554894.00 │ 4806.00 │ 3594.00 │ 130081.00 │ 1962.00 │
└───────┴──────────┴─────────┴───────────┴─────────┴─────────┴───────────┴─────────┘
```

It is possible to check for a variety of assumptions, e.g. normality, unit root, granger and co-integration. The commands `norm` and `root` are shown below. Note that due to the small size of the dataset, many of these tests are not statistically significant.

```
2022 Jun 20, 04:49 (🦋) /econometrics/ $ norm longley.gnp

                   Normality test from dataset 'longley' of 'gnp'
┏━━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━━━━┳━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━┓
┃           ┃ Kurtosis ┃ Skewness ┃ Jarque-Bera ┃ Shapiro-Wilk ┃ Kolmogorov-Smirnov ┃
┡━━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━┩
│ Statistic │ -1.19    │ 0.05     │ 0.84        │ 0.96         │ 1.00               │
├───────────┼──────────┼──────────┼─────────────┼──────────────┼────────────────────┤
│ p-value   │ 0.23     │ 0.96     │ 0.66        │ 0.71         │ 0.00               │
└───────────┴──────────┴──────────┴─────────────┴──────────────┴────────────────────┘


2022 Jun 20, 04:49 (🦋) /econometrics/ $ root longley.pop

Unitroot from dataset 'longley of 'pop'
┏━━━━━━━━━━━━━━━━┳━━━━━━━━┳━━━━━━┓
┃                ┃ ADF    ┃ KPSS ┃
┡━━━━━━━━━━━━━━━━╇━━━━━━━━╇━━━━━━┩
│ Test Statistic │ 2.35   │ 0.64 │
├────────────────┼────────┼──────┤
│ P-Value        │ 1.00   │ 0.02 │
├────────────────┼────────┼──────┤
│ NLags          │ 6.00   │ 2.00 │
├────────────────┼────────┼──────┤
│ Nobs           │ 9.00   │ 0.00 │
├────────────────┼────────┼──────┤
│ ICBest         │ 113.05 │ 0.00 │
└────────────────┴────────┴──────┘
```

The longley dataset is known for the ability to create an OLS regression that results in a <a href="https://www.investopedia.com/terms/r/r-squared.asp" target="_blank">R-squared</a> of 1.0 due to the fact that the US macroeconomic variables are known to be highly collinear. See the following regression performed with the <a href="/terminal/reference/econometrics/ols" target="_blank">ols</a> command:

```
2022 Jun 20, 04:56 (🦋) /econometrics/ $ ols -d longley.totemp -i longley.gnpdefl,longley.gnp,longley.unemp,longley.armed,longley.pop,longley.year
                                 OLS Regression Results
=======================================================================================
Dep. Variable:         longley.totemp   R-squared (uncentered):                   1.000
Model:                            OLS   Adj. R-squared (uncentered):              1.000
Method:                 Least Squares   F-statistic:                          5.052e+04
Date:                Mon, 20 Jun 2022   Prob (F-statistic):                    8.20e-22
Time:                        10:56:10   Log-Likelihood:                         -117.56
No. Observations:                  16   AIC:                                      247.1
Df Residuals:                      10   BIC:                                      251.8
Df Model:                           6
Covariance Type:            nonrobust
===================================================================================
                      coef    std err          t      P>|t|      [0.025      0.975]
-----------------------------------------------------------------------------------
longley.gnpdefl   -52.9936    129.545     -0.409      0.691    -341.638     235.650
longley.gnp         0.0711      0.030      2.356      0.040       0.004       0.138
longley.unemp      -0.4235      0.418     -1.014      0.335      -1.354       0.507
longley.armed      -0.5726      0.279     -2.052      0.067      -1.194       0.049
longley.pop        -0.4142      0.321     -1.289      0.226      -1.130       0.302
longley.year       48.4179     17.689      2.737      0.021       9.003      87.832
==============================================================================
Omnibus:                        1.443   Durbin-Watson:                   1.277
Prob(Omnibus):                  0.486   Jarque-Bera (JB):                0.605
Skew:                           0.476   Prob(JB):                        0.739
Kurtosis:                       3.031   Cond. No.                     4.56e+05
==============================================================================

Notes:
[1] R² is computed without centering (uncentered) since the model does not contain a constant.
[2] Standard Errors assume that the covariance matrix of the errors is correctly specified.
[3] The condition number is large, 4.56e+05. This might indicate that there are
strong multicollinearity or other numerical problems.

Warnings:
kurtosistest only valid for n>=20 ... continuing anyway, n=16
```

The argument `-d` refers to the dependent variable, in this example `longley.totemp`, and the argument `-i` refers to the independent variables, in this example this is `longley.gnpdefl,longley.gnp,longley.unemp,longley.armed,longley.pop,longley.year`.

After running the regression estimation, it is possible to perform tests on the residuals of the model. E.g. for autocorrelation and heteroscedasity as shown below with the <a href="/terminal/reference/econometrics/bgod" target="_blank">bgod</a> and <a href="/terminal/reference/econometrics/bpag" target="_blank">bpag</a> commands.

```
2022 Jun 20, 05:00 (🦋) /econometrics/ $ bgod

Breusch-Godfrey autocorrelation test [Lags: 3]
┏━━━━━━━━━━┳━━━━━━━━━━━━━━━━━┓
┃          ┃ Breusch-Godfrey ┃
┡━━━━━━━━━━╇━━━━━━━━━━━━━━━━━┩
│ LM-stat  │ 10.35           │
├──────────┼─────────────────┤
│ p-value  │ 0.02            │
├──────────┼─────────────────┤
│ f-stat   │ 0.10            │
├──────────┼─────────────────┤
│ fp-value │ 0.96            │
└──────────┴─────────────────┘

The result 0.02 indicates no existence of autocorrelation.

2022 Jun 20, 05:00 (🦋) /econometrics/ $ bpag

Breusch-Pagan heteroscedasticity test
┏━━━━━━━━━━┳━━━━━━━━━━━━━━━┓
┃          ┃ Breusch-Pagan ┃
┡━━━━━━━━━━╇━━━━━━━━━━━━━━━┩
│ lm-stat  │ 7.90          │
├──────────┼───────────────┤
│ p-value  │ 0.16          │
├──────────┼───────────────┤
│ f-stat   │ 1.63          │
├──────────┼───────────────┤
│ fp-value │ 0.24          │
└──────────┴───────────────┘

The result 0.16 indicates the existence of heteroscedasticity. Consider taking the log or a rate for the dependent variable.
```

### Working with Panel data

Within the examples of `load --examples` there is one panel dataset available named `wage_panel`. This is a dataset from the paper by Vella and M. Verbeek (1998), “Whose Wages Do Unions Raise? A Dynamic Model of Unionism and Wage Rate Determination for Young Men,” Journal of Applied Econometrics 13, 163-183. This is a well-known dataset also used within Chapter 14 of <a href="https://www.amazon.com/Introductory-Econometrics-Modern-Approach-Economics/dp/1111531048" target="_blank">Introduction to Econometrics by Jeffrey Wooldridge</a>.

Here, the dataset is loaded in and an alias is used by using the `-a` argument. The available columns are displayed under `Loaded files and data columns`.

```
2022 Jun 20, 05:13 (🦋) /econometrics/ $ load wage_panel -a wp

2022 Jun 20, 05:13 (🦋) /econometrics/ $ ?
╭─────────────────────────────────────────────────────────────────────────────────────────────────── Econometrics ───────────────────────────────────────────────────────────────────────────────────────────────────╮
│                                                                                                                                                                                                                    │
│ Looking for data in:                                                                                                                                                                                               │
│                                                                                                                                                                                                                    │
│         /Users/jeroenbouma/Documents/OpenBB Terminal/custom_imports                                                                                                                                                │
│                                                                                                                                                                                                                    │
│     load               load a dataset (also works with StatsModels datasets)                                                                                                                                       │
│     remove             remove one of the loaded datasets                                                                                                                                                           │
│                                                                                                                                                                                                                    │
│ Loaded files and data columns:                                                                                                                                                                                     │
│   wp : nr, year, black, exper, hisp, hours, married, educ, union, lwage, expersq, occupation                                                                                                                       │
│                                                                                                                                                                                                                    │
│ Exploration:                                                                                                                                                                                                       │
│     show               show a portion of a loaded dataset                                                                                                                                                          │
│     plot               plot data from a dataset                                                                                                                                                                    │
│     type               change types of the columns or display their types                                                                                                                                          │
│     desc               show descriptive statistics of a dataset                                                                                                                                                    │
│     index              set (multi) index based on columns                                                                                                                                                          │
│     clean              clean a dataset by filling or dropping NaNs                                                                                                                                                 │
│     add                Add columns to dataset with option to use formulas                                                                                                                                          │
│     delete             Delete columns from dataset                                                                                                                                                                 │
│     combine            Combine columns from different datasets                                                                                                                                                     │
│     rename             Rename column from dataset                                                                                                                                                                  │
│     export             export a processed dataset                                                                                                                                                                  │
│ Tests:                                                                                                                                                                                                             │
│     norm               perform normality tests on a column of a dataset                                                                                                                                            │
│     root               perform unitroot tests (ADF & KPSS) on a column of a dataset                                                                                                                                │
│     granger            Granger causality tests on two columns                                                                                                                                                      │
│     coint              co-integration test on a multitude of columns                                                                                                                                               │
│ Regression:                                                                                                                                                                                                        │
│     ols                fit a (multi) linear regression model                                                                                                                                                       │
│     panel              estimate model based on various regression techniques                                                                                                                                       │
│     compare            compare results of all estimated models                                                                                                                                                     │
│ Regression Tests:                                                                                                                                                                                                  │
│     dwat               Durbin-Watson autocorrelation test on the residuals of the regression                                                                                                                       │
│     bgod               Breusch-Godfrey autocorrelation tests with lags on the residuals of the regression                                                                                                          │
│     bpag               Breusch-Pagan heteroscedasticity test on the residuals of the regression                                                                                                                    │
│                                                                                                                                                                                                                    │
╰─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── OpenBB Terminal v1.3.0 (https://openbb.co) ─╯
```

To run panel regressions with <a href="/terminal/reference/econometrics/panel" target="_blank">panel</a> it is important to define both _entity_ (e.g. company) and _time_ (e.g. year). Trying to run the `panel` command would right now result in the following:

```
2022 Jun 20, 05:17 (🦋) /econometrics/ $ panel -d wp.lwage -i wp.black,wp.hisp,wp.exper,wp.expersq,wp.married,wp.educ,wp.union,wp.year
The column 'lwage' from the dataset 'wp' is not a MultiIndex. Make sure you set the index correctly with the index (e.g. index wp -i lwage,nr) command where the first level is the entity (e.g. Tesla Inc.) and the second level the date (e.g. 2021-03-31)
```

To see the effect of defining a `MultiIndex`, first a portion of the data is shown with the <a href="/terminal/reference/econometrics/show" target="_blank">show</a> command as seen below:

```
2022 Jun 20, 05:22 (🦋) /econometrics/ $ show

                                      Dataset wp | Showing 10 of 4360 rows
┏━━━┳━━━━━━━┳━━━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━┳━━━━━━━━━┳━━━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━━━┳━━━━━━━━━━━━┓
┃   ┃ nr    ┃ year    ┃ black ┃ exper ┃ hisp ┃ hours   ┃ married ┃ educ  ┃ union ┃ lwage ┃ expersq ┃ occupation ┃
┡━━━╇━━━━━━━╇━━━━━━━━━╇━━━━━━━╇━━━━━━━╇━━━━━━╇━━━━━━━━━╇━━━━━━━━━╇━━━━━━━╇━━━━━━━╇━━━━━━━╇━━━━━━━━━╇━━━━━━━━━━━━┩
│ 0 │ 13.00 │ 1980.00 │ 0.00  │ 1.00  │ 0.00 │ 2672.00 │ 0.00    │ 14.00 │ 0.00  │ 1.20  │ 1.00    │ 9.00       │
├───┼───────┼─────────┼───────┼───────┼──────┼─────────┼─────────┼───────┼───────┼───────┼─────────┼────────────┤
│ 1 │ 13.00 │ 1981.00 │ 0.00  │ 2.00  │ 0.00 │ 2320.00 │ 0.00    │ 14.00 │ 1.00  │ 1.85  │ 4.00    │ 9.00       │
├───┼───────┼─────────┼───────┼───────┼──────┼─────────┼─────────┼───────┼───────┼───────┼─────────┼────────────┤
│ 2 │ 13.00 │ 1982.00 │ 0.00  │ 3.00  │ 0.00 │ 2940.00 │ 0.00    │ 14.00 │ 0.00  │ 1.34  │ 9.00    │ 9.00       │
├───┼───────┼─────────┼───────┼───────┼──────┼─────────┼─────────┼───────┼───────┼───────┼─────────┼────────────┤
│ 3 │ 13.00 │ 1983.00 │ 0.00  │ 4.00  │ 0.00 │ 2960.00 │ 0.00    │ 14.00 │ 0.00  │ 1.43  │ 16.00   │ 9.00       │
├───┼───────┼─────────┼───────┼───────┼──────┼─────────┼─────────┼───────┼───────┼───────┼─────────┼────────────┤
│ 4 │ 13.00 │ 1984.00 │ 0.00  │ 5.00  │ 0.00 │ 3071.00 │ 0.00    │ 14.00 │ 0.00  │ 1.57  │ 25.00   │ 5.00       │
├───┼───────┼─────────┼───────┼───────┼──────┼─────────┼─────────┼───────┼───────┼───────┼─────────┼────────────┤
│ 5 │ 13.00 │ 1985.00 │ 0.00  │ 6.00  │ 0.00 │ 2864.00 │ 0.00    │ 14.00 │ 0.00  │ 1.70  │ 36.00   │ 2.00       │
├───┼───────┼─────────┼───────┼───────┼──────┼─────────┼─────────┼───────┼───────┼───────┼─────────┼────────────┤
│ 6 │ 13.00 │ 1986.00 │ 0.00  │ 7.00  │ 0.00 │ 2994.00 │ 0.00    │ 14.00 │ 0.00  │ -0.72 │ 49.00   │ 2.00       │
├───┼───────┼─────────┼───────┼───────┼──────┼─────────┼─────────┼───────┼───────┼───────┼─────────┼────────────┤
│ 7 │ 13.00 │ 1987.00 │ 0.00  │ 8.00  │ 0.00 │ 2640.00 │ 0.00    │ 14.00 │ 0.00  │ 1.67  │ 64.00   │ 2.00       │
├───┼───────┼─────────┼───────┼───────┼──────┼─────────┼─────────┼───────┼───────┼───────┼─────────┼────────────┤
│ 8 │ 17.00 │ 1980.00 │ 0.00  │ 4.00  │ 0.00 │ 2484.00 │ 0.00    │ 13.00 │ 0.00  │ 1.68  │ 16.00   │ 2.00       │
├───┼───────┼─────────┼───────┼───────┼──────┼─────────┼─────────┼───────┼───────┼───────┼─────────┼────────────┤
│ 9 │ 17.00 │ 1981.00 │ 0.00  │ 5.00  │ 0.00 │ 2804.00 │ 0.00    │ 13.00 │ 0.00  │ 1.52  │ 25.00   │ 2.00       │
└───┴───────┴─────────┴───────┴───────┴──────┴─────────┴─────────┴───────┴───────┴───────┴─────────┴────────────┘
```

Within this dataset the `nr` and `year` columns define the _entity_ and _time_. To allow panel regression estimations, it is important that this is defined accordingly with the <a href="/terminal/reference/econometrics/index_cmd" target="_blank">index</a> command. This can be done with the following (and showing the changed dataset afterwards):

```
2022 Jun 20, 05:22 (🦋) /econometrics/ $ index wp -i nr,year
Successfully updated 'wp' index to be 'nr, year'

2022 Jun 20, 05:27 (🦋) /econometrics/ $ show

                                           Dataset wp | Showing 10 of 4360 rows
┏━━━━━━━━━━━━┳━━━━━━━┳━━━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━┳━━━━━━━━━┳━━━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━┳━━━━━━━━━┳━━━━━━━━━━━━┓
┃            ┃ nr    ┃ year    ┃ black ┃ exper ┃ hisp ┃ hours   ┃ married ┃ educ  ┃ union ┃ lwage ┃ expersq ┃ occupation ┃
┡━━━━━━━━━━━━╇━━━━━━━╇━━━━━━━━━╇━━━━━━━╇━━━━━━━╇━━━━━━╇━━━━━━━━━╇━━━━━━━━━╇━━━━━━━╇━━━━━━━╇━━━━━━━╇━━━━━━━━━╇━━━━━━━━━━━━┩
│ (13, 1980) │ 13.00 │ 1980.00 │ 0.00  │ 1.00  │ 0.00 │ 2672.00 │ 0.00    │ 14.00 │ 0.00  │ 1.20  │ 1.00    │ 9.00       │
├────────────┼───────┼─────────┼───────┼───────┼──────┼─────────┼─────────┼───────┼───────┼───────┼─────────┼────────────┤
│ (13, 1981) │ 13.00 │ 1981.00 │ 0.00  │ 2.00  │ 0.00 │ 2320.00 │ 0.00    │ 14.00 │ 1.00  │ 1.85  │ 4.00    │ 9.00       │
├────────────┼───────┼─────────┼───────┼───────┼──────┼─────────┼─────────┼───────┼───────┼───────┼─────────┼────────────┤
│ (13, 1982) │ 13.00 │ 1982.00 │ 0.00  │ 3.00  │ 0.00 │ 2940.00 │ 0.00    │ 14.00 │ 0.00  │ 1.34  │ 9.00    │ 9.00       │
├────────────┼───────┼─────────┼───────┼───────┼──────┼─────────┼─────────┼───────┼───────┼───────┼─────────┼────────────┤
│ (13, 1983) │ 13.00 │ 1983.00 │ 0.00  │ 4.00  │ 0.00 │ 2960.00 │ 0.00    │ 14.00 │ 0.00  │ 1.43  │ 16.00   │ 9.00       │
├────────────┼───────┼─────────┼───────┼───────┼──────┼─────────┼─────────┼───────┼───────┼───────┼─────────┼────────────┤
│ (13, 1984) │ 13.00 │ 1984.00 │ 0.00  │ 5.00  │ 0.00 │ 3071.00 │ 0.00    │ 14.00 │ 0.00  │ 1.57  │ 25.00   │ 5.00       │
├────────────┼───────┼─────────┼───────┼───────┼──────┼─────────┼─────────┼───────┼───────┼───────┼─────────┼────────────┤
│ (13, 1985) │ 13.00 │ 1985.00 │ 0.00  │ 6.00  │ 0.00 │ 2864.00 │ 0.00    │ 14.00 │ 0.00  │ 1.70  │ 36.00   │ 2.00       │
├────────────┼───────┼─────────┼───────┼───────┼──────┼─────────┼─────────┼───────┼───────┼───────┼─────────┼────────────┤
│ (13, 1986) │ 13.00 │ 1986.00 │ 0.00  │ 7.00  │ 0.00 │ 2994.00 │ 0.00    │ 14.00 │ 0.00  │ -0.72 │ 49.00   │ 2.00       │
├────────────┼───────┼─────────┼───────┼───────┼──────┼─────────┼─────────┼───────┼───────┼───────┼─────────┼────────────┤
│ (13, 1987) │ 13.00 │ 1987.00 │ 0.00  │ 8.00  │ 0.00 │ 2640.00 │ 0.00    │ 14.00 │ 0.00  │ 1.67  │ 64.00   │ 2.00       │
├────────────┼───────┼─────────┼───────┼───────┼──────┼─────────┼─────────┼───────┼───────┼───────┼─────────┼────────────┤
│ (17, 1980) │ 17.00 │ 1980.00 │ 0.00  │ 4.00  │ 0.00 │ 2484.00 │ 0.00    │ 13.00 │ 0.00  │ 1.68  │ 16.00   │ 2.00       │
├────────────┼───────┼─────────┼───────┼───────┼──────┼─────────┼─────────┼───────┼───────┼───────┼─────────┼────────────┤
│ (17, 1981) │ 17.00 │ 1981.00 │ 0.00  │ 5.00  │ 0.00 │ 2804.00 │ 0.00    │ 13.00 │ 0.00  │ 1.52  │ 25.00   │ 2.00       │
└────────────┴───────┴─────────┴───────┴───────┴──────┴─────────┴─────────┴───────┴───────┴───────┴─────────┴────────────┘
```

The columns `nr` and `year` still exists within the dataset and could have been dropped with the `-d` argument if desired. However, in this case the `year` column is relevant for generating time effects in Pooled OLS, Fixed Effects and Random Effects estimations. To be able to do this, the type of the year column needs to be changed accordingly. The type of the columns can be displayed with the <a href="/terminal/reference/econometrics/type" target="_blank">type</a> command as follows:

```
2022 Jun 20, 05:27 (🦋) /econometrics/ $ type wp

           wp
┏━━━━━━━━━━━━┳━━━━━━━━━┓
┃ column     ┃ dtype   ┃
┡━━━━━━━━━━━━╇━━━━━━━━━┩
│ nr         │ int64   │
├────────────┼─────────┤
│ year       │ int64   │
├────────────┼─────────┤
│ black      │ int64   │
├────────────┼─────────┤
│ exper      │ int64   │
├────────────┼─────────┤
│ hisp       │ int64   │
├────────────┼─────────┤
│ hours      │ int64   │
├────────────┼─────────┤
│ married    │ int64   │
├────────────┼─────────┤
│ educ       │ int64   │
├────────────┼─────────┤
│ union      │ int64   │
├────────────┼─────────┤
│ lwage      │ float64 │
├────────────┼─────────┤
│ expersq    │ int64   │
├────────────┼─────────┤
│ occupation │ int64   │
└────────────┴─────────┘
```

The dtype `int64` refers to numbers without decimals (e.g. 1, 2, 3) while the dtype `float64` refers to numbers _with_ decimals (e.g. 1.5, 10.23, 0.01). There are a few options within the `type` command:

- `int`: refers to integers, the same as `int64`.
- `float`: refers to floats, the same as `float64`.
- `str`: refers to words, e.g. 'New York'.
- `bool`: refers to booleans, these are either `True` or `False`, commonly
  depicted as 1 or 0 respectively and often also referred to as dummy variables.
- `category`: refers to categorical data, usually a limited selection of
  variables e.g. a list of countries or years.
- `date`: refers to dates and converts the relevant column to dates.

For the panel regressions, it can be beneficial to see time effects from `year`. Therefore, the type of the `year` column should be altered to `category`. This can be done with the following command:

```
2022 Jun 20, 05:33 (🦋) /econometrics/ $ type wp.year --format category
Update 'wp.year' with type 'category'

2022 Jun 20, 05:40 (🦋) /econometrics/ $ type

           wp
┏━━━━━━━━━━━━┳━━━━━━━━━━┓
┃ column     ┃ dtype    ┃
┡━━━━━━━━━━━━╇━━━━━━━━━━┩
│ nr         │ int64    │
├────────────┼──────────┤
│ year       │ category │
├────────────┼──────────┤
│ black      │ int64    │
├────────────┼──────────┤
│ exper      │ int64    │
├────────────┼──────────┤
│ hisp       │ int64    │
├────────────┼──────────┤
│ hours      │ int64    │
├────────────┼──────────┤
│ married    │ int64    │
├────────────┼──────────┤
│ educ       │ int64    │
├────────────┼──────────┤
│ union      │ int64    │
├────────────┼──────────┤
│ lwage      │ float64  │
├────────────┼──────────┤
│ expersq    │ int64    │
├────────────┼──────────┤
│ occupation │ int64    │
└────────────┴──────────┘
```

The dataset is now properly configured to allow for proper panel regressions. This can be done with the <a href="/terminal/reference/econometrics/panel" target="_blank">panel</a> command. On the panel page all regressions are performed that are available within the OpenBB Terminal. This can be either:

- `-r pols` (Pooled OLS)
- `-r re` (Random Effects)
- `-r bols` (Between OLS)
- `-r fe` (Fixed Effects)
- `-r fdols` (First Difference OLS).

As an example, a **Random Effects** regression is performed. Here, the column after the `-d` argument refers to the dependent variable and the columns after the `-i` argument refer to the independent variables.

```
2022 Jun 20, 05:51 (🦋) /econometrics/ $ panel -d wp.lwage -i wp.black,wp.hisp,wp.exper,wp.expersq,wp.married,wp.educ,wp.union,wp.year -r re


                        RandomEffects Estimation Summary
================================================================================
Dep. Variable:               wp.lwage   R-squared:                        0.1806
Estimator:              RandomEffects   R-squared (Between):              0.1853
No. Observations:                4360   R-squared (Within):               0.1799
Date:                Mon, Jun 20 2022   R-squared (Overall):              0.1828
Time:                        11:52:47   Log-likelihood                   -1622.5
Cov. Estimator:            Unadjusted
                                        F-statistic:                      68.409
Entities:                         545   P-value                           0.0000
Avg Obs:                       8.0000   Distribution:                 F(14,4345)
Min Obs:                       8.0000
Max Obs:                       8.0000   F-statistic (robust):             68.409
                                        P-value                           0.0000
Time periods:                       8   Distribution:                 F(14,4345)
Avg Obs:                       545.00
Min Obs:                       545.00
Max Obs:                       545.00

                              Parameter Estimates
================================================================================
              Parameter  Std. Err.     T-stat    P-value    Lower CI    Upper CI
--------------------------------------------------------------------------------
const            0.0234     0.1514     0.1546     0.8771     -0.2735      0.3203
wp.black        -0.1394     0.0480    -2.9054     0.0037     -0.2334     -0.0453
wp.hisp          0.0217     0.0428     0.5078     0.6116     -0.0622      0.1057
wp.exper         0.1058     0.0154     6.8706     0.0000      0.0756      0.1361
wp.expersq      -0.0047     0.0007    -6.8623     0.0000     -0.0061     -0.0034
wp.married       0.0638     0.0168     3.8035     0.0001      0.0309      0.0967
wp.educ          0.0919     0.0107     8.5744     0.0000      0.0709      0.1129
wp.union         0.1059     0.0179     5.9289     0.0000      0.0709      0.1409
wp.year.1981     0.0404     0.0247     1.6362     0.1019     -0.0080      0.0889
wp.year.1982     0.0309     0.0324     0.9519     0.3412     -0.0327      0.0944
wp.year.1983     0.0202     0.0417     0.4840     0.6284     -0.0616      0.1020
wp.year.1984     0.0430     0.0515     0.8350     0.4037     -0.0580      0.1440
wp.year.1985     0.0577     0.0615     0.9383     0.3482     -0.0629      0.1782
wp.year.1986     0.0918     0.0716     1.2834     0.1994     -0.0485      0.2321
wp.year.1987     0.1348     0.0817     1.6504     0.0989     -0.0253      0.2950
================================================================================
```

### Scripts & Routines

Doing research both as a student or professor for a university or as a professional often requires the findings to be easily replicated. Furthermore, as many steps could be required it can be very beneficial to have the ability to make small adjustments without needing to re-do every single step again. This is where `.openbb` files play an important role.

By going to the main menu as depicted below, the `exe` command can be used. With this command you can run `.openbb` scripts that automatically run a set of commands similarly to that of the Stata do-files and SPSS syntax files. These scripts are located where the application is located inside the `routines` folder.

![Econometrics Menu Routine Exe OpenBB Terminal](https://user-images.githubusercontent.com/46355364/174588513-5c52ea20-548a-4c2b-a4c1-6054e2d71786.png)

This demo file has the following contents:

```txt
# Go into the econometrics context
econometrics

# Load the wage_panel dataset and include an alias
load wage_panel -a wp

# Set the MultiIndex, allowing for Panel regressions to be performed
index wp -i nr,year

# Change the type of the year column so it can be included as time effects within the regressions
type wp.year --format category

# Perform a Pooled OLS, Random Effects and Fixed Effects estimation
panel -d wp.lwage -i wp.black,wp.hisp,wp.exper,wp.expersq,wp.married,wp.educ,wp.union,wp.year
panel -d wp.lwage -i wp.black,wp.hisp,wp.exper,wp.expersq,wp.married,wp.educ,wp.union,wp.year -r re
panel -d wp.lwage -i wp.expersq,wp.union,wp.married,wp.year -r fe

# Compare the results obtained from these regressions
compare
```

Everything after the `#` _on the same line_ refers to comments and will not be executed. All other commands will be. This ultimately leads to a comparison of three models and takes less than a few seconds to execute. See below for the comparison result, obtained via the <a href="/terminal/reference/econometrics/compare" target="_blank">compare</a> command:

```txt
022 Jun 20, 06:52 (🦋) /econometrics/ $ compare
                        Model Comparison
===============================================================
                              POLS              RE           FE
---------------------------------------------------------------
Dep. Variable             wp.lwage        wp.lwage     wp.lwage
Estimator                PooledOLS   RandomEffects     PanelOLS
No. Observations              4360            4360         4360
Cov. Est.               Unadjusted      Unadjusted   Unadjusted
R-squared                   0.1893          0.1806       0.1246
R-Squared (Within)          0.1692          0.1799       0.1646
R-Squared (Between)         0.2066          0.1853       0.0902
R-Squared (Overall)         0.1893          0.1828       0.1246
F-statistic                 72.459          68.409       61.920
P-value (F-stat)            0.0000          0.0000       0.0000
===================== ============ =============== ============
const                       0.0921          0.0234       1.3454
                          (1.1761)        (0.1546)     (60.606)
wp.black                   -0.1392         -0.1394
                         (-5.9049)       (-2.9054)
wp.hisp                     0.0160          0.0217
                          (0.7703)        (0.5078)
wp.exper                    0.0672          0.1058
                          (4.9095)        (6.8706)
wp.expersq                 -0.0024         -0.0047      -0.0021
                         (-2.9413)       (-6.8623)    (-7.5081)
wp.married                  0.1083          0.0638       0.1521
                          (6.8997)        (3.8035)     (9.5417)
wp.educ                     0.0913          0.0919
                          (17.442)        (8.5744)
wp.union                    0.1825          0.1059       0.1768
                          (10.635)        (5.9289)     (10.032)
wp.year.1981                0.0583          0.0404       0.1187
                          (1.9214)        (1.6362)     (3.9144)
wp.year.1982                0.0628          0.0309       0.1843
                          (1.8900)        (0.9519)     (6.0168)
wp.year.1983                0.0620          0.0202       0.2431
                          (1.6915)        (0.4840)     (7.7581)
wp.year.1984                0.0905          0.0430       0.3322
                          (2.2566)        (0.8350)     (10.236)
wp.year.1985                0.1092          0.0577       0.4112
                          (2.5200)        (0.9383)     (12.048)
wp.year.1986                0.1420          0.0918       0.5039
                          (3.0580)        (1.2834)     (13.806)
wp.year.1987                0.1738          0.1348       0.5952
                          (3.5165)        (1.6504)     (15.026)
---------------------------------------------------------------

T-stats reported in parentheses
```