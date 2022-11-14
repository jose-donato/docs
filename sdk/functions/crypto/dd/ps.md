---
title: ps
description: OpenBB SDK Function
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




# VIEW

# ps

## crypto_dd_coinpaprika_view.display_price_supply

```python
def ps(from_symbol: str, to_symbol: str, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinpaprika_view.py#L303)

Description: Get ticker information for single coin [Source: CoinPaprika]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| from_symbol | str | Cryptocurrency symbol (e.g. BTC) | None | False |
| to_symbol | str | Quoted currency | None | False |
| export | str | Export dataframe data to csv,json,xlsx | None | False |

## Returns

None

## Examples

