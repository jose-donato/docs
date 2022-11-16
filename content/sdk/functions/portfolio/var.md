---
title: var
description: OpenBB SDK Function
---

# var

## openbb_terminal.portfolio.portfolio_model.get_var

```python title='openbb_terminal/portfolio/portfolio_model.py'
def get_var(portfolio_engine: portfolio_model.PortfolioEngine, use_mean: bool, adjusted_var: bool, student_t: bool, percentile: float) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1945)

Description: Get portfolio VaR

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |
| use_mean | bool | if one should use the data mean return | None | False |
| adjusted_var | bool | if one should have VaR adjusted for skew and kurtosis (Cornish-Fisher-Expansion) | None | False |
| student_t | bool | If one should use the student-t distribution | None | False |
| percentile | float | var percentile (%) | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame with portfolio VaR |

## Examples

