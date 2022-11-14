---
title: bpag
description: OpenBB SDK Function
---
# bpag

## econometrics_regression_model.get_bpag

```python
def bpag(model: pd.DataFrame) -> tuple:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_model.py#L517)

Description: Calculate test statistics for heteroscedasticity

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| model | OLS Model | Model containing residual values. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Test results from the Breusch-Pagan Test | None |

## Examples




# VIEW

# bpag

## econometrics_regression_view.display_bpag

```python
def bpag(model: pd.DataFrame, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_view.py#L193)

Description: Show Breusch-Pagan heteroscedasticity test

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| model | OLS Model | Model containing residual values. | None | False |
| export | str | Format to export data | None | False |

## Returns

None

## Examples

