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

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1559)

```python
def get_holdings_percentage(portfolio_engine: portfolio_model.PortfolioEngine) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Display holdings of assets (in percentage)

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_view.py#L792)

```python
def display_holdings_percentage(portfolio_engine: portfolio_model.PortfolioEngine, unstack: bool, raw: bool, limit: int, export: str, external_axes: Optional[matplotlib.axes._axes.Axes]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |
| unstack | bool | Individual assets over time | None | False |
| raw | bool | To display raw data | None | False |
| limit | int | Number of past market days to display holdings | None | False |
| export | str | Format to export plot | None | False |
| external_axes | plt.Axes | Optional axes to display plot on | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>