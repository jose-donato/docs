---
title: fred_yield_curve
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# fred_yield_curve

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.economy.fred_model.get_yield_curve

```python title='openbb_terminal/economy/fred_model.py'
def get_yield_curve(date: datetime.datetime) -> Tuple
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/fred_model.py#L255)

Description: Gets yield curve data from FRED

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| date | datetime | Date to get curve for.  If None, gets most recent date | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[pd.DataFrame, datetime] | Dataframe of yields and maturities,<br/>Date for which the yield curve is obtained |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.economy.fred_view.display_yield_curve

```python title='openbb_terminal/economy/fred_view.py'
def display_yield_curve(date: datetime.datetime, external_axes: Optional[List[matplotlib.axes._axes.Axes]], raw: bool, export: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/fred_view.py#L187)

Description: Display yield curve based on US Treasury rates for a specified date.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| date | datetime | Date to get yield curve for | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes to plot data on | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>