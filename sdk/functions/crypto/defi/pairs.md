---
title: pairs
description: OpenBB SDK Function
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




# VIEW

# pairs

## crypto_defi_graph_view.display_recently_added

```python
def pairs(limit: int, days: int, min_volume: int, min_liquidity: int, min_tx: int, sortby: str, ascend: bool, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/graph_view.py#L101)

Description: Displays Lastly added pairs on Uniswap DEX.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | None | False |
| days | int | Number of days the pair has been active, | None | False |
| min_volume | int | Minimum trading volume, | None | False |
| min_liquidity | int | Minimum liquidity | None | False |
| min_tx | int | Minimum number of transactions | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data descending | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

