---
title: holdp
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# holdp

<Tabs>
<TabItem value="model" label="Model" default>

Get holdings of assets (in percentage)

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1559)]

```python
def get_holdings_percentage(portfolio_engine: portfolio_model.PortfolioEngine) -> None
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |

## Returns

This function does not return anything



</TabItem>
<TabItem value="view" label="View">

Display holdings of assets (in percentage)

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_view.py#L792)]

```python
def display_holdings_percentage(portfolio_engine: portfolio_model.PortfolioEngine, unstack: bool = False, raw: bool = False, limit: int = 10, export: str = "", external_axes: Optional[matplotlib.axes._axes.Axes] = None) -> None
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |
| unstack | bool | Individual assets over time | False | True |
| raw | bool | To display raw data | False | True |
| limit | int | Number of past market days to display holdings | 10 | True |
| export | str | Format to export plot |  | True |
| external_axes | plt.Axes | Optional axes to display plot on | None | True |

## Returns

This function does not return anything



</TabItem>
</Tabs>