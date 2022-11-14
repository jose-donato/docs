---
title: maxdd
description: OpenBB SDK Function
---
# maxdd

## portfolio_model.get_maximum_drawdown

```python
def maxdd(portfolio: openbb_terminal.portfolio.portfolio_model.PortfolioModel, is_returns: bool) -> Series:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1382)

Description: Calculate the drawdown (MDD) of historical series.  Note that the calculation is done

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.Series | Series of input values | None | False |
| is_returns | bool | Flag to indicate inputs are returns | None | False |
| Returns | None | None | None | None |
| ---------- | None | None | None | None |
| pd.Series | None | Holdings series | None | None |
| pd.Series | None | Drawdown series | None | None |

## Returns

None

## Examples




# VIEW

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

