---
title: hist
description: Get historical prices for all comparison stocks
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

