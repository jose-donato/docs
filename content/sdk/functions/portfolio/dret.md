---
title: dret
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# dret

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.portfolio.portfolio_model.get_daily_returns

```python title='openbb_terminal/portfolio/portfolio_model.py'
def get_daily_returns(portfolio_engine: portfolio_model.PortfolioEngine, window: str) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L2318)

Description: Get daily returns

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |
| window | str | interval to compare cumulative returns and benchmark | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame with daily returns |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.portfolio.portfolio_view.display_daily_returns

```python title='openbb_terminal/portfolio/portfolio_view.py'
def display_daily_returns(portfolio_engine: portfolio_model.PortfolioEngine, window: str, raw: bool, limit: int, export: str, external_axes: Optional[matplotlib.axes._axes.Axes]) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_view.py#L558)

Description: Display daily returns

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |
| window | str | interval to compare cumulative returns and benchmark | None | False |
| raw | False | Display raw data from cumulative return | None | False |
| limit | int | Last daily returns to display | None | False |
| export | str | Export certain type of data | None | False |
| external_axes | plt.Axes | Optional axes to display plot on | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>