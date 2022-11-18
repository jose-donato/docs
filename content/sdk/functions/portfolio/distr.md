---
title: distr
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# distr

<Tabs>
<TabItem value="model" label="Model" default>

Display daily returns

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1629)

```python
def get_distribution_returns(portfolio_engine: portfolio_model.PortfolioEngine, window: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |
| window | str | interval to compare cumulative returns and benchmark | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Display daily returns

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_view.py#L626)

```python
def display_distribution_returns(portfolio_engine: portfolio_model.PortfolioEngine, window: str, raw: bool, export: str, external_axes: Optional[matplotlib.axes._axes.Axes]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_returns | pd.Series | Returns of the portfolio | None | False |
| benchmark_returns | pd.Series | Returns of the benchmark | None | False |
| interval | str | interval to compare cumulative returns and benchmark | None | False |
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