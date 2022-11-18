---
title: rsharpe
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# rsharpe

<Tabs>
<TabItem value="model" label="Model" default>

Get rolling sharpe ratio

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1704)

```python
def get_rolling_sharpe(portfolio_engine: pd.DataFrame, risk_free_rate: float, window: str) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_returns | pd.Series | Series of portfolio returns | None | False |
| risk_free_rate | float | Risk free rate | None | False |
| window | str | Rolling window to use<br/>Possible options: mtd, qtd, ytd, 1d, 5d, 10d, 1m, 3m, 6m, 1y, 3y, 5y, 10y | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Rolling sharpe ratio DataFrame |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Display rolling sharpe

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_view.py#L932)

```python
def display_rolling_sharpe(portfolio_engine: portfolio_model.PortfolioEngine, risk_free_rate: float, window: str, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
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