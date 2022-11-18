---
title: poly_financials
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# poly_financials

<Tabs>
<TabItem value="model" label="Model" default>

Get ticker financial statements from polygon

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/polygon_model.py#L17)

```python
def get_financials(symbol: str, statement: str, quarterly: bool, ratios: bool) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| statement | str | Financial statement data to retrieve, can be balance, income or cash | None | False |
| quarterly | bool | Flag to get quarterly reports, by default False | False | False |
| ratios | bool | Shows percentage change, by default False | False | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Balance Sheets or Income Statements |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Display tickers balance sheet or income statement

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/polygon_view.py#L26)

```python
def display_fundamentals(symbol: str, statement: str, limit: int, quarterly: bool, ratios: bool, plot: list, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| statement | str | Either balance or income | None | False |
| limit | int | Number of results to show, by default 10 | 10 | False |
| quarterly | bool | Flag to get quarterly reports, by default False | False | False |
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