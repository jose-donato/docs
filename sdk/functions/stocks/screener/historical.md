---
title: historical
description: View historical price of stocks that meet preset
---
# historical

## stocks_screener_yahoofinance_model.historical

```python
def historical(preset_loaded: str, limit: int, start_date: str, type_candle: str, normalize: bool) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/screener/yahoofinance_model.py#L52)

Description: View historical price of stocks that meet preset

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| preset_loaded | str | Preset loaded to filter for tickers | None | False |
| limit | int | Number of stocks to display | None | False |
| start_date | str | Start date to display historical data, in YYYY-MM-DD format | None | False |
| type_candle | str | Type of candle to display | None | False |
| normalize | bool | Boolean to normalize all stock prices using MinMax | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of the screener |

## Examples

