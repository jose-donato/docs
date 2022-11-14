---
title: rvol
description: OpenBB SDK Function
---
# rvol

## portfolio_model.get_rolling_volatility

```python
def rvol(portfolio: openbb_terminal.portfolio.portfolio_model.PortfolioModel, window: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1440)

Description: Get rolling volatility

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio | Portfolio | Portfolio object with trades loaded | None | False |
| window | str | Rolling window size to use
Possible options: mtd, qtd, ytd, 1d, 5d, 10d, 1m, 3m, 6m, 1y, 3y, 5y, 10y | None | False |

## Returns

None

## Examples




# VIEW

# rvol

## portfolio_view.display_rolling_volatility

```python
def rvol(portfolio: openbb_terminal.portfolio.portfolio_model.PortfolioModel, window: str, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_view.py#L786)

Description: Display rolling volatility

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio | PortfolioModel | Portfolio object | None | False |
| interval | str | interval for window to consider | None | False |
| export | str | Export to file | None | False |
| external_axes | Optional[List[plt.Axes]] | Optional axes to display plot on | None | False |

## Returns

None

## Examples

