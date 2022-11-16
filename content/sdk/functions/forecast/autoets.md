---
title: autoets
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# autoets

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.forecast.autoets_model.get_autoets_data

```python title='openbb_terminal/forecast/autoets_model.py'
def get_autoets_data(data: Union[pd.Series, pd.DataFrame], target_column: str, seasonal_periods: int, n_predict: int, start_window: float, forecast_horizon: int) -> Tuple
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/autoets_model.py#L27)

Description: Performs Automatic ETS forecasting

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | Union[pd.Series, np.ndarray] | Input data. | None | False |
| target_column | Optional[str]: | Target column to forecast. Defaults to "close". | s | False |
| seasonal_periods | int | Number of seasonal periods in a year (7 for daily data)<br/>If not set, inferred from frequency of the series. | None | False |
| n_predict | int | Number of days to forecast | None | False |
| start_window | float | Size of sliding window from start of timeseries and onwards | None | False |
| forecast_horizon | int | Number of days to forecast when backtesting and retraining historical | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[List[TimeSeries], List[TimeSeries], List[TimeSeries], Optional[float], StatsForecast] | Adjusted Data series,<br/>List of historical fcast values,<br/>List of predicted fcast values,<br/>Optional[float] - precision,<br/>Fit ETS model object. |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.forecast.autoets_view.display_autoets_forecast

```python title='openbb_terminal/forecast/autoets_view.py'
def display_autoets_forecast(data: Union[pd.DataFrame, pd.Series], target_column: str, dataset_name: str, seasonal_periods: int, n_predict: int, start_window: float, forecast_horizon: int, export: str, residuals: bool, forecast_only: bool, start_date: Optional[datetime.datetime], end_date: Optional[datetime.datetime], naive: bool, export_pred_raw: bool, external_axes: Optional[List[axes]]) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/autoets_view.py#L20)

Description: Display Automatic ETS (Error, Trend, Sesonality) Model

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | Union[pd.Series, np.array] | Data to forecast | None | False |
| dataset_name str | None | The name of the ticker to be predicted | None | None |
| target_column | Optional[str]: | Target column to forecast. Defaults to "close". | s | False |
| seasonal_periods | int | Number of seasonal periods in a year<br/>If not set, inferred from frequency of the series. | None | False |
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