---
title: roc
description: OpenBB SDK Function
---

# roc

A momentum oscillator, which measures the percentage change between the current

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/forecast_model.py#L267)

```python
def add_roc(dataset: pd.DataFrame, target_column: str, period: int) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| dataset | pd.DataFrame | The dataset you wish to calculate with | None | False |
| target_column | str | The column you wish to add the ROC to | None | False |
| period | int | Time Span | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe with added ROC column |

---

## Examples

---

