---
title: rsquare
description: OpenBB SDK Function
---

# rsquare

## openbb_terminal.portfolio.portfolio_model.get_r2_score

```python title='openbb_terminal/portfolio/portfolio_model.py'
def get_r2_score(portfolio_engine: portfolio_model.PortfolioEngine) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L825)

Description: Method that retrieves R2 Score for portfolio and benchmark selected

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame with R2 Score between portfolio and benchmark for different periods |

## Examples

