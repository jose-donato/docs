---
title: bgod
description: Show Breusch-Godfrey autocorrelation test
---
# bgod

## econometrics_regression_view.display_bgod

```python
def bgod(model: pd.DataFrame, lags: int, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_view.py#L146)

Description: Show Breusch-Godfrey autocorrelation test

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| model | OLS Model | Model containing residual values. | None | False |
| lags | int | The amount of lags included. | None | False |
| export | str | Format to export data | None | False |

## Returns

None

## Examples

