---
title: tokens
description: OpenBB SDK Function
---
# tokens

## crypto_defi_graph_model.get_uni_tokens

```python
def tokens(skip: int, limit: int, sortby: str, ascend: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/graph_model.py#L80)

Description: Get list of tokens trade-able on Uniswap DEX. [Source: https://thegraph.com/en/]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| skip | int | Skip n number of records. | None | False |
| limit | int | Show n number of records. | None | False |
| sortby | str | The column to sort by | None | False |
| ascend | bool | Whether to sort in ascending order | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Uniswap tokens with trading volume, transaction count, liquidity. |

## Examples




# VIEW

# tokens

## crypto_defi_graph_view.display_uni_tokens

```python
def tokens(skip: int, limit: int, sortby: str, ascend: bool, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/graph_view.py#L17)

Description: Displays tokens trade-able on Uniswap DEX.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| skip | int | Number of records to skip | None | False |
| limit | int | Number of records to display | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data descending | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples
