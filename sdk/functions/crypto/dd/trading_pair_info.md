---
title: trading_pair_info
description: Get information about chosen trading pair. [Source: Coinbase]
---
# trading_pair_info

## crypto_dd_coinbase_model.get_trading_pair_info

```python
def trading_pair_info(symbol: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinbase_model.py#L35)

Description: Get information about chosen trading pair. [Source: Coinbase]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Trading pair of coins on Coinbase e.g ETH-USDT or UNI-ETH | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Basic information about given trading pair |

## Examples

