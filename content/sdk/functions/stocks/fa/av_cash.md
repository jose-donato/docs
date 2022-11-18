---
title: av_cash
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# av_cash

<Tabs>
<TabItem value="model" label="Model" default>

Get cash flows for company

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/av_model.py#L340)

```python
def get_cash_flow(symbol: str, limit: int, quarterly: bool, ratios: bool, plot: bool) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| limit | int | Number of past to get | None | False |
| quarterly | bool | Flag to get quarterly instead of annual, by default False | False | True |
| ratios | bool | Shows percentage change, by default False | False | False |
| plot | bool | If the data shall be formatted ready to plot | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of cash flow statements |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Alpha Vantage income statement

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/av_view.py#L244)

```python
def display_cash_flow(symbol: str, limit: int, quarterly: bool, ratios: bool, plot: list, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Fundamental analysis ticker symbol | None | False |
| limit | int | Number of past statements, by default 5 | 5 | False |
| quarterly | bool | Flag to get quarterly instead of annual, by default False | False | False |
| ratios | bool | Shows percentage change, by default False | False | False |
| plot | list | List of row labels to plot | None | False |
| export | str | Format to export data | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>