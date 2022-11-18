---
title: maxdd
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# maxdd

<Tabs>
<TabItem value="model" label="Model" default>

Calculate the drawdown (MDD) of historical series.  Note that the calculation is done

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1590)]

```python
def get_maximum_drawdown(portfolio_engine: portfolio_model.PortfolioEngine, is_returns: bool = False) -> pd.Series
```
---
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.Series | Series of input values | None | True |
| is_returns | bool | Flag to indicate inputs are returns | False | True |

---
## Returns

| Type | Description |
| ---- | ----------- |
| pd.Series | Holdings series |

---


</TabItem>
<TabItem value="view" label="View">

Display maximum drawdown curve

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_view.py#L1111)]

```python
def display_maximum_drawdown(portfolio_engine: portfolio_model.PortfolioEngine, export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None) -> None
```
---
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio | PortfolioEngine | PortfolioEngine object | None | True |
| export | str | Format to export data |  | True |
| external_axes | plt.Axes | Optional axes to display plot on | None | True |

---
## Returns

This function does not return anything

---


</TabItem>
</Tabs>