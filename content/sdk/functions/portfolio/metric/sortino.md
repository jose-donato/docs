---
title: sortino
description: OpenBB SDK Function
---

# sortino

Method that retrieves sortino ratio for portfolio and benchmark selected

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1103)]

```python
def get_sortino_ratio(portfolio_engine: portfolio_model.PortfolioEngine, risk_free_rate: float = 0) -> pd.DataFrame
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |
| risk_free_rate | float | Risk free rate value | 0 | True |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame with sortino ratio for portfolio and benchmark for different periods |

