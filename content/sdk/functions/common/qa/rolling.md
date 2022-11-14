---
title: rolling
description: OpenBB SDK Function
---
# rolling

## common_qa_rolling_model.get_rolling_avg

```python
def rolling(data: pd.DataFrame, window: int) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/rolling_model.py#L15)

Description: Return rolling mean and standard deviation

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of target data | None | False |
| window | int | Length of rolling window | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
|  | Dataframe of rolling mean |

## Examples




# VIEW

# rolling

## common_qa_rolling_view.display_mean_std

```python
def rolling(data: pd.DataFrame, target: str, symbol: str, window: int, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/rolling_view.py#L26)

Description: View mean std deviation

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe | None | False |
| target | str | Column in data to look at | None | False |
| symbol | str | Stock ticker | None | False |
| window | int | Length of window | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (2 axes are expected in the list), by default None | None | True |

## Returns

None

## Examples

