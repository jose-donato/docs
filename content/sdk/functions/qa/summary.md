---
title: summary
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# summary

<Tabs>
<TabItem value="model" label="Model" default>

Print summary statistics

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_model.py#L25)]

```python
def get_summary(data: pd.DataFrame) -> pd.DataFrame
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe to get summary statistics for | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Summary statistics |



</TabItem>
<TabItem value="view" label="View">

Prints table showing summary statistics

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_view.py#L53)]

```python
def display_summary(data: pd.DataFrame, export: str = "") -> None
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | DataFrame to get statistics of | None | False |
| export | str | Format to export data |  | True |

## Returns

This function does not return anything



</TabItem>
</Tabs>