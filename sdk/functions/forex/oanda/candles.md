---
title: candles
description: OpenBB SDK Function
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




# VIEW

# candles

## forex_oanda_view.show_candles

```python
def candle) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L303)

Description: Show candle chart.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| instrument | str | The loaded currency pair | None | False |
| granularity | str | The timeframe to get for the candle chart. Seconds: S5, S10, S15, S30
Minutes: M1, M2, M4, M5, M10, M15, M30 Hours: H1, H2, H3, H4, H6, H8, H12
Day (default): D, Week: W Month: M, | None | True |
| candlecount | int | Limit for the number of data points | None | True |
| additional_charts | Dict[str, bool] | A dictionary of flags to include additional charts | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (2 axes are expected in the list), by default None | None | True |

## Returns

None

## Examples
