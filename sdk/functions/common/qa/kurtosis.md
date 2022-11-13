---
title: kurtosis
description: Kurtosis Indicator
---
# kurtosis

## common_qa_rolling_model.get_kurtosis

```python
def kurtosis(data: pd.DataFrame, window: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/rolling_model.py#L125)

Description: Kurtosis Indicator

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of targeted data | None | False |
| window | int | Length of window | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of rolling kurtosis |

## Examples

