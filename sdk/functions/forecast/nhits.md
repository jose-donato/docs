# nhits

## forecast_nhits_model.get_nhits_data

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/nhits_model.py#L21)

Description: Performs Nhits forecasting

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
| num_stacks | int | The number of stacks that make up the whole model. | None | False |
| num_blocks | int | The number of blocks making up every stack. | None | False |
| num_layers | int | The number of fully connected layers preceding the final forking layers in each block
of every stack. | None | False |
| layer_widths | int | Determines the number of neurons that make up each fully connected layer in each
block of every stack. If a list is passed, it must have a length equal to num_stacks
and every entry in that list corresponds to the layer width of the corresponding stack.
If an integer is passed, every stack will have blocks with FC layers of the same width. | None | False |
| pooling_kernel_size | Optional[Tuple[Tuple[int]]]: | If set, this parameter must be a tuple of tuples, of size (num_stacks x num_blocks),
specifying the kernel size for each block in each stack used for the input pooling
layer. If left to None, some default values will be used based on input_chunk_length. | values | False |
| n_freq_downsample | Optional[Tuple[Tuple[int]]] | If set, this parameter must be a tuple of tuples, of size (num_stacks x num_blocks),
specifying the downsampling factors before interpolation, for each block in each stack.
If left to None, some default values will be used based on output_chunk_length. | values | False |
| dropout | float | The dropout probability to be used in fully connected layers. | None | False |
| activation | str | Supported activations: [‘ReLU’,’RReLU’, ‘PReLU’, ‘Softplus’, ‘Tanh’, ‘SELU’, ‘LeakyReLU’, ‘Sigmoid’] | None | False |
| max_pool_1d | bool | Use max_pool_1d pooling. False uses AvgPool1d. | None | False |
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

