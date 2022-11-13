---
title: pairs
description: Get lastly added trade-able pairs on Uniswap with parameters like:
---
# pairs

## crypto_defi_graph_model.get_uniswap_pool_recently_added

```python
def pairs(last_days: int, min_volume: int, min_liquidity: int, min_tx: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/graph_model.py#L163)

Description: Get lastly added trade-able pairs on Uniswap with parameters like:

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| last_days | int | How many days back to look for added pairs. | None | False |
| min_volume | int | Minimum volume | None | False |
| min_liquidity | int | Minimum liquidity | None | False |
| min_tx | int | Minimum number of transactions done in given pool. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Lastly added pairs on Uniswap DEX. |

## Examples

