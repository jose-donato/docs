---
title: rise
description: OpenBB SDK Function
---

# rise

## openbb_terminal.common.behavioural_analysis.google_model.get_rise

```python title='openbb_terminal/common/behavioural_analysis/google_model.py'
def get_rise(symbol: str, limit: int) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/google_model.py#L106)

Description: Get top rising related queries with this stock's query [Source: google].

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| limit | int | Number of queries to show | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe containing rising related queries |

## Examples

