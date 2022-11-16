---
title: rwd
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# rwd

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.forecast.rwd_model.get_rwd_data

```python title='openbb_terminal/forecast/rwd_model.py'
def get_rwd_data(data: Union[pd.Series, pd.DataFrame], target_column: str, n_predict: int, start_window: float, forecast_horizon: int) -> Tuple
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/rwd_model.py#L27)

Description: Performs Random Walk with Drift forecasting

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | Union[pd.Series, np.ndarray] | Input data. | None | False |
| target_column | Optional[str]: | Target column to forecast. Defaults to "close". | s | False |
| n_predict | int | Number of days to forecast | None | False |
| start_window | float | Size of sliding window from start of timeseries and onwards | None | False |
| forecast_horizon | int | Number of days to forecast when backtesting and retraining historical | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
|  | Adjusted Data series,<br/>List of historical fcast values,<br/>List of predicted fcast values,<br/>Optional[float] precision,<br/>Fit RWD model object. |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.forecast.rwd_view.display_rwd_forecast

```python title='openbb_terminal/forecast/rwd_view.py'
def display_rwd_forecast(data: Union[pd.DataFrame, pd.Series], target_column: str, dataset_name: str, n_predict: int, start_window: float, forecast_horizon: int, export: str, residuals: bool, forecast_only: bool, start_date: Optional[datetime.datetime], end_date: Optional[datetime.datetime], naive: bool, export_pred_raw: bool, external_axes: Optional[List[axes]]) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/rwd_view.py#L20)

Description: Display Random Walk with Drift Model

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | Union[pd.Series, np.array] | Data to forecast | None | False |
| dataset_name str | None | The name of the ticker to be predicted | None | None |
| target_column | Optional[str]: | Target column to forecast. Defaults to "close". | s | False |
| n_predict | int | Number of days to forecast | None | False |
| start_window | float | Size of sliding window from start of timeseries and onwards | None | False |
| forecast_horizon | int | Number of days to forecast when backtesting and retraining historical | None | False |
| export | str | Format to export data | None | False |
| residuals | bool | Whether to show residuals for the model. Defaults to False. | False | False |
| forecast_only | bool | Whether to only show dates in the forecasting range. Defaults to False. | False | False |
| start_date | Optional[datetime] | The starting date to perform analysis, data before this is trimmed. Defaults to None. | None | False |
| end_date | Optional[datetime] | The ending date to perform analysis, data after this is trimmed. Defaults to None. | None | False |
| naive | bool | Whether to show the naive baseline. This just assumes the closing price will be the same<br/>as the previous day's closing price. Defaults to False. | False | False |
| external_axes | Optional[List[plt.axes]] | External axes to plot on | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>