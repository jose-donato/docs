---
title: candles
description: Get candles for chosen trading pair and time interval. [Source: Coinbase]
---
# candles

## crypto_dd_coinbase_model.get_candles

```python
def candles(symbol: str, interval: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinbase_model.py#L129)

Description: Get candles for chosen trading pair and time interval. [Source: Coinbase]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Trading pair of coins on Coinbase e.g ETH-USDT or UNI-ETH | None | False |
| interval | str | Time interval. One from 1min, 5min ,15min, 1hour, 6hour, 24hour | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Candles for chosen trading pair. |

## Examples

