---
title: platforms
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# platforms

<Tabs>
<TabItem value="model" label="Model" default>

Get list of financial platforms from CoinGecko API [Source: CoinGecko]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_model.py#L266)]

```python
def get_financial_platforms(sortby: str = "Name", ascend: bool = True) -> DataFrame
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sortby | str | Key by which to sort data | Name | True |
| ascend | bool | Flag to sort data ascending | True | True |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Rank, Name, Category, Centralized, Url |



</TabItem>
<TabItem value="view" label="View">

Shows list of financial platforms. [Source: CoinGecko]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_view.py#L549)]

```python
def display_platforms(sortby: str = "Name", ascend: bool = True, limit: int = 15, export: str = "") -> None
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | 15 | True |
| sortby | str | Key by which to sort data | Name | True |
| ascend | bool | Flag to sort data ascending | True | True |
| export | str | Export dataframe data to csv,json,xlsx file |  | True |

## Returns

This function does not return anything



</TabItem>
</Tabs>