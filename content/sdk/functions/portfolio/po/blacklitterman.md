---
title: blacklitterman
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# blacklitterman

<Tabs>
<TabItem value="model" label="Model" default>

Builds a maximal diversification portfolio

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/optimizer_model.py#L1340)]

```python
def get_black_litterman_portfolio(symbols: List[str], benchmark: Dict, p_views: List, q_views: List, interval: str = "3y", start_date: str = "", end_date: str = "", log_returns: bool = False, freq: str = "D", maxnan: float = 0.05, threshold: float = 0, method: str = "time", objective: str = "Sharpe", risk_free_rate: float = 0, risk_aversion: float = 1, delta: float = None, equilibrium: bool = True, optimize: bool = True, value: float = 1.0, value_short: float = 0) -> Tuple[Optional[dict], pd.DataFrame]
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbols | List[str] | List of portfolio stocks | None | False |
| benchmark | Dict | Dict of portfolio weights | None | False |
| p_views | List | Matrix P of views that shows relationships among assets and returns.<br/>Default value to None. | None | False |
| q_views | List | Matrix Q of expected returns of views. Default value is None. | None | False |
| interval | str | interval to get stock data, by default "3mo" | 3y | True |
| start_date | str | If not using interval, start date string (YYYY-MM-DD) |  | True |
| end_date | str | If not using interval, end date string (YYYY-MM-DD). If empty use last<br/>weekday. |  | True |
| log_returns | bool | If True calculate log returns, else arithmetic returns. Default value<br/>is False | False | True |
| freq | str | The frequency used to calculate returns. Default value is 'D'. Possible<br/>values are:<br/><br/>- 'D' for daily returns.<br/>- 'W' for weekly returns.<br/>- 'M' for monthly returns. | D | True |
| maxnan | float | Max percentage of nan values accepted per asset to be included in<br/>returns. | 0.05 | True |
| threshold | float | Value used to replace outliers that are higher to threshold. | 0 | True |
| method | str | Method used to fill nan values. Default value is 'time'. For more information see `interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>`__. | time | True |
| objective | str | Objective function of the optimization model.<br/>The default is 'Sharpe'. Possible values are:<br/><br/>- 'MinRisk': Minimize the selected risk measure.<br/>- 'Utility': Maximize the risk averse utility function.<br/>- 'Sharpe': Maximize the risk adjusted return ratio based on the selected risk measure.<br/>- 'MaxRet': Maximize the expected return of the portfolio. | Sharpe | True |
| risk_free_rate | float | Risk free rate, must be in annual frequency. The default is 0. | 0 | True |
| risk_aversion | float | Risk aversion factor of the 'Utility' objective function.<br/>The default is 1. | 1 | True |
| delta | float | Risk aversion factor of Black Litterman model. Default value is None. | None | True |
| equilibrium | bool | If True excess returns are based on equilibrium market portfolio, if False<br/>excess returns are calculated as historical returns minus risk free rate.<br/>Default value is True. | True | True |
| optimize | bool | If True Black Litterman estimates are used as inputs of mean variance model,<br/>if False returns equilibrium weights from Black Litterman model<br/>Default value is True. | True | True |
| value | float | Amount of money to allocate. The default is 1. | 1.0 | True |
| value_short | float | Amount to allocate to portfolio in short positions. The default is 0. | 0 | True |

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[Optional[dict], pd.DataFrame] | Dictionary of portfolio weights,<br/>DataFrame of stock returns. |



</TabItem>
<TabItem value="view" label="View">

Builds a black litterman portfolio

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/optimizer_view.py#L1934)]

```python
def display_black_litterman(symbols: List[str], p_views: List, q_views: List, interval: str = "3y", start_date: str = "", end_date: str = "", log_returns: bool = False, freq: str = "D", maxnan: float = 0.05, threshold: float = 0, method: str = "time", benchmark: Dict = None, objective: str = "Sharpe", risk_free_rate: float = 0, risk_aversion: float = 1, delta: float = None, equilibrium: bool = True, optimize: bool = True, value: float = 1.0, value_short: float = 0, table: bool = False) -> Dict
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbols | List[str] | List of portfolio tickers | None | False |
| p_views | List | Matrix P of views that shows relationships among assets and returns.<br/>Default value to None. | None | False |
| q_views | List | Matrix Q of expected returns of views. Default value is None. | None | False |
| interval | str | interval to look at returns from | 3y | True |
| start_date | str | If not using interval, start date string (YYYY-MM-DD) |  | True |
| end_date | str | If not using interval, end date string (YYYY-MM-DD). If empty use last<br/>weekday. |  | True |
| log_returns | bool | If True calculate log returns, else arithmetic returns. Default value<br/>is False | False | True |
| freq | str | The frequency used to calculate returns. Default value is 'D'. Possible<br/>values are:<br/>- 'D' for daily returns.<br/>- 'W' for weekly returns.<br/>- 'M' for monthly returns. | D | True |
| maxnan | float | Max percentage of nan values accepted per asset to be included in<br/>returns. | 0.05 | True |
| threshold | float | Value used to replace outliers that are higher to threshold. | 0 | True |
| method | str | Method used to fill nan values. Default value is 'time'. For more information see `interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>`__. | time | True |
| benchmark | Dict | Dict of portfolio weights | None | True |
| objective | str | Objective function of the optimization model.<br/>The default is 'Sharpe'. Possible values are:<br/><br/>- 'MinRisk': Minimize the selected risk measure.<br/>- 'Utility': Maximize the risk averse utility function.<br/>- 'Sharpe': Maximize the risk adjusted return ratio based on the selected risk measure.<br/>- 'MaxRet': Maximize the expected return of the portfolio. | Sharpe | True |
| risk_free_rate | float | Risk free rate, must be in annual frequency. The default is 0. | 0 | True |
| risk_aversion | float | Risk aversion factor of the 'Utility' objective function.<br/>The default is 1. | 1 | True |
| delta | float | Risk aversion factor of Black Litterman model. Default value is None. | None | True |
| equilibrium | bool | If True excess returns are based on equilibrium market portfolio, if False<br/>excess returns are calculated as historical returns minus risk free rate.<br/>Default value is True. | True | True |
| optimize | bool | If True Black Litterman estimates are used as inputs of mean variance model,<br/>if False returns equilibrium weights from Black Litterman model<br/>Default value is True. | True | True |
| value | float | Amount of money to allocate. The default is 1. | 1.0 | True |
| value_short | float | Amount to allocate to portfolio in short positions. The default is 0. | 0 | True |
| table | bool | True if plot table weights, by default False | False | True |

## Returns

This function does not return anything



</TabItem>
</Tabs>