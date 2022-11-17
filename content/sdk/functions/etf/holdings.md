---
title: holdings
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# holdings

<Tabs>
<TabItem value="model" label="Model" default>

Get ETF holdings

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/stockanalysis_model.py#L82)]

```python
def get_etf_holdings(symbol: str) -> pd.DataFrame
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Symbol to get holdings for | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of holdings |



</TabItem>
<TabItem value="view" label="View">

None

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/stockanalysis_view.py#L45)]

```python
def view_holdings(symbol: str, limit: int = 10, export: str = "") -> None
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | ETF symbol to show holdings for | None | False |
| limit | int | Number of holdings to show | 10 | True |
| export | str | Format to export data |  | True |

## Returns

This function does not return anything



</TabItem>
</Tabs>