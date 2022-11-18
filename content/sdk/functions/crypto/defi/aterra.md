---
title: aterra
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# aterra

<Tabs>
<TabItem value="model" label="Model" default>

Returns historical data of an asset in a certain terra address

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/terraengineer_model.py#L19)

```python
def get_history_asset_from_terra_address(asset: str, address: str) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| asset | str | Terra asset {ust,luna,sdt} | None | False |
| address | str | Terra address. Valid terra addresses start with 'terra' | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | historical data |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Plots the 30-day history of specified asset in terra address

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/terraengineer_view.py#L29)

```python
def display_terra_asset_history(asset: str, address: str, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| asset | str | Terra asset {ust,luna,sdt} | None | False |
| address | str | Terra address. Valid terra addresses start with 'terra' | None | False |
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