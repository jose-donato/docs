---
title: ln
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ln

<Tabs>
<TabItem value="model" label="Model" default>

Return a selection of ETFs based on name filtered by total assets. [Source: Finance Database]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/financedatabase_model.py#L15)]

```python
def get_etfs_by_name(name: str) -> Dict
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| name | str | Search by name to find ETFs matching the criteria. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Dict[str, Any] | Dictionary with ETFs that match a certain name |



</TabItem>
<TabItem value="view" label="View">

Display a selection of ETFs based on name filtered by total assets. [Source: Finance Database]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/financedatabase_view.py#L18)]

```python
def display_etf_by_name(name: str, limit: int = 10, export: str = "") -> None
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| name | str | Search by name to find ETFs matching the criteria. | None | False |
| limit | int | Limit of ETFs to display | 10 | True |
| export | str | Type of format to export data |  | True |

## Returns

This function does not return anything



</TabItem>
</Tabs>