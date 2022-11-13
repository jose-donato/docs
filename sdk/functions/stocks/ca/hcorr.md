---
title: hcorr
description: Get historical price correlation. [Source: Yahoo Finance]
---
# hcorr

## stocks_ca_yahoo_finance_model.get_correlation

```python
def hcorr(similar: List[str], start_date: str, candle_type: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/comparison_analysis/yahoo_finance_model.py#L94)

Description: Get historical price correlation. [Source: Yahoo Finance]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| similar | List[str] | List of similar tickers.
Comparable companies can be accessed through
finnhub_peers(), finviz_peers(), polygon_peers(). | None | False |
| start_date | str | Start date of comparison, by default 1 year ago | 1 | True |
| candle_type | str | OHLCA column to use for candles or R for returns, by default "a" for Adjusted Close | None | True |

## Returns

None

## Examples

