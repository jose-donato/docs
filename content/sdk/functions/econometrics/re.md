---
title: re
description: OpenBB SDK Function
---

# re

## openbb_terminal.econometrics.regression_model.get_re

```python title='openbb_terminal/econometrics/regression_model.py'
def get_re(regression_variables: List[Tuple], data: Dict[str, pd.DataFrame]) -> Tuple
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_model.py#L320)

Description: The random effects model is virtually identical to the pooled OLS model except that is accounts for the

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| regression_variables | list | The regressions variables entered where the first variable is<br/>the dependent variable. | None | False |
| data | dict | A dictionary containing the datasets. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[DataFrame, Any, List[Any], Any] | The dataset used,<br/>Dependent variable,<br/>Independent variable,<br/>RandomEffects model |

## Examples

