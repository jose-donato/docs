---
title: rolling
description: Return rolling mean and standard deviation
---
# rolling

## common_qa_rolling_model.get_rolling_avg

```python
def rolling(data: pd.DataFrame, window: int) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/rolling_model.py#L15)

Description: Return rolling mean and standard deviation

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of target data | None | False |
| window | int | Length of rolling window | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
|  | Dataframe of rolling mean |

## Examples

