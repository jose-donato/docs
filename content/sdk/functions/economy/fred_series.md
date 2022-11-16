---
title: fred_series
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# fred_series

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.economy.fred_model.get_aggregated_series_data

```python title='openbb_terminal/economy/fred_model.py'
def get_aggregated_series_data(series_ids: List[str], start_date: str, end_date: str) -> Tuple
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/fred_model.py#L208)

Description: Get Series data. [Source: FRED]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| series_ids | List[str] | Series ID to get data from | None | False |
| start_date | str | Start date to get data from, format yyyy-mm-dd | None | False |
| end_date | str | End data to get from, format yyyy-mm-dd | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Series data |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.economy.fred_view.display_fred_series

```python title='openbb_terminal/economy/fred_view.py'
def display_fred_series(series_ids: List[str], start_date: str, end_date: str, limit: int, get_data: bool, raw: bool, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/fred_view.py#L76)

Description: Display (multiple) series from https://fred.stlouisfed.org. [Source: FRED]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| series_ids | List[str] | FRED Series ID from https://fred.stlouisfed.org. For multiple series use: series1,series2,series3 | None | False |
| start_date | str | Starting date (YYYY-MM-DD) of data | None | False |
| end_date | str | Ending date (YYYY-MM-DD) of data | None | False |
| limit | int | Number of data points to display. | None | False |
| raw | bool | Output only raw data | None | False |
| export | str | Export data to csv,json,xlsx or png,jpg,pdf,svg file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>