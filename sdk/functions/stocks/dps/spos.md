---
title: spos
description: OpenBB SDK Function
---
# spos

## stocks_dps_stockgrid_model.get_net_short_position

```python
def spos(symbol: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/stockgrid_model.py#L168)

Description: Get net short position. [Source: Stockgrid]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock to get data from | None | False |
| Returns | None | None | None | None |
| ---------- | None | None | None | None |
| pd.DataFrame | None | Net short position | None | None |

## Returns

None

## Examples




# VIEW

# spos

## stocks_dps_stockgrid_view.net_short_position

```python
def spos(symbol: str, limit: int, raw: bool, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/stockgrid_view.py#L248)

Description: Plot net short position. [Source: Stockgrid]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock to plot for | None | False |
| limit | int | Number of last open market days to show | None | False |
| raw | bool | Flag to print raw data instead | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (2 axes are expected in the list), by default None | None | True |

## Returns

None

## Examples
