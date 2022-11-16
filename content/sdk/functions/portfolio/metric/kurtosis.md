---
title: kurtosis
description: OpenBB SDK Function
---

# kurtosis

## openbb_terminal.portfolio.portfolio_model.get_kurtosis

```python title='openbb_terminal/portfolio/portfolio_model.py'
def get_kurtosis(portfolio_engine: portfolio_model.PortfolioEngine) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L912)

Description: Method that retrieves kurtosis for portfolio and benchmark selected

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame with kurtosis for portfolio and benchmark for different periods |

## Examples

