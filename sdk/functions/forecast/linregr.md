# linregr

## forecast_linregr_model.get_linear_regression_data

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/linregr_model.py#L21)

Description: Perform Linear Regression Forecasting

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | Union[pd.Series, pd.DataFrame] | Input Data | None | False |
| target_column | str | Target column to forecast. Defaults to "close". | s | False |
| n_predict | int | Days to predict. Defaults to 5. | 5 | False |
| train_split | float | Train/val split. Defaults to 0.85. | 0.85 | False |
| past_covariates | str | Multiple secondary columns to factor in when forecasting. Defaults to None. | None | False |
| forecast_horizon | int | Forecast horizon when performing historical forecasting. Defaults to 5. | 5 | False |
| output_chunk_length | int | The length of the forecast of the model. Defaults to 1. | 1 | False |
| lags | Union[int, List[int]] | lagged target values to predict the next time step | None | False |
| random_state | Optional[int] | The state for the model | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| List[TimeSeries] | Adjusted Data series |

## Examples

