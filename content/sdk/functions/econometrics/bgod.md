---
title: bgod
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# bgod

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.econometrics.regression_model.get_bgod

```python title='openbb_terminal/econometrics/regression_model.py'
def get_bgod(model: pd.DataFrame, lags: int) -> Tuple
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_model.py#L605)

Description: Calculate test statistics for autocorrelation

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| model | OLS Model | Model containing residual values. | None | False |
| lags | int | The amount of lags. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Test results from the Breusch-Godfrey Test |  |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.econometrics.regression_view.display_bgod

```python title='openbb_terminal/econometrics/regression_view.py'
def display_bgod(model: statsmodels.regression.linear_model.RegressionResultsWrapper, lags: int, export: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_view.py#L141)

Description: Show Breusch-Godfrey autocorrelation test

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| model | OLS Model | OLS model that has been fit. | None | False |
| lags | int | The amount of lags included. | None | False |
| export | str | Format to export data | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>