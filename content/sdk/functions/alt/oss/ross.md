---
title: ross
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ross

<Tabs>
<TabItem value="model" label="Model" default>

Get startups from ROSS index [Source: https://runacap.com/].

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/alternative/oss/runa_model.py#L104)

```python
def get_startups() -> DataFrame
```
---

## Parameters

This function does not take any parameters.

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | list of startups |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Plots list of startups from ross index [Source: https://runacap.com/]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/alternative/oss/runa_view.py#L25)

```python
def display_rossindex(limit: int, sortby: str, ascend: bool, show_chart: bool, show_growth: bool, chart_type: str, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of startups to search | None | False |
| sortby | str | Key by which to sort data. Default: Stars AGR [%] | Stars | False |
| ascend | bool | Flag to sort data descending | None | False |
| show_chart | bool | Flag to show chart with startups | None | False |
| show_growth | bool | Flag to show growth line chart | None | False |
| chart_type | str | Chart type {stars,forks} | None | False |
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