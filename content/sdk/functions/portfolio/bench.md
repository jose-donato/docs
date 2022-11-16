---
title: bench
description: OpenBB SDK Function
---

# bench

## openbb_terminal.portfolio.portfolio_model.set_benchmark

```python title='openbb_terminal/portfolio/portfolio_model.py'
def set_benchmark(portfolio_engine: portfolio_model.PortfolioEngine, symbol: str, full_shares: bool) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L2425)

Description: Load benchmark into portfolio

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine object | None | False |
| symbol | str | Benchmark symbol to download data | None | False |
| full_shares | bool | Whether to mimic the portfolio trades exactly (partial shares) or round down the<br/>quantity to the nearest number | None | False |

## Returns

This function does not return anything

## Examples

