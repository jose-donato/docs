---
title: ef
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ef

<Tabs>
<TabItem value="model" label="Model" default>

Get efficient frontier

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/optimizer_model.py#L1514)]

```python
def get_ef(symbols: List[str], interval: str = "3y", start_date: str = "", end_date: str = "", log_returns: bool = False, freq: str = "D", maxnan: float = 0.05, threshold: float = 0, method: str = "time", risk_measure: str = "MV", risk_free_rate: float = 0, alpha: float = 0.05, value: float = 1.0, value_short: float = 0.0, n_portfolios: int = 100, seed: int = 123) -> Tuple[pd.DataFrame, pd.DataFrame, pd.DataFrame, pd.DataFrame, Optional[pd.DataFrame], numpy.ndarray[Any, numpy.dtype[numpy.floating]], numpy.ndarray[Any, numpy.dtype[numpy.floating]], riskfolio.Portfolio.Portfolio]
```
---
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbols | List[str] | List of portfolio tickers | None | False |
| interval | str | interval to look at returns from | 3y | True |
| start_date | str | If not using interval, start date string (YYYY-MM-DD) |  | True |
| end_date | str | If not using interval, end date string (YYYY-MM-DD). If empty use last<br/>weekday. |  | True |
| log_returns | bool | If True calculate log returns, else arithmetic returns. Default value<br/>is False | False | True |
| freq | str | The frequency used to calculate returns. Default value is 'D'. Possible<br/>values are:<br/><br/>- 'D' for daily returns.<br/>- 'W' for weekly returns.<br/>- 'M' for monthly returns. | D | True |
| maxnan | float | Max percentage of nan values accepted per asset to be included in<br/>returns. | 0.05 | True |
| threshold | float | Value used to replace outliers that are higher to threshold. | 0 | True |
| method | str | Method used to fill nan values. Default value is 'time'. For more information see `interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>`__. | time | True |
| risk_measure | str | The risk measure used to optimize the portfolio.<br/>The default is 'MV'. Possible values are:<br/><br/>- 'MV': Standard Deviation.<br/>- 'MAD': Mean Absolute Deviation.<br/>- 'MSV': Semi Standard Deviation.<br/>- 'FLPM': First Lower Partial Moment (Omega Ratio).<br/>- 'SLPM': Second Lower Partial Moment (Sortino Ratio).<br/>- 'CVaR': Conditional Value at Risk.<br/>- 'EVaR': Entropic Value at Risk.<br/>- 'WR': Worst Realization.<br/>- 'ADD': Average Drawdown of uncompounded cumulative returns.<br/>- 'UCI': Ulcer Index of uncompounded cumulative returns.<br/>- 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.<br/>- 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.<br/>- 'MDD': Maximum Drawdown of uncompounded cumulative returns. | MV | True |
| risk_free_rate | float | Risk free rate, must be in the same interval of assets returns. Used for<br/>'FLPM' and 'SLPM' and Sharpe objective function. The default is 0. | 0 | True |
| alpha | float | Significance level of CVaR, EVaR, CDaR and EDaR<br/>The default is 0.05. | 0.05 | True |
| value | float | Amount to allocate to portfolio in long positions, by default 1.0 | 1.0 | True |
| value_short | float | Amount to allocate to portfolio in short positions, by default 0.0 | 0.0 | True |
| n_portfolios | int | "Number of portfolios to simulate. The default value is 100. | 100 | True |
| seed | int | Seed used to generate random portfolios. The default value is 123. | 123 | True |

---
## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[ | pd.DataFrame,<br/>pd.DataFrame,<br/>pd.DataFrame,<br/>pd.DataFrame,<br/>Optional[pd.DataFrame],<br/>NDArray[floating],<br/>NDArray[floating],<br/>rp.Portfolio, |

---


</TabItem>
<TabItem value="view" label="View">

Display efficient frontier

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/optimizer_view.py#L2074)]

```python
def display_ef(symbols: List[str], interval: str = "3y", start_date: str = "", end_date: str = "", log_returns: bool = False, freq: str = "D", maxnan: float = 0.05, threshold: float = 0, method: str = "time", risk_measure: str = "MV", risk_free_rate: float = 0, alpha: float = 0.05, value: float = 1.0, value_short: float = 0.0, n_portfolios: int = 100, seed: int = 123, tangency: bool = False, plot_tickers: bool = True, external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None) -> None
```
---
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbols | List[str] | List of portfolio tickers | None | False |
| interval | str | interval to look at returns from | 3y | True |
| start_date | str | If not using interval, start date string (YYYY-MM-DD) |  | True |
| end_date | str | If not using interval, end date string (YYYY-MM-DD). If empty use last<br/>weekday. |  | True |
| log_returns | bool | If True calculate log returns, else arithmetic returns. Default value<br/>is False | False | True |
| freq | str | The frequency used to calculate returns. Default value is 'D'. Possible<br/>values are:<br/>- 'D' for daily returns.<br/>- 'W' for weekly returns.<br/>- 'M' for monthly returns. | D | True |
| maxnan | float | Max percentage of nan values accepted per asset to be included in<br/>returns. | 0.05 | True |
| threshold | float | Value used to replace outliers that are higher to threshold. | 0 | True |
| method | str | Method used to fill nan values. Default value is 'time'. For more information see `interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>`__. | time | True |
| risk_measure | str | The risk measure used to optimize the portfolio.<br/>The default is 'MV'. Possible values are:<br/><br/>- 'MV': Standard Deviation.<br/>- 'MAD': Mean Absolute Deviation.<br/>- 'MSV': Semi Standard Deviation.<br/>- 'FLPM': First Lower Partial Moment (Omega Ratio).<br/>- 'SLPM': Second Lower Partial Moment (Sortino Ratio).<br/>- 'CVaR': Conditional Value at Risk.<br/>- 'EVaR': Entropic Value at Risk.<br/>- 'WR': Worst Realization.<br/>- 'ADD': Average Drawdown of uncompounded cumulative returns.<br/>- 'UCI': Ulcer Index of uncompounded cumulative returns.<br/>- 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.<br/>- 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.<br/>- 'MDD': Maximum Drawdown of uncompounded cumulative returns. | MV | True |
| risk_free_rate | float | Risk free rate, must be in the same interval of assets returns. Used for<br/>'FLPM' and 'SLPM' and Sharpe objective function. The default is 0. | 0 | True |
| alpha | float | Significance level of CVaR, EVaR, CDaR and EDaR<br/>The default is 0.05. | 0.05 | True |
| value | float | Amount to allocate to portfolio in long positions, by default 1.0 | 1.0 | True |
| value_short | float | Amount to allocate to portfolio in short positions, by default 0.0 | 0.0 | True |
| n_portfolios | int | "Number of portfolios to simulate. The default value is 100. | 100 | True |
| seed | int | Seed used to generate random portfolios. The default value is 123. | 123 | True |
| tangency | bool | Adds the optimal line with the risk-free asset. | False | True |
| external_axes | Optional[List[plt.Axes]] | Optional axes to plot data on | None | True |
| plot_tickers | bool | Whether to plot the tickers for the assets | True | True |

---
## Returns

This function does not return anything

---


</TabItem>
</Tabs>