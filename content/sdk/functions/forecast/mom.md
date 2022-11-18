---
title: mom
description: OpenBB SDK Function
---

# mom

A momentum oscillator, which measures the percentage change between the current

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/forecast_model.py#L296)

```python
def add_momentum(dataset: pd.DataFrame, target_column: str, period: int) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| dataset | pd.DataFrame | The dataset you wish to calculate with | None | False |
| target_column | str | The column you wish to add the MOM to | None | False |
| period | int | Time Span | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe with added MOM column |

---

## Examples

---

