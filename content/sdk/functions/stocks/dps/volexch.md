---
title: volexch
description: OpenBB SDK Function
---
# volexch

## stocks_dps_nyse_model.get_short_data_by_exchange

```python
def volexch(symbol: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/nyse_model.py#L14)

Description: Gets short data for 5 exchanges [https://ftp.nyse.com] starting at 1/1/2021

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker to get data for | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame of short data by exchange |

## Examples




# VIEW

# volexch

## stocks_dps_nyse_view.display_short_by_exchange

```python
def volexch(symbol: str, raw: bool, sortby: str, ascend: bool, mpl: bool, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/nyse_view.py#L28)

Description: Display short data by exchange

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker | None | False |
| raw | bool | Flag to display raw data | None | False |
| sortby | str | Column to sort by | None | False |
| ascend | bool | Sort in ascending order | None | False |
| mpl | bool | Display using matplotlib | None | False |
| export | str | Format  of export data | None | True |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

