---
title: trackerr
description: OpenBB SDK Function
---

# trackerr

## openbb_terminal.portfolio.portfolio_model.get_tracking_error

```python title='openbb_terminal/portfolio/portfolio_model.py'
def get_tracking_error(portfolio_engine: portfolio_model.PortfolioEngine, window: int) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1238)

Description: Get tracking error

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |
| window | int | Interval used for rolling values | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame of tracking errors during different time windows |

## Examples

