---
title: rsort
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# rsort

<Tabs>
<TabItem value="model" label="Model" default>

Get rolling sortino

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1750)

```python
def get_rolling_sortino(portfolio_engine: portfolio_model.PortfolioEngine, risk_free_rate: float, window: str) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio | PortfolioEngine | PortfolioEngine object | None | False |
| window | str | interval for window to consider<br/>Possible options: mtd, qtd, ytd, 1d, 5d, 10d, 1m, 3m, 6m, 1y, 3y, 5y, 10y | None | False |
| risk_free_rate | float | Value to use for risk free rate in sharpe/other calculations | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Rolling sortino ratio DataFrame |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Display rolling sortino

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_view.py#L991)

```python
def display_rolling_sortino(portfolio_engine: portfolio_model.PortfolioEngine, risk_free_rate: float, window: str, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio | PortfolioEngine | PortfolioEngine object | None | False |
| risk_free_rate | float | Value to use for risk free rate in sharpe/other calculations | None | False |
| window | str | interval for window to consider | None | False |
| export | str | Export to file | None | False |
| external_axes | Optional[List[plt.Axes]] | Optional axes to display plot on | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>