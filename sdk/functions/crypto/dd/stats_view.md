---
title: stats
description: Get 24 hr stats for the product. Volume is in base currency units.
---
# stats

## crypto_dd_coinbase_view.display_stats

```python
def stats(symbol: str, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinbase_view.py#L98)

Description: Get 24 hr stats for the product. Volume is in base currency units.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Trading pair of coins on Coinbase e.g ETH-USDT or UNI-ETH | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

