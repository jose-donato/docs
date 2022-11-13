---
title: cpsearch
description: Search over CoinPaprika. [Source: CoinPaprika]
---
# cpsearch

## crypto_disc_coinpaprika_view.display_search_results

```python
def cpsearch(query: str, category: str, limit: int, sortby: str, ascend: bool, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/coinpaprika_view.py#L15)

Description: Search over CoinPaprika. [Source: CoinPaprika]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| query | str | Search query | None | False |
| category | str | Categories to search: currencies|exchanges|icos|people|tags|all. Default: all | all | False |
| limit | int | Number of records to display | None | False |
| sortby | str | Key to sort data. The table can be sorted by every of its columns. Refer to
API documentation (see https://api.coinpaprika.com/docs#tag/Tools/paths/~1search/get) | None | False |
| ascend | bool | Flag to sort data descending | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

