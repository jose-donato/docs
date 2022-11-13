# rsort

## portfolio_model.get_rolling_sortino

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1511)

Description: Get rolling sortino

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio | PortfolioModel | Portfolio object | None | False |
| window | str | interval for window to consider
Possible options: mtd, qtd, ytd, 1d, 5d, 10d, 1m, 3m, 6m, 1y, 3y, 5y, 10y | None | False |
| risk_free_rate | float | Value to use for risk free rate in sharpe/other calculations | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Rolling sortino ratio DataFrame |

## Examples

