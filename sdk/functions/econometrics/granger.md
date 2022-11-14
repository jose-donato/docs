---
title: granger
description: OpenBB SDK Function
---
# granger

## econometrics_model.get_granger_causality

```python
def granger(dependent_series: Any, independent_series: Any, lags: Any) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/econometrics_model.py#L207)

Description: Calculate granger tests

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| dependent_series | Series | The series you want to test Granger Causality for. | None | False |
| independent_series | Series | The series that you want to test whether it Granger-causes time_series_y | None | False |
| lags | int | The amount of lags for the Granger test. By default, this is set to 3. | None | False |

## Returns

None

## Examples




# VIEW

# granger

## econometrics_view.display_granger

```python
def granger(dependent_series: pd.Series, independent_series: pd.Series, lags: int, confidence_level: float, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/econometrics_view.py#L253)

Description: Show granger tests

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| dependent_series | Series | The series you want to test Granger Causality for. | None | False |
| independent_series | Series | The series that you want to test whether it Granger-causes dependent_series | None | False |
| lags | int | The amount of lags for the Granger test. By default, this is set to 3. | None | False |
| confidence_level | float | The confidence level you wish to use. By default, this is set to 0.05. | None | False |
| export | str | Format to export data | None | False |

## Returns

None

## Examples

