---
title: riskparity
description: OpenBB SDK Function
---

# riskparity

Optimize with Risk Parity using the risk budgeting approach

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/po_model.py#L1228)]

```python
openbb.portfolio.po.riskparity(portfolio_engine: portfolio_optimization.po_engine.PoEngine = None, symbols: List[str] = None, kwargs: Any)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| portfolio_engine | PoEngine | Portfolio optimization engine, by default None<br/>Use `portfolio.po.load` to load a portfolio engine | None | True |
| symbols | List[str] | List of symbols, by default None | None | True |
| interval | str | Interval to get data, by default '3y' | None | True |
| start_date | str | If not using interval, start date string (YYYY-MM-DD), by default "" | None | True |
| end_date | str | If not using interval, end date string (YYYY-MM-DD). If empty use last weekday, by default "" | None | True |
| log_returns | bool | If True use log returns, else arithmetic returns, by default False | None | True |
| freq | str | Frequency of returns, by default 'D'. Options: 'D' for daily, 'W' for weekly, 'M' for monthly | None | True |
| maxnan | float | Maximum percentage of NaNs allowed in the data, by default 0.05 | None | True |
| threshold | float | Value used to replace outliers that are higher than threshold, by default 0.0 | None | True |
| method | str | Method used to fill nan values, by default 'time'<br/>For more information see `interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>`__. | None | True |
| value | float | Amount to allocate to portfolio in long positions, by default 1.0 | None | True |
| risk_measure | str | The risk measure used to optimize the portfolio, by default 'MV'<br/>Possible values are:<br/><br/>- 'MV': Standard Deviation.<br/>- 'MAD': Mean Absolute Deviation.<br/>- 'MSV': Semi Standard Deviation.<br/>- 'FLPM': First Lower Partial Moment (Omega Ratio).<br/>- 'SLPM': Second Lower Partial Moment (Sortino Ratio).<br/>- 'CVaR': Conditional Value at Risk.<br/>- 'EVaR': Entropic Value at Risk.<br/>- 'WR': Worst Realization.<br/>- 'ADD': Average Drawdown of uncompounded cumulative returns.<br/>- 'UCI': Ulcer Index of uncompounded cumulative returns.<br/>- 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.<br/>- 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.<br/>- 'MDD': Maximum Drawdown of uncompounded cumulative returns. | None | True |
| risk_free_rate | float | Risk free rate, annualized. Used for 'FLPM' and 'SLPM' and Sharpe objective function, by default 0.0 | None | True |
| alpha | float | Significance level of VaR, CVaR, EDaR, DaR, CDaR, EDaR, Tail Gini of losses, by default 0.05 | None | True |
| target_return | float | Constraint on minimum level of portfolio's return, by default -1.0 | None | True |
| mean | str | The method used to estimate the expected returns, by default 'hist'<br/>Possible values are:<br/><br/>- 'hist': use historical estimates.<br/>- 'ewma1': use ewma with adjust=True. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.<br/>- 'ewma2': use ewma with adjust=False. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__. | None | True |
| covariance | str | The method used to estimate the covariance matrix, by default 'hist'<br/>Possible values are:<br/><br/>- 'hist': use historical estimates.<br/>- 'ewma1': use ewma with adjust=True. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.<br/>- 'ewma2': use ewma with adjust=False. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.<br/>- 'ledoit': use the Ledoit and Wolf Shrinkage method.<br/>- 'oas': use the Oracle Approximation Shrinkage method.<br/>- 'shrunk': use the basic Shrunk Covariance method.<br/>- 'gl': use the basic Graphical Lasso Covariance method.<br/>- 'jlogo': use the j-LoGo Covariance method. For more information see: `a-jLogo`.<br/>- 'fixed': denoise using fixed method. For more information see chapter 2 of `a-MLforAM`.<br/>- 'spectral': denoise using spectral method. For more information see chapter 2 of `a-MLforAM`.<br/>- 'shrink': denoise using shrink method. For more information see chapter 2 of `a-MLforAM`. | None | True |
| d_ewma | float | The smoothing factor of ewma methods, by default 0.94 | None | True |
| risk_cont | List[str] | The vector of risk contribution per asset, by default 1/n (number of assets) | None | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[pd.DataFrame, Dict] | Tuple with weights and performance dictionary |
---

## Examples
(        value
 AAPL  0.33201
 MSFT  0.34953
 AMZN  0.31846,
 {'Return': 0.19946644069106015,
  'Volatility': 0.29074583524705444,
  'Sharpe ratio': 0.6860508956957826})

```python
from openbb_terminal.sdk import openbb
openbb.portfolio.po.riskparity(symbols=["AAPL", "MSFT", "AMZN"])
```

---

