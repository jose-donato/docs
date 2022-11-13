---
title: trans
description: Display Transformer forecast
---
# trans

## forecast_trans_view.display_trans_forecast

```python
def trans(data: Union[pd.Series, pd.DataFrame], target_column: str, dataset_name: str, n_predict: int, past_covariates: str, train_split: float, forecast_horizon: int, input_chunk_length: int, output_chunk_length: int, d_model: int, nhead: int, num_encoder_layers: int, num_decoder_layers: int, dim_feedforward: int, activation: str, dropout: float, batch_size: int, n_epochs: int, learning_rate: float, model_save_name: str, force_reset: bool, save_checkpoints: bool, export: str, residuals: bool, forecast_only: bool, start_date: Union[datetime.datetime, NoneType], end_date: Union[datetime.datetime, NoneType], naive: bool, export_pred_raw: bool, external_axes: Union[List[axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/trans_view.py#L19)

Description: Display Transformer forecast

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | Union[pd.Series, pd.DataFrame] | Input Data | None | False |
| dataset_name | str | The name of the ticker to be predicted | None | False |
| n_predict | int | Days to predict. Defaults to 5. | 5 | False |
| target_column | str | Target column to forecast. Defaults to "close". | s | False |
| train_split | float | Train/val split. Defaults to 0.85. | 0.85 | False |
| past_covariates | str | Multiple secondary columns to factor in when forecasting. Defaults to None. | None | False |
| forecast_horizon | int | Forecast horizon when performing historical forecasting. Defaults to 5. | 5 | False |
| input_chunk_length | int | Number of past time steps that are fed to the forecasting module at prediction time. Defaults to 14. | 14 | False |
| output_chunk_length | int | The length of the forecast of the model. Defaults to 5. | 5 | False |
| d_model | int | The number of expected features in the encoder/decoder inputs. Defaults to 64. | 64 | False |
| nhead | int | The number of heads in the multi-head attention mechanism. Defaults to 4. | 4 | False |
| num_encoder_layers | int | The number of encoder layers in the encoder. Defaults to 3. | 3 | False |
| num_decoder_layers | int | The number of decoder layers in the encoder. Defaults to 3. | 3 | False |
| dim_feedforward | int | The dimension of the feedforward network model. Defaults to 512. | 512 | False |
| activation | str | The activation function of encoder/decoder intermediate layer, ‘relu’ or ‘gelu’. Defaults to 'relu'. | s | False |
| dropout | float | Fraction of neurons affected by Dropout. Defaults to 0.1. | 0.1 | False |
| batch_size_ | int | Number of time series (input and output sequences) used in each training pass. Defaults to 32. | 32 | False |
| n_epochs | int | Number of epochs over which to train the model. Defaults to 100. | 100 | False |
| model_save_name | str | Name for model. Defaults to "brnn_model". | s | False |
| force_reset | bool | If set to True, any previously-existing model with the same name will be reset
(all checkpoints will be discarded). Defaults to True. | True | False |
| save_checkpoints | bool | Whether or not to automatically save the untrained model and checkpoints from training.
Defaults to True. | True | False |
| export | str | Format to export data | None | False |
| residuals | bool | Whether to show residuals for the model. Defaults to False. | False | False |
| forecast_only | bool | Whether to only show dates in the forecasting range. Defaults to False. | False | False |
| start_date | Optional[datetime] | The starting date to perform analysis, data before this is trimmed. Defaults to None. | None | False |
| end_date | Optional[datetime] | The ending date to perform analysis, data after this is trimmed. Defaults to None. | None | False |
| naive | bool | Whether to show the naive baseline. This just assumes the closing price will be the same
as the previous day's closing price. Defaults to False. | False | False |
| external_axes | Optional[List[plt.axes]] | External axes to plot on | None | False |

## Returns

None

## Examples

