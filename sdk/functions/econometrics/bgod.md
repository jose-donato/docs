---
title: bgod
description: Calculate test statistics for autocorrelation
---
# bgod

## econometrics_regression_model.get_bgod

```python
def bgod(model: pd.DataFrame, lags: int) -> tuple:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_model.py#L496)

Description: Calculate test statistics for autocorrelation

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| model | OLS Model | Model containing residual values. | None | False |
| lags | int | The amount of lags. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Test results from the Breusch-Godfrey Test | None |

## Examples

