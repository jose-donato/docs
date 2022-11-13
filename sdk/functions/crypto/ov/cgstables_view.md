---
title: cgstables
description: Shows stablecoins data [Source: CoinGecko]
---
# cgstables

## crypto_ov_pycoingecko_view.display_stablecoins

```python
def cgstables(limit: int, export: str, sortby: str, ascend: bool, pie: bool) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_view.py#L336)

Description: Shows stablecoins data [Source: CoinGecko]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| pie | bool | Whether to show a pie chart | None | False |

## Returns

None

## Examples

