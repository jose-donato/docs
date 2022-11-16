---
title: mt
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# mt

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.cryptocurrency.due_diligence.messari_model.get_messari_timeseries

```python title='openbb_terminal/cryptocurrency/due_diligence/messari_model.py'
def get_messari_timeseries(symbol: str, timeseries_id: str, interval: str, start_date: str, end_date: str) -> Tuple
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/messari_model.py#L124)

Description: Returns messari timeseries

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Crypto symbol to check messari timeseries | None | False |
| timeseries_id | str | Messari timeserie id | None | False |
| interval | str | Interval frequency (possible values are: 5m, 15m, 30m, 1h, 1d, 1w) | None | False |
| start | int | Initial date like string (e.g., 2021-10-01) | None | False |
| end | int | End date like string (e.g., 2021-10-01) | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[pd.DataFrame, str] | Messari timeseries over time,<br/>Timeseries title |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.cryptocurrency.due_diligence.messari_view.display_messari_timeseries

```python title='openbb_terminal/cryptocurrency/due_diligence/messari_view.py'
def display_messari_timeseries(symbol: str, timeseries_id: str, start_date: str, end_date: str, interval: str, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/messari_view.py#L103)

Description: Plots messari timeseries

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Crypto symbol to check market cap dominance | None | False |
| timeseries_id | str | Obtained by api.crypto.dd.get_mt command | None | False |
| start_date | int | Initial date like string (e.g., 2021-10-01) | None | False |
| end_date | int | End date like string (e.g., 2021-10-01) | None | False |
| interval | str | Interval frequency (possible values are: 5m, 15m, 30m, 1h, 1d, 1w) | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>