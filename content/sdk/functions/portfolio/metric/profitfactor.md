---
title: profitfactor
description: OpenBB SDK Function
---

# profitfactor

## openbb_terminal.portfolio.portfolio_model.get_profit_factor

```python title='openbb_terminal/portfolio/portfolio_model.py'
def get_profit_factor(portfolio_engine: portfolio_model.PortfolioEngine) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1501)

Description: Gets profit factor

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame of profit factor of the portfolio during different time periods |

## Examples

