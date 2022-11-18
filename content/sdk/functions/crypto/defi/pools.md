---
title: pools
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# pools

<Tabs>
<TabItem value="model" label="Model" default>

Get uniswap pools by volume. [Source: https://thegraph.com/en/]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/graph_model.py#L253)

```python
def get_uni_pools_by_volume() -> DataFrame
```
---

## Parameters

This function does not take any parameters.

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Trade-able pairs listed on Uniswap by top volume. |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Prints table showing uniswap pools by volume.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/graph_view.py#L170)

```python
def display_uni_pools(limit: int, sortby: str, ascend: bool, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | None | False |
| sortby | str | Key by which to sort data. The table can be sorted by every of its columns<br/>(see https://bit.ly/3ORagr1 then press ctrl-enter or execute the query). | None | False |
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