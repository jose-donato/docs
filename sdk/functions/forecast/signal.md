---
title: signal
description: OpenBB SDK Function
---
# signal

## forecast_model.add_signal

```python
def signal(dataset: pd.DataFrame, target_column: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/forecast_model.py#L361)

Description: A price signal based on short/long term price.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| dataset | pd.DataFrame | The dataset you wish to calculate with | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
|  | Dataframe with added signal column |

## Examples

