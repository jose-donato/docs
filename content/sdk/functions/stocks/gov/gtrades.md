---
title: gtrades
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# gtrades

<Tabs>
<TabItem value="model" label="Model" default>

Government trading for specific ticker [Source: quiverquant.com]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_model.py#L416)

```python
def get_cleaned_government_trading(symbol: str, gov_type: str, past_transactions_months: int) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to get congress trading data from | None | False |
| gov_type | str | Type of government data between: congress, senate and house | None | False |
| past_transactions_months | int | Number of months to get transactions for | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame of tickers government trading |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Government trading for specific ticker [Source: quiverquant.com]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_view.py#L331)

```python
def display_government_trading(symbol: str, gov_type: str, past_transactions_months: int, raw: bool, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to get congress trading data from | None | False |
| gov_type | str | Type of government data between: congress, senate and house | None | False |
| past_transactions_months | int | Number of months to get transactions for | None | False |
| raw | bool | Show raw output of trades | None | False |
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