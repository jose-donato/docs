---
title: ayr
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ayr

<Tabs>
<TabItem value="model" label="Model" default>

Displays the 30-day history of the Anchor Yield Reserve.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/terraengineer_model.py#L63)]
```python
def get_anchor_yield_reserve() -> pd.DataFrame
```
---
## Parameters
This function does not take any parameters.
---
## Returns
| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe containing historical data |
---


</TabItem>
<TabItem value="view" label="View">

Plots the 30-day history of the Anchor Yield Reserve.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/terraengineer_view.py#L85)]
```python
def display_anchor_yield_reserve(export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None) -> None
```
---
## Parameters
| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| export | str | Export dataframe data to csv,json,xlsx file, by default False |  | True |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

---
## Returns
This function does not return anything
---


</TabItem>
</Tabs>