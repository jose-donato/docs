---
title: swaps
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# swaps

<Tabs>
<TabItem value="model" label="Model" default>

Get the last 100 swaps done on Uniswap [Source: https://thegraph.com/en/]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/graph_model.py#L296)

```python
def get_last_uni_swaps(limit: int, sortby: str, ascend: bool) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of swaps to return. Maximum possible number: 1000. | None | False |
| sortby | str | Key by which to sort data. The table can be sorted by every of its columns<br/>(see https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2). | None | False |
| ascend | bool | Flag to sort data descending | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Last 100 swaps on Uniswap |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Prints table showing last swaps done on Uniswap

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/graph_view.py#L218)

```python
def display_last_uni_swaps(limit: int, sortby: str, ascend: bool, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | None | False |
| sortby | str | Key by which to sort data. The table can be sorted by every of its columns<br/>(see https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2). | None | False |
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