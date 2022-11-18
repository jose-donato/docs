---
title: fe
description: OpenBB SDK Function
---

# fe

When effects are correlated with the regressors the RE and BE estimators are not consistent.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_model.py#L357)

```python
def get_fe(Y: pd.DataFrame, X: pd.DataFrame, entity_effects: bool, time_effects: bool) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| regression_variables | list | The regressions variables entered where the first variable is<br/>the dependent variable. | None | False |
| data | dict | A dictionary containing the datasets. | None | False |
| entity_effects | bool | Whether to include entity effects | None | False |
| time_effects | bool | Whether to include time effects | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[DataFrame, Any, List[Any], Any] | The dataset used,<br/>Dependent variable,<br/>Independent variable,<br/>PanelOLS model with Fixed Effects |

---

## Examples

---

