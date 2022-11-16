---
title: holdv
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# holdv

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.portfolio.portfolio_model.get_holdings_value

```python title='openbb_terminal/portfolio/portfolio_model.py'
def get_holdings_value(portfolio_engine: portfolio_model.PortfolioEngine) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1527)

Description: Get holdings of assets (absolute value)

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame of holdings |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.portfolio.portfolio_view.display_holdings_value

```python title='openbb_terminal/portfolio/portfolio_view.py'
def display_holdings_value(portfolio_engine: portfolio_model.PortfolioEngine, unstack: bool, raw: bool, limit: int, export: str, external_axes: Optional[matplotlib.axes._axes.Axes]) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_view.py#L714)

Description: Display holdings of assets (absolute value)

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |
| unstack | bool | Individual assets over time | None | False |
| raw | bool | To display raw data | None | False |
| limit | int | Number of past market days to display holdings | None | False |
| export | str | Format to export plot | None | False |
| external_axes | plt.Axes | Optional axes to display plot on | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>