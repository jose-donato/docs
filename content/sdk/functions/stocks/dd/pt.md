---
title: pt
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# pt

<Tabs>
<TabItem value="model" label="Model" default>

Get analysts' price targets for a given stock. [Source: Business Insider]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/due_diligence/business_insider_model.py#L20)

```python
def get_price_target_from_analysts(symbol: str) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Analysts data |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Display analysts' price targets for a given stock. [Source: Business Insider]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/due_diligence/business_insider_view.py#L31)

```python
def price_target_from_analysts(symbol: str, data: pd.DataFrame, start_date: str, limit: int, raw: bool, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Due diligence ticker symbol | None | False |
| data | DataFrame | Due diligence stock dataframe | None | False |
| start_date | str | Start date of the stock data, format YYYY-MM-DD | None | False |
| limit | int | Number of latest price targets from analysts to print | None | False |
| raw | bool | Display raw data only | None | False |
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