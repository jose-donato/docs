---
title: stats
description: OpenBB SDK Function
---
# stats

## crypto_defi_graph_model.get_uniswap_stats

```python
def stat) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/graph_model.py#L123)

Description: Get base statistics about Uniswap DEX. [Source: https://thegraph.com/en/]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Uniswap DEX statistics like liquidity, volume, number of pairs, number of transactions. |

## Examples




# VIEW

# stats

## crypto_defi_graph_view.display_uni_stats

```python
def stats(export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/graph_view.py#L71)

Description: Displays base statistics about Uniswap DEX. [Source: https://thegraph.com/en/]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples
