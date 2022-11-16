---
title: fdols
description: OpenBB SDK Function
---

# fdols

## openbb_terminal.econometrics.regression_model.get_fdols

```python title='openbb_terminal/econometrics/regression_model.py'
def get_fdols(regression_variables: List[Tuple], data: Dict[str, pd.DataFrame]) -> Tuple
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_model.py#L469)

Description: First differencing is an alternative to using fixed effects when there might be correlation.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| regression_variables | list | The regressions variables entered where the first variable is<br/>the dependent variable. | None | False |
| data | dict | A dictionary containing the datasets. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[DataFrame, Any, List[Any], Any] | The dataset used,<br/>Dependent variable,<br/>Independent variable,<br/>First Difference OLS model |

## Examples

