---
title: jensens
description: OpenBB SDK Function
---

# jensens

Get jensen's alpha

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1370)

```python
def get_jensens_alpha(portfolio_engine: portfolio_model.PortfolioEngine, risk_free_rate: float, window: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PortfolioEngine | PortfolioEngine class instance, this will hold transactions and perform calculations.<br/>Use `portfolio.load` to create a PortfolioEngine. | None | False |
| window | str | Interval used for rolling values | None | False |
| risk_free_rate | float | Risk free rate | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame of jensens's alpha during different time windows |

---

## Examples

---

