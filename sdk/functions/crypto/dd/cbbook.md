---
title: cbbook
description: Get orders book for chosen trading pair. [Source: Coinbase]
---
# cbbook

## crypto_dd_coinbase_model.get_order_book

```python
def cbbook(symbol: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinbase_model.py#L58)

Description: Get orders book for chosen trading pair. [Source: Coinbase]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Trading pair of coins on Coinbase e.g ETH-USDT or UNI-ETH | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[np.array, np.array, str, dict] | array with bid prices, order sizes and cumulative order sizes
array with ask prices, order sizes and cumulative order sizes
trading pair
dict with raw data |

## Examples

