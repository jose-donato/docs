---
title: kelly
description: OpenBB SDK Function
---

# kelly

Gets kelly criterion

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1449)]

```python
def get_kelly_criterion(portfolio_engine: portfolio_model.PortfolioEngine) -> None
```
---
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |

---
## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame of kelly criterion of the portfolio during different time periods |

---
