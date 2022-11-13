---
title: candles
description: Get candles for chosen trading pair and time interval. [Source: Coinbase]
---
# candles

## crypto_dd_coinbase_view.display_candles

```python
def candles(symbol: str, interval: str, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinbase_view.py#L75)

Description: Get candles for chosen trading pair and time interval. [Source: Coinbase]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Trading pair of coins on Coinbase e.g ETH-USDT or UNI-ETH | None | False |
| interval | str | Time interval. One from 1m, 5m ,15m, 1h, 6h, 24h | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

