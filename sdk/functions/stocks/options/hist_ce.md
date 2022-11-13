---
title: hist_ce
description: Historic prices for a specific option [chartexchange]
---
# hist_ce

## stocks_options_chartexchange_model.get_option_history

```python
def hist_ce(symbol: str, date: str, call: bool, price: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/chartexchange_model.py#L18)

Description: Historic prices for a specific option [chartexchange]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to get historical data from | None | False |
| date | str | Date as a string YYYYMMDD | None | False |
| call | bool | Whether to show a call or a put | None | False |
| price | str | Strike price for a specific option | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.Dataframe | Historic information for an option |

## Examples

