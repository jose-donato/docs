---
title: commonsense
description: OpenBB SDK Function
---

# commonsense

## openbb_terminal.portfolio.portfolio_model.get_common_sense_ratio

```python title='openbb_terminal/portfolio/portfolio_model.py'
def get_common_sense_ratio(portfolio_engine: portfolio_model.PortfolioEngine) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1338)

Description: Get common sense ratio

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame of the portfolios and the benchmarks common sense ratio during different time periods |

## Examples

