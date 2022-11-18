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

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1664)]

```python
def get_rolling_volatility(portfolio_engine: portfolio_model.PortfolioEngine, window: str = "1y") -> pd.DataFrame
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |
| window | str | Rolling window size to use<br/>Possible options: mtd, qtd, ytd, 1d, 5d, 10d, 1m, 3m, 6m, 1y, 3y, 5y, 10y | 1y | True |

## Returns

This function does not return anything



</TabItem>
<TabItem value="view" label="View">

Display rolling volatility

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_view.py#L876)]

```python
def display_rolling_volatility(portfolio_engine: portfolio_model.PortfolioEngine, window: str = "1y", export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None) -> None
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio | PortfolioEngine | PortfolioEngine object | None | True |
| interval | str | interval for window to consider | None | True |
| export | str | Export to file |  | True |
| external_axes | Optional[List[plt.Axes]] | Optional axes to display plot on | None | True |

## Returns

This function does not return anything



</TabItem>
</Tabs>