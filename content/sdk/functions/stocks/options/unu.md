---
title: unu
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# unu

<Tabs>
<TabItem value="model" label="Model" default>

Get unusual option activity from fdscanner.com

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/fdscanner_model.py#L19)

```python
def unusual_options(limit: int) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number to show | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[pd.DataFrame, pd.Timestamp] | Dataframe containing options information, Timestamp indicated when data was updated from website |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Displays the unusual options table

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/fdscanner_view.py#L15)

```python
def display_options(limit: int, sortby: str, ascend: bool, calls_only: bool, puts_only: bool, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of rows to show | None | False |
| sortby | str | Data column to sort on | None | False |
| ascend | bool | Whether to sort in ascend order | None | False |
| calls_only | bool | Flag to only show calls | None | False |
| puts_only | bool | Flag to show puts only | None | False |
| export | str | File type to export | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>