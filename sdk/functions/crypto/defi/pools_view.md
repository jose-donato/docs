---
title: pools
description: Displays uniswap pools by volume.
---
# pools

## crypto_defi_graph_view.display_uni_pools

```python
def pools(limit: int, sortby: str, ascend: bool, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/graph_view.py#L169)

Description: Displays uniswap pools by volume.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | None | False |
| sortby | str | Key by which to sort data. The table can be sorted by every of its columns
(see https://bit.ly/3ORagr1 then press ctrl-enter or execute the query). | None | False |
| ascend | bool | Flag to sort data descending | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

