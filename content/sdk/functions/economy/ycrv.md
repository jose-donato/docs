---
title: ycrv
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ycrv

<Tabs>
<TabItem value="model" label="Model" default>

Gets yield curve data from FRED

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/fred_model.py#L255)]
```python
def get_yield_curve(date: datetime.datetime = None) -> Tuple[pd.DataFrame, datetime.datetime]
```
---
## Parameters
| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| date | datetime | Date to get curve for.  If None, gets most recent date | None | True |

---
## Returns
| Type | Description |
| ---- | ----------- |
| Tuple[pd.DataFrame, datetime] | Dataframe of yields and maturities,<br/>Date for which the yield curve is obtained |
---


</TabItem>
<TabItem value="view" label="View">

Display yield curve based on US Treasury rates for a specified date.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/fred_view.py#L187)]
```python
def display_yield_curve(date: datetime.datetime = None, external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None, raw: bool = False, export: str = "") -> None
```
---
## Parameters
| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| date | datetime | Date to get yield curve for | None | True |
| external_axes | Optional[List[plt.Axes]] | External axes to plot data on | None | True |

---
## Returns
This function does not return anything
---


</TabItem>
</Tabs>