---
title: rbeta
description: OpenBB SDK Function
---
# rbeta

## portfolio_model.get_rolling_beta

```python
def rbeta(portfolio: openbb_terminal.portfolio.portfolio_model.PortfolioModel, window: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1552)

Description: Get rolling beta using portfolio and benchmark returns

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio | PortfolioModel | Portfolio object | None | False |
| window | string | Interval used for rolling values.
Possible options: mtd, qtd, ytd, 1d, 5d, 10d, 1m, 3m, 6m, 1y, 3y, 5y, 10y. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame of the portfolio's rolling beta |

## Examples




# VIEW

# rbeta

## portfolio_view.display_rolling_beta

```python
def rbeta(portfolio: openbb_terminal.portfolio.portfolio_model.PortfolioModel, window: str, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_view.py#L960)

Description: Display rolling beta

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio | PortfolioModel | Portfolio object | None | False |
| window | str | interval for window to consider
Possible options: mtd, qtd, ytd, 1d, 5d, 10d, 1m, 3m, 6m, 1y, 3y, 5y, 10y. | None | False |
| export | str | Export to file | None | False |
| external_axes | Optional[List[plt.Axes]] | Optional axes to display plot on | None | False |

## Returns

None

## Examples

