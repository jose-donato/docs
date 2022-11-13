---
title: rsharpe
description: Display rolling sharpe
---
# rsharpe

## portfolio_view.display_rolling_sharpe

```python
def rsharpe(portfolio: openbb_terminal.portfolio.portfolio_model.PortfolioModel, risk_free_rate: float, window: str, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_view.py#L842)

Description: Display rolling sharpe

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio | PortfolioModel | Portfolio object | None | False |
| risk_free_rate | float | Value to use for risk free rate in sharpe/other calculations | None | False |
| window | str | interval for window to consider | None | False |
| export | str | Export to file | None | False |
| external_axes | Optional[List[plt.Axes]] | Optional axes to display plot on | None | False |

## Returns

None

## Examples

