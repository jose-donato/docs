---
title: distr
description: Display daily returns
---
# distr

## portfolio_view.display_distribution_returns

```python
def distr(portfolio: openbb_terminal.portfolio.portfolio_model.PortfolioModel, window: str, raw: bool, export: str, external_axes: Union[matplotlib.axes._axes.Axes, NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_view.py#L538)

Description: Display daily returns

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_returns | pd.Series | Returns of the portfolio | None | False |
| benchmark_returns | pd.Series | Returns of the benchmark | None | False |
| interval | str | interval to compare cumulative returns and benchmark | None | False |
| raw | False | Display raw data from cumulative return | None | False |
| export | str | Export certain type of data | None | False |
| external_axes | plt.Axes | Optional axes to display plot on | None | False |

## Returns

None

## Examples

