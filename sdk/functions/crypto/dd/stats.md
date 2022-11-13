---
title: stats
description: Get 24 hr stats for the product. Volume is in base currency units.
---
# stats

## crypto_dd_coinbase_model.get_product_stats

```python
def stats(symbol: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinbase_model.py#L188)

Description: Get 24 hr stats for the product. Volume is in base currency units.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Trading pair of coins on Coinbase e.g ETH-USDT or UNI-ETH | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | 24h stats for chosen trading pair |

## Examples

