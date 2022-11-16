---
title: sortino
description: OpenBB SDK Function
---

# sortino

## openbb_terminal.portfolio.portfolio_model.get_sortino_ratio

```python title='openbb_terminal/portfolio/portfolio_model.py'
def get_sortino_ratio(portfolio_engine: portfolio_model.PortfolioEngine, risk_free_rate: float) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1103)

Description: Method that retrieves sortino ratio for portfolio and benchmark selected

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |
| risk_free_rate | float | Risk free rate value | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame with sortino ratio for portfolio and benchmark for different periods |

## Examples

