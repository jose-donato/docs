---
title: swaps
description: Displays last swaps done on Uniswap
---
# swaps

## crypto_defi_graph_view.display_last_uni_swaps

```python
def swaps(limit: int, sortby: str, ascend: bool, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/graph_view.py#L217)

Description: Displays last swaps done on Uniswap

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | None | False |
| sortby | str | Key by which to sort data. The table can be sorted by every of its columns
(see https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2). | None | False |
| ascend | bool | Flag to sort data descending | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

