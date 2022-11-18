---
title: yf_financials
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# yf_financials

<Tabs>
<TabItem value="model" label="Model" default>

Get cashflow statement for company

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/yahoo_finance_model.py#L332)

```python
def get_financials(symbol: str, statement: str, ratios: bool) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| statement | str | can be:<br/><br/>- cash-flow<br/>- financials for Income<br/>- balance-sheet | None | False |
| ratios | bool | Shows percentage change | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of Financial statement |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Display tickers balance sheet, income statement or cash-flow

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/yahoo_finance_view.py#L381)

```python
def display_fundamentals(symbol: str, statement: str, limit: int, ratios: bool, plot: list, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| statement | str | Possible values are:<br/><br/>- cash-flow<br/>- financials for Income<br/>- balance-sheet | None | False |
| limit | int | Number of periods to show | None | False |
| ratios | bool | Shows percentage change | None | False |
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