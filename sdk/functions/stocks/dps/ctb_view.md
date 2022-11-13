---
title: ctb
description: Plots the cost to borrow of a stock. [Source: Stocksera]
---
# ctb

## stocks_dps_stocksera_view.plot_cost_to_borrow

```python
def ctb(symbol: str, data: pd.DataFrame, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/stocksera_view.py#L29)

Description: Plots the cost to borrow of a stock. [Source: Stocksera]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | ticker to get cost to borrow from | None | False |
| data | pd.DataFrame | Cost to borrow dataframe | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (2 axes are expected in the list), by default None | None | True |

## Returns

None

## Examples

