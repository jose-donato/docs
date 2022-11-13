# rsharpe

## portfolio_model.get_rolling_sharpe

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1471)

Description: Get rolling sharpe ratio

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_returns | pd.Series | Series of portfolio returns | None | False |
| risk_free_rate | float | Risk free rate | None | False |
| window | str | Rolling window to use
Possible options: mtd, qtd, ytd, 1d, 5d, 10d, 1m, 3m, 6m, 1y, 3y, 5y, 10y | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Rolling sharpe ratio DataFrame |

## Examples

