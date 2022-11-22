---
title: show
description: OpenBB SDK Function
---

# show

Get portfolio transactions

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L68)]

```python
openbb.portfolio.show(portfolio_engine: portfolio_engine.PortfolioEngine)
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
| pd.DataFrame | Portfolio transactions |
---

