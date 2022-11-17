---
title: stats
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# stats

<Tabs>
<TabItem value="model" label="Model" default>

Get base statistics about Uniswap DEX. [Source: https://thegraph.com/en/]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/graph_model.py#L124)]

```python
def get_uniswap_stats() -> DataFrame
```
## Parameters

This function does not take any parameters.

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Uniswap DEX statistics like liquidity, volume, number of pairs, number of transactions. |



</TabItem>
<TabItem value="view" label="View">

Prints table showing base statistics about Uniswap DEX. [Source: https://thegraph.com/en/]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/graph_view.py#L72)]

```python
def display_uni_stats(export: str = "") -> None
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| export | str | Export dataframe data to csv,json,xlsx file |  | True |

## Returns

This function does not return anything



</TabItem>
</Tabs>