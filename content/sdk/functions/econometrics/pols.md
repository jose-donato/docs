---
title: pols
description: OpenBB SDK Function
---

# pols

## openbb_terminal.econometrics.regression_model.get_pols

```python title='openbb_terminal/econometrics/regression_model.py'
def get_pols(regression_variables: List[Tuple], data: Dict[str, pd.DataFrame]) -> Tuple
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_model.py#L275)

Description: PooledOLS is just plain OLS that understands that various panel data structures.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| regression_variables | list | The regressions variables entered where the first variable is<br/>the dependent variable. | None | False |
| data | dict | A dictionary containing the datasets. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[DataFrame, Any, List[Any], Any] | The dataset used,<br/>Dependent variable,<br/>Independent variable,<br/>PooledOLS model |

## Examples

