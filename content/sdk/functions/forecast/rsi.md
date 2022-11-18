---
title: rsi
description: OpenBB SDK Function
---

# rsi

A momentum indicator that measures the magnitude of recent price changes to evaluate

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/forecast_model.py#L225)

```python
def add_rsi(dataset: pd.DataFrame, target_column: str, period: int) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| dataset | pd.DataFrame | The dataset you wish to calculate for | None | False |
| target_column | str | The column you wish to add the RSI to | None | False |
| period | int | Time Span | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe with added RSI column |

---

## Examples

---

