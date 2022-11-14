---
title: fdols
description: OpenBB SDK Function
---
# fdols

## econometrics_regression_model.get_fdols

```python
def fdols(regression_variables: List[Tuple], data: Dict[str, pd.DataFrame]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_model.py#L379)

Description: First differencing is an alternative to using fixed effects when there might be correlation.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| regression_variables | list | The regressions variables entered where the first variable is
the dependent variable. | None | False |
| data | dict | A dictionary containing the datasets. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| The dataset used, the dependent variable, the independent variable and | None |

## Examples

