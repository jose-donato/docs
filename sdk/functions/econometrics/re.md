---
title: re
description: The random effects model is virtually identical to the pooled OLS model except that is accounts for the
---
# re

## econometrics_regression_model.get_re

```python
def re(regression_variables: List[Tuple], data: Dict[str, pd.DataFrame]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_model.py#L239)

Description: The random effects model is virtually identical to the pooled OLS model except that is accounts for the

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

