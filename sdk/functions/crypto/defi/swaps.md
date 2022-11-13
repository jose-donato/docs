---
title: swaps
description: Get the last 100 swaps done on Uniswap [Source: https://thegraph.com/en/]
---
# swaps

## crypto_defi_graph_model.get_last_uni_swaps

```python
def swaps(limit: int, sortby: str, ascend: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/graph_model.py#L295)

Description: Get the last 100 swaps done on Uniswap [Source: https://thegraph.com/en/]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Last 100 swaps on Uniswap |

## Examples

