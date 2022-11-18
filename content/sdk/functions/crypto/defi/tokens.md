---
title: tokens
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# tokens

<Tabs>
<TabItem value="model" label="Model" default>

Get list of tokens trade-able on Uniswap DEX. [Source: https://thegraph.com/en/]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/graph_model.py#L81)

```python
def get_uni_tokens(skip: int, limit: int, sortby: str, ascend: bool) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| skip | int | Skip n number of records. | None | False |
| limit | int | Show n number of records. | None | False |
| sortby | str | The column to sort by | None | False |
| ascend | bool | Whether to sort in ascending order | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Uniswap tokens with trading volume, transaction count, liquidity. |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Prints table showing tokens trade-able on Uniswap DEX.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/graph_view.py#L18)

```python
def display_uni_tokens(skip: int, limit: int, sortby: str, ascend: bool, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| skip | int | Number of records to skip | None | False |
| limit | int | Number of records to display | None | False |
| sortby | str | Key by which to sort data | None | False |
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