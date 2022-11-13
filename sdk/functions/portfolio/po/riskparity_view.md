---
title: riskparity
description: Builds a risk parity portfolio using the risk budgeting approach
---
# riskparity

## portfolio_optimization_optimizer_view.display_risk_parity

```python
def riskparity(symbols: List[str], interval: str, start_date: str, end_date: str, log_returns: bool, freq: str, maxnan: float, threshold: float, method: str, risk_measure: str, risk_cont: List[str], risk_free_rate: float, alpha: float, target_return: float, mean: str, covariance: str, d_ewma: float, value: float, table: bool) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/optimizer_view.py#L2301)

Description: Builds a risk parity portfolio using the risk budgeting approach

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbols | List[str] | List of portfolio tickers | None | False |
| interval | str | interval to look at returns from | None | False |
| start_date | str | If not using interval, start date string (YYYY-MM-DD) | None | False |
| end_date | str | If not using interval, end date string (YYYY-MM-DD). If empty use last
weekday. | None | False |
| log_returns | bool | If True calculate log returns, else arithmetic returns. Default value
is False | value | False |
| freq | str | The frequency used to calculate returns. Default value is 'D'. Possible
values are:
- 'D' for daily returns.
- 'W' for weekly returns.
- 'M' for monthly returns.
- X (integer days) for returns calculated every X days. | value | False |
| maxnan | float | Max percentage of nan values accepted per asset to be included in
returns. | None | False |
| threshold | float | Value used to replace outliers that are higher to threshold. | None | False |
| method | str | Method used to fill nan values. Default value is 'time'. For more information see `interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>`__. | value | False |
| risk_measure | str | The risk measure used to optimize the portfolio.
The default is 'MV'. Possible values are:

- 'MV': Standard Deviation.
- 'MAD': Mean Absolute Deviation.
- 'MSV': Semi Standard Deviation.
- 'FLPM': First Lower Partial Moment (Omega Ratio).
- 'SLPM': Second Lower Partial Moment (Sortino Ratio).
- 'CVaR': Conditional Value at Risk.
- 'EVaR': Entropic Value at Risk.
- 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.
- 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.
- 'UCI': Ulcer Index of uncompounded cumulative returns. | is | False |
| risk_cont | List[str] | The vector of risk contribution per asset. If empty, the default is
1/n (number of assets). | is | True |
| risk_free_rate | float | Risk free rate, must be in the same interval of assets returns. Used for
'FLPM' and 'SLPM' and Sharpe objective function. The default is 0. | 0 | True |
| alpha | float | Significance level of CVaR, EVaR, CDaR and EDaR | None | True |
| target_return | float | Constraint on minimum level of portfolio's return. | None | True |
| mean | str | The method used to estimate the expected returns.
The default value is 'hist'. Possible values are:

- 'hist': use historical estimates.
- 'ewma1': use ewma with adjust=True. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.
- 'ewma2': use ewma with adjust=False. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__. | value | True |
| covariance | str | The method used to estimate the covariance matrix:
The default is 'hist'. Possible values are:

- 'hist': use historical estimates.
- 'ewma1': use ewma with adjust=True. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.
- 'ewma2': use ewma with adjust=False. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.
- 'ledoit': use the Ledoit and Wolf Shrinkage method.
- 'oas': use the Oracle Approximation Shrinkage method.
- 'shrunk': use the basic Shrunk Covariance method.
- 'gl': use the basic Graphical Lasso Covariance method.
- 'jlogo': use the j-LoGo Covariance method. For more information see: `a-jLogo`.
- 'fixed': denoise using fixed method. For more information see chapter 2 of `a-MLforAM`.
- 'spectral': denoise using spectral method. For more information see chapter 2 of `a-MLforAM`.
- 'shrink': denoise using shrink method. For more information see chapter 2 of `a-MLforAM`. | is | True |
| d_ewma | float | The smoothing factor of ewma methods.
The default is 0.94. | 0.94 | True |
| value | float | Amount to allocate to portfolio, by default 1.0 | 1.0 | True |
| table | bool | True if plot table weights, by default False | False | True |

## Returns

None

## Examples

