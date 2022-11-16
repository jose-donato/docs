---
title: perf
description: OpenBB SDK Function
---

# perf

## openbb_terminal.portfolio.portfolio_model.get_performance_vs_benchmark

```python title='openbb_terminal/portfolio/portfolio_model.py'
def get_performance_vs_benchmark(portfolio_engine: portfolio_model.PortfolioEngine, show_all_trades: bool) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1833)

Description: Get portfolio performance vs the benchmark

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |
| show_all_trades | bool | Whether to also show all trades made and their performance (default is False) | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame with portfolio performance vs the benchmark |

## Examples

