---
title: sharpe
description: OpenBB SDK Function
---

# sharpe

## openbb_terminal.portfolio.portfolio_model.get_sharpe_ratio

```python title='openbb_terminal/portfolio/portfolio_model.py'
def get_sharpe_ratio(portfolio_engine: portfolio_model.PortfolioEngine, risk_free_rate: float) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1048)

Description: Method that retrieves sharpe ratio for portfolio and benchmark selected

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |
| risk_free_rate | float | Risk free rate value | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame with sharpe ratio for portfolio and benchmark for different periods |

## Examples

