---
title: relriskparity
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# relriskparity

<Tabs>
<TabItem value="model" label="Model" default>

Builds a relaxed risk parity portfolio using the least squares approach

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/optimizer_model.py#L1869)]

```python
def get_rel_risk_parity_portfolio(symbols: List[str], interval: str = "3y", start_date: str = "", end_date: str = "", log_returns: bool = False, freq: str = "D", maxnan: float = 0.05, threshold: float = 0, method: str = "time", version: str = "A", risk_cont: List[str] = None, penal_factor: float = 1, target_return: float = -1, mean: str = "hist", covariance: str = "hist", d_ewma: float = 0.94, value: float = 1.0) -> Tuple
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbols | List[str] | List of portfolio stocks | None | False |
| interval | str | interval to get stock data, by default "3mo" | 3y | True |
| start_date | str | If not using interval, start date string (YYYY-MM-DD) |  | True |
| end_date | str | If not using interval, end date string (YYYY-MM-DD). If empty use last<br/>weekday. |  | True |
| log_returns | bool | If True calculate log returns, else arithmetic returns. Default value<br/>is False | False | True |
| freq | str | The frequency used to calculate returns. Default value is 'D'. Possible<br/>values are:<br/><br/>- 'D' for daily returns.<br/>- 'W' for weekly returns.<br/>- 'M' for monthly returns. | D | True |
| maxnan | float | Max percentage of nan values accepted per asset to be included in<br/>returns. | 0.05 | True |
| threshold | float | Value used to replace outliers that are higher to threshold. | 0 | True |
| method | str | Method used to fill nan values. Default value is 'time'. For more information see `interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>`__. | time | True |
| version | str | Relaxed risk parity model version. The default is 'A'.<br/>Possible values are:<br/><br/>- 'A': without regularization and penalization constraints.<br/>- 'B': with regularization constraint but without penalization constraint.<br/>- 'C': with regularization and penalization constraints. | A | True |
| risk_cont | List[str] | The vector of risk contribution per asset. If empty, the default is<br/>1/n (number of assets). | None | True |
| penal_factor | float | The penalization factor of penalization constraints. Only used with<br/>version 'C'. The default is 1. | 1 | True |
| target_return | float | Constraint on minimum level of portfolio's return. | -1 | True |
| mean | str | The method used to estimate the expected returns.<br/>The default value is 'hist'. Possible values are:<br/><br/>- 'hist': use historical estimates.<br/>- 'ewma1': use ewma with adjust=True. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.<br/>- 'ewma2': use ewma with adjust=False. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__. | hist | True |
| covariance | str | The method used to estimate the covariance matrix:<br/>The default is 'hist'. Possible values are:<br/><br/>- 'hist': use historical estimates.<br/>- 'ewma1': use ewma with adjust=True. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.<br/>- 'ewma2': use ewma with adjust=False. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.<br/>- 'ledoit': use the Ledoit and Wolf Shrinkage method.<br/>- 'oas': use the Oracle Approximation Shrinkage method.<br/>- 'shrunk': use the basic Shrunk Covariance method.<br/>- 'gl': use the basic Graphical Lasso Covariance method.<br/>- 'jlogo': use the j-LoGo Covariance method. For more information see: `a-jLogo`.<br/>- 'fixed': denoise using fixed method. For more information see chapter 2 of `a-MLforAM`.<br/>- 'spectral': denoise using spectral method. For more information see chapter 2 of `a-MLforAM`.<br/>- 'shrink': denoise using shrink method. For more information see chapter 2 of `a-MLforAM`. | hist | True |
| d_ewma | float | The smoothing factor of ewma methods.<br/>The default is 0.94. | 0.94 | True |
| value | float | Amount of money to allocate. The default is 1. | 1.0 | True |

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[Optional[dict], pd.DataFrame] | Dictionary of portfolio weights,<br/>DataFrame of stock returns. |



</TabItem>
<TabItem value="view" label="View">

Builds a relaxed risk parity portfolio using the least squares approach

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/optimizer_view.py#L2445)]

```python
def display_rel_risk_parity(symbols: List[str], interval: str = "3y", start_date: str = "", end_date: str = "", log_returns: bool = False, freq: str = "D", maxnan: float = 0.05, threshold: float = 0, method: str = "time", version: str = "A", risk_cont: List[str] = None, penal_factor: float = 1, target_return: float = -1, mean: str = "hist", covariance: str = "hist", d_ewma: float = 0.94, value: float = 1.0, table: bool = False) -> Dict
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbols | List[str] | List of portfolio tickers | None | False |
| interval | str | interval to look at returns from | 3y | True |
| start_date | str | If not using interval, start date string (YYYY-MM-DD) |  | True |
| end_date | str | If not using interval, end date string (YYYY-MM-DD). If empty use last<br/>weekday. |  | True |
| log_returns | bool | If True calculate log returns, else arithmetic returns. Default value<br/>is False | False | True |
| freq | str | The frequency used to calculate returns. Default value is 'D'. Possible<br/>values are:<br/>- 'D' for daily returns.<br/>- 'W' for weekly returns.<br/>- 'M' for monthly returns.<br/>- X (integer days) for returns calculated every X days. | D | True |
| maxnan | float | Max percentage of nan values accepted per asset to be included in<br/>returns. | 0.05 | True |
| threshold | float | Value used to replace outliers that are higher to threshold. | 0 | True |
| method | str | Method used to fill nan values. Default value is 'time'. For more information see `interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>`__. | time | True |
| version | str | Relaxed risk parity model version. The default is 'A'.<br/>Possible values are:<br/><br/>- 'A': without regularization and penalization constraints.<br/>- 'B': with regularization constraint but without penalization constraint.<br/>- 'C': with regularization and penalization constraints. | A | True |
| risk_cont | List[str] | The vector of risk contribution per asset. If empty, the default is<br/>1/n (number of assets). | None | True |
| penal_factor | float | The penalization factor of penalization constraints. Only used with<br/>version 'C'. The default is 1. | 1 | True |
| target_return | float | Constraint on minimum level of portfolio's return. | -1 | True |
| mean | str | The method used to estimate the expected returns.<br/>The default value is 'hist'. Possible values are:<br/><br/>- 'hist': use historical estimates.<br/>- 'ewma1': use ewma with adjust=True. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.<br/>- 'ewma2': use ewma with adjust=False. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__. | hist | True |
| covariance | str | The method used to estimate the covariance matrix:<br/>The default is 'hist'. Possible values are:<br/><br/>- 'hist': use historical estimates.<br/>- 'ewma1': use ewma with adjust=True. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.<br/>- 'ewma2': use ewma with adjust=False. For more information see `EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>`__.<br/>- 'ledoit': use the Ledoit and Wolf Shrinkage method.<br/>- 'oas': use the Oracle Approximation Shrinkage method.<br/>- 'shrunk': use the basic Shrunk Covariance method.<br/>- 'gl': use the basic Graphical Lasso Covariance method.<br/>- 'jlogo': use the j-LoGo Covariance method. For more information see: `a-jLogo`.<br/>- 'fixed': denoise using fixed method. For more information see chapter 2 of `a-MLforAM`.<br/>- 'spectral': denoise using spectral method. For more information see chapter 2 of `a-MLforAM`.<br/>- 'shrink': denoise using shrink method. For more information see chapter 2 of `a-MLforAM`. | hist | True |
| d_ewma | float | The smoothing factor of ewma methods.<br/>The default is 0.94. | 0.94 | True |
| value | float | Amount to allocate to portfolio, by default 1.0 | 1.0 | True |
| table | bool | True if plot table weights, by default False | False | True |

## Returns

This function does not return anything



</TabItem>
</Tabs>