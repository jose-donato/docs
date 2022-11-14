---
title: cpsearch
description: OpenBB SDK Function
---
# cpsearch

## crypto_disc_coinpaprika_model.get_search_results

```python
def cpsearch(query: str, category: Union[Any, NoneType], modifier: Union[Any, NoneType], sortby: str, ascend: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/coinpaprika_model.py#L26)

Description: Search CoinPaprika. [Source: CoinPaprika]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| query | str | phrase for search | None | False |
| category | Optional[Any] | one or more categories (comma separated) to search.
Available options: currencies|exchanges|icos|people|tags
Default: currencies,exchanges,icos,people,tags | currencies | False |
| modifier | Optional[Any] | set modifier for search results. Available options: symbol_search -
search only by symbol (works for currencies only) | None | False |
| sortby | str | Key to sort data. The table can be sorted by every of its columns. Refer to
API documentation (see https://api.coinpaprika.com/docs#tag/Tools/paths/~1search/get) | None | False |
| ascend | bool | Flag to sort data descending | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pandas.DataFrame | Search Results
Columns: Metric, Value |

## Examples




# VIEW

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

