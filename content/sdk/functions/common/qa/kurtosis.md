---
title: kurtosis
description: OpenBB SDK Function
---
# kurtosis

## common_qa_rolling_model.get_kurtosis

```python
def kurtosis(data: pd.DataFrame, window: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/rolling_model.py#L125)

Description: Kurtosis Indicator

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of targeted data | None | False |
| window | int | Length of window | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of rolling kurtosis |

## Examples




# VIEW

# kurtosis

## common_qa_rolling_view.display_kurtosis

```python
def kurtosis(symbol: str, data: pd.DataFrame, target: str, window: int, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/rolling_view.py#L425)

Description: View rolling kurtosis

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker | None | False |
| data | pd.DataFrame | Dataframe of stock prices | None | False |
| target | str | Column in data to look at | None | False |
| window | int | Length of window | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (2 axes are expected in the list), by default None | None | True |

## Returns

None

## Examples

