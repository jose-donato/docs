---
title: bigmac
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# bigmac

<Tabs>
<TabItem value="model" label="Model" default>

Display Big Mac Index for given countries

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/nasdaq_model.py#L173)

```python
def get_big_mac_indices(country_codes: List[str]) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| country_codes | List[str] | List of country codes (ISO-3 letter country code). Codes available through economy.country_codes(). | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe with Big Mac indices converted to USD equivalent. |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Display Big Mac Index for given countries

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/nasdaq_view.py#L59)

```python
def display_big_mac_index(country_codes: List[str], raw: bool, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| country_codes | List[str] | List of country codes (ISO-3 letter country code). Codes available through economy.country_codes(). | None | False |
| raw | bool | Flag to display raw data, by default False | False | True |
| export | str | Format data, by default "" | None | True |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>