---
title: ov
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ov

<Tabs>
<TabItem value="model" label="Model" default>

Get historical cases and deaths by country.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/alternative/covid/covid_model.py#L99)

```python
def get_covid_ov(country: str, limit: int) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| country | str | Country to get data for | None | False |
| limit | int | Number of raw data to show | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of historical cases and deaths |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Prints table showing historical cases and deaths by country.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/alternative/covid/covid_view.py#L129)

```python
def display_covid_ov(country: str, raw: bool, limit: int, export: str, plot: bool) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| country | str | Country to get data for | None | False |
| raw | bool | Flag to display raw data | None | False |
| limit | int | Number of raw data to show | None | False |
| export | str | Format to export data | None | False |
| plot | bool | Flag to display historical plot | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>