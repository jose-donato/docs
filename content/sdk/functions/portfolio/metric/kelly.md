---
title: kelly
description: OpenBB SDK Function
---

# kelly

## openbb_terminal.portfolio.portfolio_model.get_kelly_criterion

```python title='openbb_terminal/portfolio/portfolio_model.py'
def get_kelly_criterion(portfolio_engine: portfolio_model.PortfolioEngine) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1449)

Description: Gets kelly criterion

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame of kelly criterion of the portfolio during different time periods |

## Examples

