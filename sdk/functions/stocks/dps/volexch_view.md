---
title: volexch
description: Display short data by exchange
---
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

