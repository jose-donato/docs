---
title: bgod
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# bgod

<Tabs>
<TabItem value="model" label="Model" default>

Calculate test statistics for autocorrelation

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_model.py#L536)

```python
def get_bgod(model: pd.DataFrame, lags: int) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| model | OLS Model | OLS model that has been fit. | None | False |
| lags | int | The amount of lags. | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Test results from the Breusch-Godfrey Test |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Show Breusch-Godfrey autocorrelation test

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_view.py#L141)

```python
def display_bgod(model: statsmodels.regression.linear_model.RegressionResultsWrapper, lags: int, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| model | OLS Model | OLS model that has been fit. | None | False |
| lags | int | The amount of lags included. | None | False |
| export | str | Format to export data | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>