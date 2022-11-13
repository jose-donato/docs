---
title: dret
description: Display daily returns
---
# dret

## portfolio_view.display_daily_returns

```python
def dret(portfolio: openbb_terminal.portfolio.portfolio_model.PortfolioModel, window: str, raw: bool, limit: int, export: str, external_axes: Union[matplotlib.axes._axes.Axes, NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_view.py#L470)

Description: Display daily returns

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio | Portfolio | Portfolio object with trades loaded | None | False |
| window | str | interval to compare cumulative returns and benchmark | None | False |
| raw | False | Display raw data from cumulative return | None | False |
| limit | int | Last daily returns to display | None | False |
| export | str | Export certain type of data | None | False |
| external_axes | plt.Axes | Optional axes to display plot on | None | False |

## Returns

None

## Examples

