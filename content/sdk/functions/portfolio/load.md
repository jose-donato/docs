---
title: load
description: OpenBB SDK Function
---

# load

## openbb_terminal.portfolio.portfolio_model.generate_portfolio

```python title='openbb_terminal/portfolio/portfolio_model.py'
def generate_portfolio(transactions_file_path: str, benchmark_symbol: str, full_shares: bool, risk_free_rate: float) -> PortfolioEngine
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L2360)

Description: Get PortfolioEngine object

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| transactions_file_path | str | Path to transactions file | None | False |
| benchmark_symbol | str | Benchmark ticker to download data | None | False |
| full_shares | bool | Whether to mimic the portfolio trades exactly (partial shares) or round down the<br/>quantity to the nearest number | None | False |
| risk_free_rate | float | Risk free rate in float format | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations |

## Examples

