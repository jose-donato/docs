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

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/optimizer_model.py#L1514)

```python
def get_ef(symbols: List[str], interval: str, start_date: str, end_date: str, log_returns: bool, freq: str, maxnan: float, threshold: float, method: str, risk_measure: str, risk_free_rate: float, alpha: float, value: float, value_short: float, n_portfolios: int, seed: int) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbols | List[str] | List of portfolio tickers | None | False |
| interval | str | interval to look at returns from | None | True |
| start_date | str | If not using interval, start date string (YYYY-MM-DD) | None | True |
| end_date | str | If not using interval, end date string (YYYY-MM-DD). If empty use last<br/>weekday. | None | True |
| log_returns | bool | If True calculate log returns, else arithmetic returns. Default value<br/>is False | value | True |
| freq | str | The frequency used to calculate returns. Default value is 'D'. Possible<br/>values are:<br/><br/>- 'D' for daily returns.<br/>- 'W' for weekly returns.<br/>- 'M' for monthly returns. | value | True |
| maxnan | float | Max percentage of nan values accepted per asset to be included in<br/>returns. | None | True |
| threshold | float | Value used to replace outliers that are higher to threshold. | None | True |
| method | str | Method used to fill nan values. Default value is 'time'. For more information see `interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>`__. | value | False |
| risk_measure | str | The risk measure used to optimize the portfolio.<br/>The default is 'MV'. Possible values are:<br/><br/>- 'MV': Standard Deviation.<br/>- 'MAD': Mean Absolute Deviation.<br/>- 'MSV': Semi Standard Deviation.<br/>- 'FLPM': First Lower Partial Moment (Omega Ratio).<br/>- 'SLPM': Second Lower Partial Moment (Sortino Ratio).<br/>- 'CVaR': Conditional Value at Risk.<br/>- 'EVaR': Entropic Value at Risk.<br/>- 'WR': Worst Realization.<br/>- 'ADD': Average Drawdown of uncompounded cumulative returns.<br/>- 'UCI': Ulcer Index of uncompounded cumulative returns.<br/>- 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.<br/>- 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.<br/>- 'MDD': Maximum Drawdown of uncompounded cumulative returns. | is | True |
| risk_free_rate | float | Risk free rate, must be in the same interval of assets returns. Used for<br/>'FLPM' and 'SLPM' and Sharpe objective function. The default is 0. | 0 | True |
| alpha | float | Significance level of CVaR, EVaR, CDaR and EDaR<br/>The default is 0.05. | 0.05 | True |
| value | float | Amount to allocate to portfolio in long positions, by default 1.0 | 1.0 | True |
| value_short | float | Amount to allocate to portfolio in short positions, by default 0.0 | 0.0 | True |
| n_portfolios | int | "Number of portfolios to simulate. The default value is 100. | value | True |
| seed | int | Seed used to generate random portfolios. The default value is 123. | value | True |

---

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[ | pd.DataFrame,<br/>pd.DataFrame,<br/>pd.DataFrame,<br/>pd.DataFrame,<br/>Optional[pd.DataFrame],<br/>NDArray[floating],<br/>NDArray[floating],<br/>rp.Portfolio, |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Display efficient frontier

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/optimizer_view.py#L2074)

```python
def display_ef(symbols: List[str], interval: str, start_date: str, end_date: str, log_returns: bool, freq: str, maxnan: float, threshold: float, method: str, risk_measure: str, risk_free_rate: float, alpha: float, value: float, value_short: float, n_portfolios: int, seed: int, tangency: bool, plot_tickers: bool, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbols | List[str] | List of portfolio tickers | None | False |
| interval | str | interval to look at returns from | None | True |
| start_date | str | If not using interval, start date string (YYYY-MM-DD) | None | True |
| end_date | str | If not using interval, end date string (YYYY-MM-DD). If empty use last<br/>weekday. | None | True |
| log_returns | bool | If True calculate log returns, else arithmetic returns. Default value<br/>is False | value | True |
| freq | str | The frequency used to calculate returns. Default value is 'D'. Possible<br/>values are:<br/>- 'D' for daily returns.<br/>- 'W' for weekly returns.<br/>- 'M' for monthly returns. | value | True |
| maxnan | float | Max percentage of nan values accepted per asset to be included in<br/>returns. | None | True |
| threshold | float | Value used to replace outliers that are higher to threshold. | None | True |
| method | str | Method used to fill nan values. Default value is 'time'. For more information see `interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>`__. | value | False |
| risk_measure | str | The risk measure used to optimize the portfolio.<br/>The default is 'MV'. Possible values are:<br/><br/>- 'MV': Standard Deviation.<br/>- 'MAD': Mean Absolute Deviation.<br/>- 'MSV': Semi Standard Deviation.<br/>- 'FLPM': First Lower Partial Moment (Omega Ratio).<br/>- 'SLPM': Second Lower Partial Moment (Sortino Ratio).<br/>- 'CVaR': Conditional Value at Risk.<br/>- 'EVaR': Entropic Value at Risk.<br/>- 'WR': Worst Realization.<br/>- 'ADD': Average Drawdown of uncompounded cumulative returns.<br/>- 'UCI': Ulcer Index of uncompounded cumulative returns.<br/>- 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.<br/>- 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.<br/>- 'MDD': Maximum Drawdown of uncompounded cumulative returns. | is | True |
| risk_free_rate | float | Risk free rate, must be in the same interval of assets returns. Used for<br/>'FLPM' and 'SLPM' and Sharpe objective function. The default is 0. | 0 | True |
| alpha | float | Significance level of CVaR, EVaR, CDaR and EDaR<br/>The default is 0.05. | 0.05 | True |
| value | float | Amount to allocate to portfolio in long positions, by default 1.0 | 1.0 | True |
| value_short | float | Amount to allocate to portfolio in short positions, by default 0.0 | 0.0 | True |
| n_portfolios | int | "Number of portfolios to simulate. The default value is 100. | value | True |
| seed | int | Seed used to generate random portfolios. The default value is 123. | value | True |
| tangency | bool | Adds the optimal line with the risk-free asset. | None | True |
| external_axes | Optional[List[plt.Axes]] | Optional axes to plot data on | None | False |
| plot_tickers | bool | Whether to plot the tickers for the assets | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>