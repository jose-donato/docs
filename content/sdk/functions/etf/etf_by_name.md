---
title: etf_by_name
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# etf_by_name

<Tabs>
<TabItem value="model" label="Model" default>

Get an ETF symbol and name based on ETF string to search. [Source: StockAnalysis]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/stockanalysis_model.py#L132)]

```python
def get_etfs_by_name(name_to_search: str) -> pd.DataFrame
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| name_to_search | str | ETF name to match | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.Dataframe | Dataframe with symbols and names |



</TabItem>
<TabItem value="view" label="View">

Display ETFs matching search string. [Source: StockAnalysis]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/stockanalysis_view.py#L99)]

```python
def display_etf_by_name(name: str, limit: int = 10, export: str = "") -> None
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| name | str | String being matched | None | False |
| limit | int | Limit of ETFs to display | 10 | True |
| export | str | Export to given file type |  | True |

## Returns

This function does not return anything



</TabItem>
</Tabs>