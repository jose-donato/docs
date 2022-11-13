---
title: rise
description: Get top rising related queries with this stock's query [Source: google]
---
# rise

## stocks_ba_google_model.get_rise

```python
def rise(symbol: str, limit: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/google_model.py#L105)

Description: Get top rising related queries with this stock's query [Source: google]

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

