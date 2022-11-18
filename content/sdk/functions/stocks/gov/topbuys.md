---
title: topbuys
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# topbuys

<Tabs>
<TabItem value="model" label="Model" default>

Get top buy government trading [Source: quiverquant.com]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_model.py#L227)

```python
def get_government_buys(gov_type: str, past_transactions_months: int) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| gov_type | str | Type of government data between: congress, senate and house | None | False |
| past_transactions_months | int | Number of months to get trading for | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame of top government buy trading |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Top buy government trading [Source: quiverquant.com]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_view.py#L79)

```python
def display_government_buys(gov_type: str, past_transactions_months: int, limit: int, raw: bool, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| gov_type | str | Type of government data between: congress, senate and house | None | False |
| past_transactions_months | int | Number of months to get trading for | None | False |
| limit | int | Number of tickers to show | None | False |
| raw | bool | Display raw data | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>