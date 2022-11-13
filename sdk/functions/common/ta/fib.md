---
title: fib
description: Calculate Fibonacci levels
---
# fib

## common_ta_custom_indicators_model.calculate_fib_levels

```python
def fib(data: pd.DataFrame, limit: int, start_date: Any, end_date: Any) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/custom_indicators_model.py#L16)

Description: Calculate Fibonacci levels

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of prices | None | False |
| limit | int | Days to look back for retracement | None | False |
| start_date | Any | Custom start date for retracement | None | False |
| end_date | Any | Custom end date for retracement | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of fib levels |

## Examples

