---
title: sratio
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# sratio

<Tabs>
<TabItem value="model" label="Model" default>

Get terra blockchain staking ratio history [Source: https://fcd.terra.dev/swagger]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/terramoney_fcd_model.py#L287)

```python
def get_staking_ratio_history(limit: int) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | The number of ratios to show | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | historical staking ratio |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Plots terra blockchain staking ratio history [Source: https://fcd.terra.dev/v1]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/terramoney_fcd_view.py#L207)

```python
def display_staking_ratio_history(limit: int, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | None | False |
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