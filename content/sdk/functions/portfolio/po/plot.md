---
title: plot
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# plot

<Tabs>
<TabItem value="model" label="Model" default>

Plot additional charts

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/optimizer_view.py#L3725)]

```python
def additional_plots(weights: Dict, data: pd.DataFrame, category: Dict = None, title_opt: str = "", freq: str = "D", risk_measure: str = "MV", risk_free_rate: float = 0, alpha: float = 0.05, a_sim: float = 100, beta: float = None, b_sim: float = None, pie: bool = False, hist: bool = False, dd: bool = False, rc_chart: bool = False, heat: bool = False, external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None) -> None
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| weights | Dict | Dict of portfolio weights | None | False |
| data | pd.DataFrame | DataFrame of stock returns | None | False |
| title_opt | str | Title to be used on the pie chart |  | True |
| freq | str | The frequency used to calculate returns. Default value is 'D'. Possible<br/>values are:<br/>- 'D' for daily returns.<br/>- 'W' for weekly returns.<br/>- 'M' for monthly returns. | D | True |
| risk_measure | str | The risk measure used to optimize the portfolio. If model is 'NCO',<br/>the risk measures available depends on the objective function.<br/>The default is 'MV'. Possible values are:<br/><br/>- 'MV': Variance.<br/>- 'MAD': Mean Absolute Deviation.<br/>- 'MSV': Semi Standard Deviation.<br/>- 'FLPM': First Lower Partial Moment (Omega Ratio).<br/>- 'SLPM': Second Lower Partial Moment (Sortino Ratio).<br/>- 'VaR': Value at Risk.<br/>- 'CVaR': Conditional Value at Risk.<br/>- 'TG': Tail Gini.<br/>- 'EVaR': Entropic Value at Risk.<br/>- 'WR': Worst Realization (Minimax).<br/>- 'RG': Range of returns.<br/>- 'CVRG': CVaR range of returns.<br/>- 'TGRG': Tail Gini range of returns.<br/>- 'MDD': Maximum Drawdown of uncompounded cumulative returns (Calmar Ratio).<br/>- 'ADD': Average Drawdown of uncompounded cumulative returns.<br/>- 'DaR': Drawdown at Risk of uncompounded cumulative returns.<br/>- 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.<br/>- 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.<br/>- 'UCI': Ulcer Index of uncompounded cumulative returns.<br/>- 'MDD_Rel': Maximum Drawdown of compounded cumulative returns (Calmar Ratio).<br/>- 'ADD_Rel': Average Drawdown of compounded cumulative returns.<br/>- 'DaR_Rel': Drawdown at Risk of compounded cumulative returns.<br/>- 'CDaR_Rel': Conditional Drawdown at Risk of compounded cumulative returns.<br/>- 'EDaR_Rel': Entropic Drawdown at Risk of compounded cumulative returns.<br/>- 'UCI_Rel': Ulcer Index of compounded cumulative returns. | MV | True |
| risk_free_rate | float | Risk free rate, must be in the same interval of assets returns.<br/>Used for 'FLPM' and 'SLPM'. The default is 0. | 0 | True |
| alpha | float | Significance level of VaR, CVaR, EDaR, DaR, CDaR, EDaR, Tail Gini of losses.<br/>The default is 0.05. | 0.05 | True |
| a_sim | float | Number of CVaRs used to approximate Tail Gini of losses. The default is 100. | 100 | True |
| beta | float | Significance level of CVaR and Tail Gini of gains. If None it duplicates alpha value.<br/>The default is None. | None | True |
| b_sim | float | Number of CVaRs used to approximate Tail Gini of gains. If None it duplicates a_sim value.<br/>The default is None. | None | True |
| pie | bool | Display a pie chart of values, by default False | False | True |
| hist | bool | Display a histogram with risk measures, by default False | False | True |
| dd | bool | Display a drawdown chart with risk measures, by default False | False | True |
| rc-chart | float | Display a risk contribution chart for assets, by default False | None | True |
| heat | float | Display a heatmap of correlation matrix with dendrogram, by default False | False | True |
| external_axes | Optional[List[plt.Axes]] | Optional axes to plot data on | None | True |


---

## Returns

This function does not return anything

---



</TabItem>
<TabItem value="view" label="View">

Plot additional charts

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/optimizer_view.py#L3725)]

```python
def additional_plots(weights: Dict, data: pd.DataFrame, category: Dict = None, title_opt: str = "", freq: str = "D", risk_measure: str = "MV", risk_free_rate: float = 0, alpha: float = 0.05, a_sim: float = 100, beta: float = None, b_sim: float = None, pie: bool = False, hist: bool = False, dd: bool = False, rc_chart: bool = False, heat: bool = False, external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None) -> None
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| weights | Dict | Dict of portfolio weights | None | False |
| data | pd.DataFrame | DataFrame of stock returns | None | False |
| title_opt | str | Title to be used on the pie chart |  | True |
| freq | str | The frequency used to calculate returns. Default value is 'D'. Possible<br/>values are:<br/>- 'D' for daily returns.<br/>- 'W' for weekly returns.<br/>- 'M' for monthly returns. | D | True |
| risk_measure | str | The risk measure used to optimize the portfolio. If model is 'NCO',<br/>the risk measures available depends on the objective function.<br/>The default is 'MV'. Possible values are:<br/><br/>- 'MV': Variance.<br/>- 'MAD': Mean Absolute Deviation.<br/>- 'MSV': Semi Standard Deviation.<br/>- 'FLPM': First Lower Partial Moment (Omega Ratio).<br/>- 'SLPM': Second Lower Partial Moment (Sortino Ratio).<br/>- 'VaR': Value at Risk.<br/>- 'CVaR': Conditional Value at Risk.<br/>- 'TG': Tail Gini.<br/>- 'EVaR': Entropic Value at Risk.<br/>- 'WR': Worst Realization (Minimax).<br/>- 'RG': Range of returns.<br/>- 'CVRG': CVaR range of returns.<br/>- 'TGRG': Tail Gini range of returns.<br/>- 'MDD': Maximum Drawdown of uncompounded cumulative returns (Calmar Ratio).<br/>- 'ADD': Average Drawdown of uncompounded cumulative returns.<br/>- 'DaR': Drawdown at Risk of uncompounded cumulative returns.<br/>- 'CDaR': Conditional Drawdown at Risk of uncompounded cumulative returns.<br/>- 'EDaR': Entropic Drawdown at Risk of uncompounded cumulative returns.<br/>- 'UCI': Ulcer Index of uncompounded cumulative returns.<br/>- 'MDD_Rel': Maximum Drawdown of compounded cumulative returns (Calmar Ratio).<br/>- 'ADD_Rel': Average Drawdown of compounded cumulative returns.<br/>- 'DaR_Rel': Drawdown at Risk of compounded cumulative returns.<br/>- 'CDaR_Rel': Conditional Drawdown at Risk of compounded cumulative returns.<br/>- 'EDaR_Rel': Entropic Drawdown at Risk of compounded cumulative returns.<br/>- 'UCI_Rel': Ulcer Index of compounded cumulative returns. | MV | True |
| risk_free_rate | float | Risk free rate, must be in the same interval of assets returns.<br/>Used for 'FLPM' and 'SLPM'. The default is 0. | 0 | True |
| alpha | float | Significance level of VaR, CVaR, EDaR, DaR, CDaR, EDaR, Tail Gini of losses.<br/>The default is 0.05. | 0.05 | True |
| a_sim | float | Number of CVaRs used to approximate Tail Gini of losses. The default is 100. | 100 | True |
| beta | float | Significance level of CVaR and Tail Gini of gains. If None it duplicates alpha value.<br/>The default is None. | None | True |
| b_sim | float | Number of CVaRs used to approximate Tail Gini of gains. If None it duplicates a_sim value.<br/>The default is None. | None | True |
| pie | bool | Display a pie chart of values, by default False | False | True |
| hist | bool | Display a histogram with risk measures, by default False | False | True |
| dd | bool | Display a drawdown chart with risk measures, by default False | False | True |
| rc-chart | float | Display a risk contribution chart for assets, by default False | None | True |
| heat | float | Display a heatmap of correlation matrix with dendrogram, by default False | False | True |
| external_axes | Optional[List[plt.Axes]] | Optional axes to plot data on | None | True |


---

## Returns

This function does not return anything

---



</TabItem>
</Tabs>