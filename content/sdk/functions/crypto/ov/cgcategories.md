---
title: cgcategories
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# cgcategories

<Tabs>
<TabItem value="model" label="Model" default>

Returns top crypto categories [Source: CoinGecko]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_model.py#L157)

```python
def get_top_crypto_categories(sort_filter: str) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sort_filter | str | Can be one of - "market_cap_desc", "market_cap_asc", "name_desc", "name_asc",<br/>"market_cap_change_24h_desc", "market_cap_change_24h_asc" | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Rank, Name, Change_1h, Change_7d, Market_Cap, Volume_24h,Coins, Url |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Shows top cryptocurrency categories by market capitalization

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_view.py#L433)

```python
def display_categories(sortby: str, limit: int, export: str, pie: bool) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sortby | str | Key by which to sort data | None | False |
| limit | int | Number of records to display | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| pie | bool | Whether to show the pie chart | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>