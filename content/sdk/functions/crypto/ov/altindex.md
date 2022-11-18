---
title: altindex
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# altindex

<Tabs>
<TabItem value="model" label="Model" default>

Get altcoin index overtime

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/blockchaincenter_model.py#L19)

```python
def get_altcoin_index(period: int, start_date: str, end_date: str) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| period | int | Number of days {30,90,365} to check performance of coins and calculate the altcoin index.<br/>E.g., 365 checks yearly performance, 90 will check seasonal performance (90 days),<br/>30 will check monthly performance (30 days). | None | False |
| start_date | str | Initial date, format YYYY-MM-DD | None | False |
| end_date | str | Final date, format YYYY-MM-DD | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Date, Value (Altcoin Index) |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Displays altcoin index overtime

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/blockchaincenter_view.py#L27)

```python
def display_altcoin_index(period: int, start_date: str, end_date: str, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| start_date | str | Initial date, format YYYY-MM-DD | None | False |
| end_date | str | Final date, format YYYY-MM-DD | None | False |
| period | int | Number of days to check the performance of coins and calculate the altcoin index.<br/>E.g., 365 will check yearly performance , 90 will check seasonal performance (90 days),<br/>30 will check monthly performance (30 days). | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>