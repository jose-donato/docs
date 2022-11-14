---
title: ex
description: OpenBB SDK Function
---
# ex

## crypto_dd_coinpaprika_model.get_coin_exchanges_by_id

```python
def ex(symbol: str, sortby: str, ascend: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinpaprika_model.py#L149)

Description: Get all exchanges for given coin id. [Source: CoinPaprika]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Identifier of Coin from CoinPaprika | None | False |
| sortby | str | Key by which to sort data. Every column name is valid (see for possible values:
https://api.coinpaprika.com/v1). | None | False |
| ascend | bool | Flag to sort data ascending | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pandas.DataFrame | All exchanges for given coin
Columns: id, name, adjusted_volume_24h_share, fiats |

## Examples




# VIEW

# ex

## crypto_dd_coinpaprika_view.display_exchanges

```python
def ex(symbol: str, limit: int, sortby: str, ascend: bool, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinpaprika_view.py#L192)

Description: Get all exchanges for given coin id. [Source: CoinPaprika]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Cryptocurrency symbol (e.g. BTC) | None | False |
| limit | int | Number of records to display | None | False |
| sortby | str | Key by which to sort data. Every column name is valid (see for possible values:
https://api.coinpaprika.com/v1). | None | False |
| ascend | bool | Flag to sort data ascending | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

