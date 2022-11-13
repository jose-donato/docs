---
title: ps
description: Get all most important ticker related information for given coin id [Source: CoinPaprika]
---
# ps

## crypto_dd_coinpaprika_model.get_tickers_info_for_coin

```python
def ps(symbol: str, quotes: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinpaprika_model.py#L295)

Description: Get all most important ticker related information for given coin id [Source: CoinPaprika]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Id of coin from CoinPaprika | None | False |
| quotes | str | Comma separated quotes to return e.g quotes = USD, BTC | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pandas.DataFrame | Most important ticker related information
Columns: Metric, Value |

## Examples

