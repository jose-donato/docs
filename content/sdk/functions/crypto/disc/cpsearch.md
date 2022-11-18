---
title: cpsearch
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# cpsearch

<Tabs>
<TabItem value="model" label="Model" default>

Search CoinPaprika. [Source: CoinPaprika]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/coinpaprika_model.py#L27)

```python
def get_search_results(query: str, category: Optional[Any], modifier: Optional[Any], sortby: str, ascend: bool) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| query | str | phrase for search | None | False |
| category | Optional[Any] | one or more categories (comma separated) to search.<br/>Available options: currencies|exchanges|icos|people|tags<br/>Default: currencies,exchanges,icos,people,tags | currencies | False |
| modifier | Optional[Any] | set modifier for search results. Available options: symbol_search -<br/>search only by symbol (works for currencies only) | None | False |
| sortby | str | Key to sort data. The table can be sorted by every of its columns. Refer to<br/>API documentation (see https://api.coinpaprika.com/docs#tag/Tools/paths/~1search/get) | None | False |
| ascend | bool | Flag to sort data descending | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Search Results<br/>Columns: Metric, Value |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Prints table showing Search over CoinPaprika. [Source: CoinPaprika]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/coinpaprika_view.py#L16)

```python
def display_search_results(query: str, category: str, limit: int, sortby: str, ascend: bool, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| query | str | Search query | None | False |
| category | str | Categories to search: currencies|exchanges|icos|people|tags|all. Default: all | all | False |
| limit | int | Number of records to display | None | False |
| sortby | str | Key to sort data. The table can be sorted by every of its columns. Refer to<br/>API documentation (see https://api.coinpaprika.com/docs#tag/Tools/paths/~1search/get) | None | False |
| ascend | bool | Flag to sort data descending | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>