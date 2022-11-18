---
title: rot
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# rot

<Tabs>
<TabItem value="model" label="Model" default>

Get rating over time data. [Source: Finnhub]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/due_diligence/finnhub_model.py#L17)

```python
def get_rating_over_time(symbol: str) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to get ratings from | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Get dataframe with ratings |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Rating over time (monthly). [Source: Finnhub]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/due_diligence/finnhub_view.py#L75)

```python
def rating_over_time(symbol: str, limit: int, raw: bool, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| ticker | str | Ticker to get ratings from | None | False |
| limit | int | Number of last months ratings to show | None | False |
| raw | bool | Display raw data only | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>