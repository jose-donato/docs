---
title: cgcategories
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# cgcategories

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.cryptocurrency.overview.pycoingecko_model.get_top_crypto_categories

```python title='openbb_terminal/cryptocurrency/overview/pycoingecko_model.py'
def get_top_crypto_categories(sort_filter: str) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_model.py#L157)

Description: Returns top crypto categories [Source: CoinGecko]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sort_filter | str | Can be one of - "market_cap_desc", "market_cap_asc", "name_desc", "name_asc",<br/>"market_cap_change_24h_desc", "market_cap_change_24h_asc" | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Rank, Name, Change_1h, Change_7d, Market_Cap, Volume_24h,Coins, Url |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.cryptocurrency.overview.pycoingecko_view.display_categories

```python title='openbb_terminal/cryptocurrency/overview/pycoingecko_view.py'
def display_categories(sortby: str, limit: int, export: str, pie: bool) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_view.py#L439)

Description: Shows top cryptocurrency categories by market capitalization

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sortby | str | Key by which to sort data | None | False |
| limit | int | Number of records to display | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| pie | bool | Whether to show the pie chart | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>