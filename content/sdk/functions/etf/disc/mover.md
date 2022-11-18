---
title: mover
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# mover

<Tabs>
<TabItem value="model" label="Model" default>

Scrape data for top etf movers.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/discovery/wsj_model.py#L15)]

```python
def etf_movers(sort_type: str = "gainers", export: bool = False) -> pd.DataFrame
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sort_type | str | Data to get. Can be "gainers", "decliners" or "active" | gainers | True |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Datafame containing the name, price, change and the volume of the etf |



</TabItem>
<TabItem value="view" label="View">

Show top ETF movers from wsj.com

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/discovery/wsj_view.py#L16)]

```python
def show_top_mover(sort_type: str = "gainers", limit: int = 10, export: str = "") -> None
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sort_type | str | What to show. Either Gainers, Decliners or Activity | gainers | True |
| limit | int | Number of etfs to show | 10 | True |
| export | str | Format to export data |  | True |

## Returns

This function does not return anything



</TabItem>
</Tabs>