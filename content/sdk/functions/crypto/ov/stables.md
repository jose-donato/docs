---
title: stables
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# stables

<Tabs>
<TabItem value="model" label="Model" default>

Returns top stable coins [Source: CoinGecko]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_model.py#L191)]

```python
def get_stable_coins(limit: int = 20, sortby: str = "rank", ascend: bool = False) -> pd.DataFrame
```
---
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | How many rows to show | 20 | True |
| sortby | str | Key by which to sort data | rank | True |
| ascend | bool | Flag to sort data ascending | False | True |

---
## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Rank, Name, Symbol, Price, Change_24h, Exchanges, Market_Cap, Change_30d, Url |

---


</TabItem>
<TabItem value="view" label="View">

Shows stablecoins data [Source: CoinGecko]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_view.py#L331)]

```python
def display_stablecoins(limit: int = 15, export: str = "", sortby: str = "rank", ascend: bool = False, pie: bool = False) -> None
```
---
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | 15 | True |
| sortby | str | Key by which to sort data | rank | True |
| ascend | bool | Flag to sort data ascending | False | True |
| export | str | Export dataframe data to csv,json,xlsx file |  | True |
| pie | bool | Whether to show a pie chart | False | True |

---
## Returns

This function does not return anything

---


</TabItem>
</Tabs>