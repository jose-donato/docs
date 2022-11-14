---
title: fib
description: OpenBB SDK Function
---
# fib

## common_ta_custom_indicators_model.calculate_fib_levels

```python
def fib(data: pd.DataFrame, limit: int, start_date: Any, end_date: Any) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/custom_indicators_model.py#L16)

Description: Calculate Fibonacci levels

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of prices | None | False |
| limit | int | Days to look back for retracement | None | False |
| start_date | Any | Custom start date for retracement | None | False |
| end_date | Any | Custom end date for retracement | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of fib levels |

## Examples




# VIEW

# fib

## common_ta_custom_indicators_view.fibonacci_retracement

```python
def fib(data: pd.DataFrame, limit: int, start_date: Union[str, NoneType], end_date: Union[str, NoneType], symbol: str, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/custom_indicators_view.py#L28)

Description: Calculate fibonacci retracement levels

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | OHLC data | None | False |
| limit | int | Days to lookback | None | False |
| start_date | Optional[str, None] | User picked date for starting retracement | None | False |
| end_date | Optional[str, None] | User picked date for ending retracement | None | False |
| symbol | str | Ticker symbol | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (2 axes are expected in the list), by default None | None | True |

## Returns

None

## Examples

