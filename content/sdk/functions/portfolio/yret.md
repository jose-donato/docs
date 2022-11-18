---
title: yret
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# yret

<Tabs>
<TabItem value="model" label="Model" default>

Get yearly returns

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L2148)

```python
def get_yearly_returns(portfolio_engine: portfolio_model.PortfolioEngine, window: str) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |
| window | str | interval to compare cumulative returns and benchmark | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame with yearly returns |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Display yearly returns

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_view.py#L376)

```python
def display_yearly_returns(portfolio_engine: portfolio_model.PortfolioEngine, window: str, raw: bool, export: str, external_axes: Optional[matplotlib.axes._axes.Axes]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |
| window | str | interval to compare cumulative returns and benchmark | None | False |
| raw | False | Display raw data from cumulative return | None | False |
| export | str | Export certain type of data | None | False |
| external_axes | plt.Axes | Optional axes to display plot on | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>