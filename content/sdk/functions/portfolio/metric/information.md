---
title: information
description: OpenBB SDK Function
---

# information

Get information ratio

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1271)]
```python
def get_information_ratio(portfolio_engine: portfolio_model.PortfolioEngine) -> None
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
| pd.DataFrame | DataFrame of the information ratio during different time periods |
---
