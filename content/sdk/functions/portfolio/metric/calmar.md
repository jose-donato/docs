---
title: calmar
description: OpenBB SDK Function
---

# calmar

## openbb_terminal.portfolio.portfolio_model.get_calmar_ratio

```python title='openbb_terminal/portfolio/portfolio_model.py'
def get_calmar_ratio(portfolio_engine: portfolio_model.PortfolioEngine, window: int) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1412)

Description: Get calmar ratio

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |
| window | int | Interval used for rolling values | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame of calmar ratio of the benchmark and portfolio during different time periods |

## Examples

