---
title: gdp
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# gdp

<Tabs>
<TabItem value="model" label="Model" default>

Get annual or quarterly Real GDP for US

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/alphavantage_model.py#L44)

```python
def get_real_gdp(interval: str, start_year: int) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| interval | str | Interval for GDP, by default "a" for annual, by default "q" | None | True |
| start_year | int | Start year for plot, by default 2010 | 2010 | True |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of GDP |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Display US GDP from AlphaVantage

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/alphavantage_view.py#L88)

```python
def display_real_gdp(interval: str, start_year: int, raw: bool, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| interval | str | Interval for GDP.  Either "a" or "q", by default "q" | None | False |
| start_year | int | Start year for plot, by default 2010 | 2010 | True |
| raw | bool | Flag to show raw data, by default False | False | True |
| export | str | Format to export data, by default "" | None | True |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>