---
title: maxdd
description: Display maximum drawdown curve
---
# maxdd

## portfolio_view.display_maximum_drawdown

```python
def maxdd(portfolio: openbb_terminal.portfolio.portfolio_model.PortfolioModel, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_view.py#L1021)

Description: Display maximum drawdown curve

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio | PortfolioModel | Portfolio object | None | False |
| export | str | Format to export data | None | False |
| external_axes | plt.Axes | Optional axes to display plot on | None | False |

## Returns

None

## Examples

