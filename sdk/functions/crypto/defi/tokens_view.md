---
title: tokens
description: Displays tokens trade-able on Uniswap DEX.
---
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

