---
title: bpag
description: Calculate test statistics for heteroscedasticity
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

