---
title: bgod
description: OpenBB Terminal Function
---

# bgod

Show Breusch-Godfrey autocorrelation test results.Needs OLS to be run in advance with independent and dependent variables

### Usage

```python
usage: bgod [-l LAGS]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| lags | The lags for the Breusch-Godfrey test | 3 | True | None |
---

## Examples

```python
2022 Jun 01, 06:29 (🦋) /econometrics/ $ load longley -a ll

2022 Jun 01, 06:29 (🦋) /econometrics/ $ ols -d ll.totemp -i ll.gnpdefl,ll.gnp,ll.unemp,ll.armed,ll.pop,ll.year
                                 OLS Regression Results                                
=======================================================================================
Dep. Variable:              ll.totemp   R-squared (uncentered):                   1.000
Model:                            OLS   Adj. R-squared (uncentered):              1.000
Method:                 Least Squares   F-statistic:                          5.052e+04
Date:                Wed, 01 Jun 2022   Prob (F-statistic):                    8.20e-22
Time:                        12:29:44   Log-Likelihood:                         -117.56
No. Observations:                  16   AIC:                                      247.1
Df Residuals:                      10   BIC:                                      251.8
Df Model:                           6                                                  
Covariance Type:            nonrobust                                                  
==============================================================================
                 coef    std err          t      P|t|      [0.025      0.975]
------------------------------------------------------------------------------
ll.gnpdefl   -52.9936    129.545     -0.409      0.691    -341.638     235.650
ll.gnp         0.0711      0.030      2.356      0.040       0.004       0.138
ll.unemp      -0.4235      0.418     -1.014      0.335      -1.354       0.507
ll.armed      -0.5726      0.279     -2.052      0.067      -1.194       0.049
ll.pop        -0.4142      0.321     -1.289      0.226      -1.130       0.302
ll.year       48.4179     17.689      2.737      0.021       9.003      87.832
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
kurtosistest only valid for n=20 ... continuing anyway, n=16

2022 Jun 01, 06:29 (🦋) /econometrics/ $ bgod

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
```

---

