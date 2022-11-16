---
title: bols
description: OpenBB SDK Function
---

# bols

## openbb_terminal.econometrics.regression_model.get_bols

```python title='openbb_terminal/econometrics/regression_model.py'
def get_bols(regression_variables: List[Tuple], data: Dict[str, pd.DataFrame]) -> Tuple
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_model.py#L366)

Description: The between estimator is an alternative, usually less efficient estimator, can can be used to

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| regression_variables | list | The regressions variables entered where the first variable is<br/>the dependent variable. | None | False |
| data | dict | A dictionary containing the datasets. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[DataFrame, Any, List[Any], Any] | The dataset used,<br/>Dependent variable,<br/>Independent variable,<br/>Between OLS model. |

## Examples

