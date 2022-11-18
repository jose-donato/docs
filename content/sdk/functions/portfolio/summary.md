---
title: summary
description: OpenBB SDK Function
---

# summary

Get portfolio and benchmark returns summary

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L2070)

```python
def get_summary(portfolio_engine: portfolio_model.PortfolioEngine, window: str, risk_free_rate: float) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |
| window | str | interval to compare cumulative returns and benchmark | None | False |
| risk_free_rate | float | Risk free rate for calculations | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame with portfolio and benchmark returns summary |

---

## Examples

---

