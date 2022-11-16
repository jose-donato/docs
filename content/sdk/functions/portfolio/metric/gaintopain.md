---
title: gaintopain
description: OpenBB SDK Function
---

# gaintopain

## openbb_terminal.portfolio.portfolio_model.get_gaintopain_ratio

```python title='openbb_terminal/portfolio/portfolio_model.py'
def get_gaintopain_ratio(portfolio_engine: portfolio_model.PortfolioEngine) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1207)

Description: Get Pain-to-Gain ratio based on historical data

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame of the portfolio's gain-to-pain ratio |

## Examples

