---
title: es
description: OpenBB SDK Function
---

# es

## openbb_terminal.portfolio.portfolio_model.get_es

```python title='openbb_terminal/portfolio/portfolio_model.py'
def get_es(portfolio_engine: portfolio_model.PortfolioEngine, use_mean: bool, distribution: str, percentile: float) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1992)

Description: Get portfolio expected shortfall

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |
| use_mean |  | if one should use the data mean return | None | False |
| distribution | str | choose distribution to use: logistic, laplace, normal | None | False |
| percentile | float | es percentile (%) | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame with portfolio expected shortfall |

## Examples

