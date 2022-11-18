---
title: index
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# index

<Tabs>
<TabItem value="model" label="Model" default>

Get data on selected indices over time [Source: Yahoo Finance]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/yfinance_model.py#L672)

```python
def get_indices(indices: list, interval: str, start_date: int, end_date: int, column: str, returns: bool) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| indices | list | A list of indices to get data. Available indices can be accessed through economy.available_indices(). | None | False |
| interval | str | Valid intervals: 1m,2m,5m,15m,30m,60m,90m,1h,1d,5d,1wk,1mo,3mo<br/>Intraday data cannot extend last 60 days | None | False |
| start_date | str | The starting date, format "YEAR-MONTH-DAY", i.e. 2010-12-31. | None | False |
| end_date | str | The end date, format "YEAR-MONTH-DAY", i.e. 2020-06-05. | None | False |
| column | str | Which column to load in, by default "Adjusted Close". | None | False |
| returns | bool | Flag to show cumulative returns on index | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.Dataframe | Dataframe with historical data on selected indices. |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Load (and show) the selected indices over time [Source: Yahoo Finance]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/yfinance_view.py#L30)

```python
def show_indices(indices: list, interval: str, start_date: int, end_date: int, column: str, returns: bool, raw: bool, external_axes: Optional[List[axes]], export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| indices | list | A list of indices you wish to load (and plot).<br/>Available indices can be accessed through economy.available_indices(). | None | False |
| interval | str | Valid intervals: 1m,2m,5m,15m,30m,60m,90m,1h,1d,5d,1wk,1mo,3mo<br/>Intraday data cannot extend last 60 days | None | False |
| start_date | str | The starting date, format "YEAR-MONTH-DAY", i.e. 2010-12-31. | None | False |
| end_date | str | The end date, format "YEAR-MONTH-DAY", i.e. 2020-06-05. | None | False |
| column | str | Which column to load in, by default this is the Adjusted Close. | this | False |
| returns | bool | Flag to show cumulative returns on index | None | False |
| raw | bool | Whether to display the raw output. | None | False |
| external_axes | Optional[List[plt.axes]] | External axes to plot on | None | False |
| export | str | Export data to csv,json,xlsx or png,jpg,pdf,svg file | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| Plots the Series. |  |

---

## Examples

---



</TabItem>
</Tabs>