---
title: mkt
description: Get all markets for given coin id. [Source: CoinPaprika]
---
# mkt

## crypto_dd_coinpaprika_view.display_markets

```python
def mkt(from_symbol: str, to_symbol: str, limit: int, sortby: str, ascend: bool, links: bool, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinpaprika_view.py#L241)

Description: Get all markets for given coin id. [Source: CoinPaprika]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| from_symbol | str | Cryptocurrency symbol (e.g. BTC) | None | False |
| to_symbol | str | Quoted currency | None | False |
| limit | int | Number of records to display | None | False |
| sortby | str | Key by which to sort data. Every column name is valid (see for possible values:
https://api.coinpaprika.com/v1). | None | False |
| ascend | bool | Flag to sort data ascending | None | False |
| links | bool | Flag to display urls | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

