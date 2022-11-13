# expo

## forecast_expo_model.get_expo_data

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/expo_model.py#L32)

Description: Performs Probabilistic Exponential Smoothing forecasting

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | Union[pd.Series, np.ndarray] | Input data. | None | False |
| target_column (str, optional) |  | Target column to forecast. Defaults to "close". | s | False |
| trend | str | Trend component.  One of [N, A, M]
Defaults to ADDITIVE. | ADDITIVE | False |
| seasonal | str | Seasonal component.  One of [N, A, M]
Defaults to ADDITIVE. | ADDITIVE | False |
| seasonal_periods | int | Number of seasonal periods in a year (7 for daily data)
If not set, inferred from frequency of the series. | None | False |
| dampen | str | Dampen the function | None | False |
| n_predict | int | Number of days to forecast | None | False |
| start_window | float | Size of sliding window from start of timeseries and onwards | None | False |
| forecast_horizon | int | Number of days to forecast when backtesting and retraining historical | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| list[float] | Adjusted Data series |

## Examples

