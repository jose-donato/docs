---
title: ps
description: Get ticker information for single coin [Source: CoinPaprika]
---
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

