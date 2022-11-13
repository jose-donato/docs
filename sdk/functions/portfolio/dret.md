---
title: dret
description: Get daily returns
---
# dret

## portfolio_model.get_daily_returns

```python
def dret(portfolio: openbb_terminal.portfolio.portfolio_model.PortfolioModel, window: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1994)

Description: Get daily returns

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio | Portfolio | Portfolio object with trades loaded | None | False |
| window | str | interval to compare cumulative returns and benchmark | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | None |

## Examples

