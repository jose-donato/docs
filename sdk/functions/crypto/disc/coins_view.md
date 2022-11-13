---
title: coins
description: Display top coins [Source: CoinGecko]
---
# coins

## crypto_disc_pycoingecko_view.display_coins

```python
def coins(category: str, limit: int, sortby: str, export: str, ascend: bool) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/pycoingecko_view.py#L34)

Description: Display top coins [Source: CoinGecko]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| category | str | If no category is passed it will search for all coins. (E.g., smart-contract-platform) | None | False |
| limit | int | Number of records to display | None | False |
| sortby | str | Key to sort data | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| ascend | bool | Sort data in ascending order | None | False |

## Returns

None

## Examples

