---
title: perf
description: Get portfolio performance vs the benchmark
---
# perf

## portfolio_model.get_performance_vs_benchmark

```python
def perf(portfolio: openbb_terminal.portfolio.portfolio_model.PortfolioModel, show_all_trades: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1580)

Description: Get portfolio performance vs the benchmark

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio | Portfolio | Portfolio object with trades loaded | None | False |
| show_all_trades | bool | Whether to also show all trades made and their performance (default is False) | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | None |

## Examples

