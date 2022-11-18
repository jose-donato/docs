---
title: signal
description: OpenBB SDK Function
---

# signal

A price signal based on short/long term price.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/forecast_model.py#L362)]

```python
def add_signal(dataset: pd.DataFrame, target_column: str = "close") -> pd.DataFrame
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| dataset | pd.DataFrame | The dataset you wish to calculate with | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe with added signal column |

