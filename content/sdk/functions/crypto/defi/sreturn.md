---
title: sreturn
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# sreturn

<Tabs>
<TabItem value="model" label="Model" default>

Get terra blockchain staking returns history [Source: https://fcd.terra.dev/v1]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/terramoney_fcd_model.py#L312)]

```python
def get_staking_returns_history(limit: int = 200) -> None
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | The number of returns to show | 200 | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | historical staking returns |
---



</TabItem>
<TabItem value="view" label="View">

Plots terra blockchain staking returns history [Source: https://fcd.terra.dev/swagger]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/terramoney_fcd_view.py#L254)]

```python
def display_staking_returns_history(limit: int = 90, export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None) -> None
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | 90 | True |
| export | str | Export dataframe data to csv,json,xlsx file |  | True |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |


---

## Returns

This function does not return anything

---



</TabItem>
</Tabs>