---
title: dwat
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# dwat

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.econometrics.regression_model.get_dwat

```python title='openbb_terminal/econometrics/regression_model.py'
def get_dwat(residual: pd.DataFrame) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_model.py#L566)

Description: Calculate test statistics for Durbing Watson autocorrelation

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| residual | OLS Model | Model containing residual values. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| float | Test statistic of the Durbin Watson test. |

## Examples

SDK Snippet:
```python
from openbb_terminal.sdk import openbb
df = openbb.econometrics.load("wage_panel")
Y, X = df["lwage"], df[["exper","educ"]]
model = openbb.econometrics.ols(Y,X)
durbin_watson_value = openbb.econometrics.dwat(model)
```

Result:
```python
0.96
```



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.econometrics.regression_view.display_dwat

```python title='openbb_terminal/econometrics/regression_view.py'
def display_dwat(model: statsmodels.regression.linear_model.RegressionResultsWrapper, dependent_variable: pd.Series, plot: bool, export: str, external_axes: Optional[List[axes]]) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_view.py#L81)

Description: Show Durbin-Watson autocorrelation tests

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| model | OLS Model | A fit statsmodels OLS model. | None | False |
| dependent_variable | pd.Series | The dependent variable for plotting | None | False |
| plot | bool | Whether to plot the residuals | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.axes]] | External axes to plot on | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>