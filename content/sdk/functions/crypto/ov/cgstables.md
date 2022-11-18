---
title: cgstables
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# cgstables

<Tabs>
<TabItem value="model" label="Model" default>

Returns top stable coins [Source: CoinGecko]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_model.py#L191)

```python
def get_stable_coins(limit: int, sortby: str, ascend: bool) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | How many rows to show | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Rank, Name, Symbol, Price, Change_24h, Exchanges, Market_Cap, Change_30d, Url |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Shows stablecoins data [Source: CoinGecko]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_view.py#L331)

```python
def display_stablecoins(limit: int, export: str, sortby: str, ascend: bool, pie: bool) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| pie | bool | Whether to show a pie chart | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>