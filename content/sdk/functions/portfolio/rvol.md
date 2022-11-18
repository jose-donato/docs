---
title: rvol
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# rvol

<Tabs>
<TabItem value="model" label="Model" default>

Get rolling volatility

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1664)

```python
def get_rolling_volatility(portfolio_engine: portfolio_model.PortfolioEngine, window: str) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |
| window | str | Rolling window size to use<br/>Possible options: mtd, qtd, ytd, 1d, 5d, 10d, 1m, 3m, 6m, 1y, 3y, 5y, 10y | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Display rolling volatility

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_view.py#L876)

```python
def display_rolling_volatility(portfolio_engine: portfolio_model.PortfolioEngine, window: str, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio | PortfolioEngine | PortfolioEngine object | None | False |
| interval | str | interval for window to consider | None | False |
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