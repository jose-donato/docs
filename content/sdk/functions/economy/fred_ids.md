---
title: fred_ids
description: OpenBB SDK Function
---

# fred_ids

## openbb_terminal.economy.fred_model.get_series_ids

```python title='openbb_terminal/economy/fred_model.py'
def get_series_ids(search_query: str, limit: int) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/fred_model.py#L126)

Description: Get Series IDs. [Source: FRED]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| search_query | str | Text query to search on fred series notes database | None | False |
| limit | int | Maximum number of series IDs to output | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.Dataframe | Dataframe with series IDs and titles |

## Examples

