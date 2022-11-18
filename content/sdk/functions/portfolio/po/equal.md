---
title: equal
description: OpenBB SDK Function
---

# equal

Equally weighted portfolio, where weight = 1/# of symbols

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/optimizer_model.py#L167)]

```python
def get_equal_weights(symbols: List[str], interval: str = "3y", start_date: str = "", end_date: str = "", log_returns: bool = False, freq: str = "D", maxnan: float = 0.05, threshold: float = 0, method: str = "time", value: float = 1.0) -> Tuple[Dict[str, float], pd.DataFrame]
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbols | List[str] | List of portfolio stocks | None | False |
| interval | str | interval to get stock data, by default "3mo" | 3y | True |
| start_date | str | If not using interval, start date string (YYYY-MM-DD) |  | True |
| end_date | str | If not using interval, end date string (YYYY-MM-DD). If empty use last<br/>weekday. |  | True |
| log_returns | bool | If True calculate log returns, else arithmetic returns. Default value<br/>is False | False | True |
| freq | str | The frequency used to calculate returns. Default value is 'D'. Possible<br/>values are:<br/><br/>- 'D' for daily returns.<br/>- 'W' for weekly returns.<br/>- 'M' for m' for monthly returns. | D | True |
| maxnan | float | Max percentage of nan values accepted per asset to be included in<br/>returns. | 0.05 | True |
| threshold | float | Value used to replace outliers that are higher to threshold. | 0 | True |
| method | str | Method used to fill nan values. Default value is 'time'. For more information see `interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>`__. | time | True |
| value | float | Amount to allocate.  Returns percentages if set to 1. | 1.0 | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[Dict[str, float], pd.DataFrame] | Dictionary of weights where keys are the tickers, dataframe of stock returns |
---

