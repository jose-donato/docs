---
title: hist
description: OpenBB SDK Function
---
# hist

## stocks_ca_yahoo_finance_model.get_historical

```python
def hist(similar: List[str], start_date: str, candle_type: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/comparison_analysis/yahoo_finance_model.py#L30)

Description: Get historical prices for all comparison stocks

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| similar | List[str] | List of similar tickers.
Comparable companies can be accessed through
finnhub_peers(), finviz_peers(), polygon_peers(). | None | False |
| start_date | str | Start date of comparison. Defaults to 1 year previously | 1 | True |
| candle_type | str | Candle variable to compare, by default "a" for Adjusted Close. Possible values are: o, h, l, c, a, v, r | None | True |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe containing candle type variable for each ticker |

## Examples




# VIEW

# hist

## stocks_ca_yahoo_finance_view.display_historical

```python
def hist(similar: List[str], start_date: str, candle_type: str, normalize: bool, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/comparison_analysis/yahoo_finance_view.py#L43)

Description: Display historical stock prices. [Source: Yahoo Finance]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| similar | List[str] | List of similar tickers.
Comparable companies can be accessed through
finnhub_peers(), finviz_peers(), polygon_peers(). | None | False |
| start_date | str | Start date of comparison, by default 1 year ago | 1 | True |
| candle_type | str | OHLCA column to use or R to use daily returns calculated from Adjusted Close, by default "a" for Adjusted Close | None | True |
| normalize | bool | Boolean to normalize all stock prices using MinMax defaults True | s | True |
| export | str | Format to export historical prices, by default "" | None | True |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

