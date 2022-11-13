---
title: historical
description: View historical price of stocks that meet preset
---
# historical

## stocks_screener_yahoofinance_view.historical

```python
def historical(preset_loaded: str, limit: int, start_date: str, type_candle: str, normalize: bool, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/screener/yahoofinance_view.py#L27)

Description: View historical price of stocks that meet preset

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| preset_loaded | str | Preset loaded to filter for tickers | None | False |
| limit | int | Number of stocks to display | None | False |
| start_date | str | Start date to display historical data, in YYYY-MM-DD format | None | False |
| type_candle | str | Type of candle to display | None | False |
| normalize | bool | Boolean to normalize all stock prices using MinMax | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

| Type | Description |
| ---- | ----------- |
| list[str] | List of stocks |

## Examples

