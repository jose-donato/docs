---
title: ctb
description: Get cost to borrow of stocks [Source: Stocksera]
---
# ctb

## stocks_dps_stocksera_model.get_cost_to_borrow

```python
def ctb(symbol: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/stocksera_model.py#L18)

Description: Get cost to borrow of stocks [Source: Stocksera]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | ticker to get cost to borrow from | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Cost to borrow |

## Examples

