---
title: trans
description: Performs Transformer forecasting
---
# trans

## forecast_trans_model.get_trans_data

```python
def trans(data: Union[pd.Series, pd.DataFrame], target_column: str, n_predict: int, train_split: float, past_covariates: str, forecast_horizon: int, input_chunk_length: int, output_chunk_length: int, d_model: int, nhead: int, num_encoder_layers: int, num_decoder_layers: int, dim_feedforward: int, activation: str, dropout: float, batch_size: int, n_epochs: int, learning_rate: float, model_save_name: str, force_reset: bool, save_checkpoints: bool) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/trans_model.py#L19)

Description: Performs Transformer forecasting

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | Union[pd.Series, pd.DataFrame] | Input Data | None | False |
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
| dropout | float | Fraction of neurons afected by Dropout. Defaults to 0.0. | 0.0 | False |
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
| List[TimeSeries] | Adjusted Data series |

## Examples

