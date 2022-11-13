# theta

## forecast_theta_model.get_theta_data

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/theta_model.py#L28)

Description: Performs Theta forecasting

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | Union[pd.Series, np.ndarray] | Input data. | None | False |
| target_column (str, optional) |  | Target column to forecast. Defaults to "close". | s | False |
| seasonal | str | Seasonal component.  One of [N, A, M]
Defaults to MULTIPLICATIVE. | MULTIPLICATIVE | False |
| seasonal_periods | int | Number of seasonal periods in a year
If not set, inferred from frequency of the series. | None | False |
| n_predict | int | Number of days to forecast | None | False |
| start_window | float | Size of sliding window from start of timeseries and onwards | None | False |
| forecast_horizon | int | Number of days to forecast when backtesting and retraining historical | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| List[TimeSeries] | Adjusted Data series |

## Examples

