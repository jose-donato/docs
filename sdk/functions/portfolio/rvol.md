---
title: rvol
description: Get rolling volatility
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

