---
title: information
description: OpenBB SDK Function
---

# information

## openbb_terminal.portfolio.portfolio_model.get_information_ratio

```python title='openbb_terminal/portfolio/portfolio_model.py'
def get_information_ratio(portfolio_engine: portfolio_model.PortfolioEngine) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1271)

Description: Get information ratio

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame of the information ratio during different time periods |

## Examples

