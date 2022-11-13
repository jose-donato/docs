---
title: mom
description: A momentum oscillator, which measures the percentage change between the current
---
# mom

## forecast_model.add_momentum

```python
def mom(dataset: pd.DataFrame, target_column: str, period: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/forecast_model.py#L295)

Description: A momentum oscillator, which measures the percentage change between the current

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| dataset | pd.DataFrame | The dataset you wish to calculate with | None | False |
| target_column | str | The column you wish to add the MOM to | None | False |
| period | int | Time Span | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
|  | Dataframe with added MOM column |

## Examples

