---
title: panel
description: Based on the regression type, this function decides what regression to run.
---
# panel

## econometrics_regression_model.get_regressions_results

```python
def panel(regression_type: str, regression_variables: List[Tuple], data: Dict[str, pd.DataFrame], entity_effects: bool, time_effects: bool) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_model.py#L33)

Description: Based on the regression type, this function decides what regression to run.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| regression_type | str | The type of regression you wish to execute. | None | False |
| regression_variables | list | The regressions variables entered where the first variable is
the dependent variable. | None | False |
| data | dict | A dictionary containing the datasets. | None | False |
| entity_effects | bool | Whether to apply Fixed Effects on entities. | None | False |
| time_effects | bool | Whether to apply Fixed Effects on time. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| The dataset used, the dependent variable, the independent variable and | None |

## Examples

