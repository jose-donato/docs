---
title: slopes
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# slopes

<Tabs>
<TabItem value="model" label="Model" default>

Load cases and find slope over period.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/alternative/covid/covid_model.py#L163)

```python
def get_case_slopes(days_back: int, limit: int, threshold: int, ascend: bool) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| days_back | int | Number of historical days to consider | None | False |
| limit | int | Number of rows to show | None | False |
| threshold | int | Threshold for total number of cases | None | False |
| ascend | bool | Flag to sort in ascending order | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe containing slopes |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Prints table showing countries with the highest case slopes.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/alternative/covid/covid_view.py#L210)

```python
def display_case_slopes(days_back: int, limit: int, threshold: int, ascend: bool, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| days_back | int | Number of historical days to get slope for | None | False |
| limit | int | Number to show in table | None | False |
| ascend | bool | Flag to sort in ascending order | None | False |
| threshold | int | Threshold for total cases over period | None | False |
| export | str | Format to export data | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>