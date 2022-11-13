---
title: candles
description: Request data for candle chart.
---
# candles

## forex_oanda_model.get_candles_dataframe

```python
def candles(instrument: Union[str, NoneType], granularity: str, candlecount: int) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_model.py#L580)

Description: Request data for candle chart.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| instrument | str | Loaded currency pair code | None | False |
| granularity | str | Data granularity, by default "D" | None | True |
| candlecount | int | Limit for the number of data points, by default 180 | 180 | True |

## Returns

| Type | Description |
| ---- | ----------- |
| Union[pd.DataFrame, bool] | Candle chart data or False |

## Examples

