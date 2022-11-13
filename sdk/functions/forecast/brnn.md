# brnn

## forecast_brnn_model.get_brnn_data

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/brnn_model.py#L21)

Description: Performs Block RNN forecasting

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | Union[pd.Series, pd.DataFrame] | Input Data | None | False |
| target_column | str | Target column to forecast. Defaults to "close". | s | False |
| n_predict | int | Days to predict. Defaults to 5. | 5 | False |
| train_split | float | Train/val split. Defaults to 0.85. | 0.85 | False |
| past_covariates | str | Multiple secondary columns to factor in when forecasting. Defaults to None. | None | False |
| forecast_horizon | int | Forecast horizon when performing historical forecasting. Defaults to 5. | 5 | False |
| input_chunk_length | int | Number of past time steps that are fed to the forecasting module at prediction time. Defaults to 14. | 14 | False |
| output_chunk_length | int | The length of the forecast of the model. Defaults to 5. | 5 | False |
| model_type | str | Either a string specifying the RNN module type ("RNN", "LSTM" or "GRU"). Defaults to "LSTM". | s | False |
| n_rnn_layers | int | Number of layers in the RNN module. Defaults to 1. | 1 | False |
| dropout | float | Fraction of neurons affected by Dropout. Defaults to 0.0. | 0.0 | False |
| batch_size | int | Number of time series (input and output sequences) used in each training pass. Defaults to 32. | 32 | False |
| n_epochs | int | Number of epochs over which to train the model. Defaults to 100. | 100 | False |
| learning_rate | float | Defaults to 1e-3. | 1e-3 | False |
| model_save_name | str | Name for model. Defaults to "brnn_model". | s | False |
| force_reset | bool | If set to True, any previously-existing model with the same name will be reset (all checkpoints will be
discarded). Defaults to True. | True | False |
| save_checkpoints | bool | Whether or not to automatically save the untrained model and checkpoints from training. Defaults to True. | True | False |

## Returns

| Type | Description |
| ---- | ----------- |
| list[TimeSeries] | Adjusted Data series |

## Examples

