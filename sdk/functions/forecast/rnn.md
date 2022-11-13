---
title: rnn
description: Perform RNN forecasting
---
# rnn

## forecast_rnn_model.get_rnn_data

```python
def rnn(data: Union[pd.Series, pd.DataFrame], target_column: str, n_predict: int, train_split: float, forecast_horizon: int, model_type: str, hidden_dim: int, dropout: float, batch_size: int, n_epochs: int, learning_rate: float, model_save_name: str, training_length: int, input_chunk_size: int, force_reset: bool, save_checkpoints: bool) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/rnn_model.py#L20)

Description: Perform RNN forecasting

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | Union[pd.Series, pd.DataFrame] | Input Data | None | False |
| n_predict | int | Days to predict. Defaults to 5. | 5 | False |
| target_column | str | Target column to forecast. Defaults to "close". | s | False |
| train_split | float | Train/val split. Defaults to 0.85. | 0.85 | False |
| forecast_horizon | int | Forecast horizon when performing historical forecasting. Defaults to 5. | 5 | False |
| model_type | str | Either a string specifying the RNN module type ("RNN", "LSTM" or "GRU"). Defaults to "LSTM". | s | False |
| hidden_dim | int | Size for feature maps for each hidden RNN layer.. Defaults to 20. | 20 | False |
| dropout | float | Fraction of neurons affected by Dropout. Defaults to 0.0. | 0.0 | False |
| batch_size | int | Number of time series (input and output sequences) used in each training pass. Defaults to 32. | 32 | False |
| n_epochs | int | Number of epochs over which to train the model. Defaults to 100. | 100 | False |
| learning_rate | float | Defaults to 1e-3. | 1e-3 | False |
| model_save_name | str | Name for model. Defaults to "brnn_model". | s | False |
| force_reset | bool | If set to True, any previously-existing model with the same name will be reset
(all checkpoints will be discarded). Defaults to True. | True | False |
| save_checkpoints | bool | Whether or not to automatically save the untrained model and checkpoints from training.
Defaults to True. | True | False |

## Returns

| Type | Description |
| ---- | ----------- |
| List[TimeSeries] | Adjusted Data series |

## Examples

