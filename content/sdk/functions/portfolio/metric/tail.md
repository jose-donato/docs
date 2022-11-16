---
title: tail
description: OpenBB SDK Function
---

# tail

## openbb_terminal.portfolio.portfolio_model.get_tail_ratio

```python title='openbb_terminal/portfolio/portfolio_model.py'
def get_tail_ratio(portfolio_engine: portfolio_model.PortfolioEngine, window: int) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1303)

Description: Get tail ratio

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |
| window | int | Interval used for rolling values | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame of the portfolios and the benchmarks tail ratio during different time windows |

## Examples

