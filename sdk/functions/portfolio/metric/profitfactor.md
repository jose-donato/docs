---
title: profitfactor
description: OpenBB SDK Function
---
# profitfactor

## portfolio_model.get_profit_factor

```python
def profitfactor(portfolio: openbb_terminal.portfolio.portfolio_model.PortfolioModel) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1320)

Description: Gets profit factor

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio | Portfolio | Portfolio object with trades loaded | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame of profit factor of the portfolio during different time periods |

## Examples
