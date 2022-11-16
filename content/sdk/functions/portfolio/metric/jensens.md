---
title: jensens
description: OpenBB SDK Function
---

# jensens

## openbb_terminal.portfolio.portfolio_model.get_jensens_alpha

```python title='openbb_terminal/portfolio/portfolio_model.py'
def get_jensens_alpha(portfolio_engine: portfolio_model.PortfolioEngine, risk_free_rate: float, window: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1370)

Description: Get jensen's alpha

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |
| window | str | Interval used for rolling values | None | False |
| risk_free_rate | float | Risk free rate | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame of jensens's alpha during different time windows |

## Examples

