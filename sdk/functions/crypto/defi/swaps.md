---
title: swaps
description: OpenBB SDK Function
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




# VIEW

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

