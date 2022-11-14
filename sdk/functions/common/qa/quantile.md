---
title: quantile
description: OpenBB SDK Function
---
# quantile

## common_qa_rolling_model.get_quantile

```python
def quantile(data: pd.DataFrame, window: int, quantile_pct: float) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/rolling_model.py#L73)

Description: Overlay Median & Quantile

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of targeted data | None | False |
| window | int | Length of window | None | False |
| quantile_pct | float | Quantile to display | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of median prices over window |

## Examples




# VIEW

# quantile

## common_qa_rolling_view.display_quantile

```python
def quantile(data: pd.DataFrame, target: str, symbol: str, window: int, quantile: float, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/rolling_view.py#L245)

Description: View rolling quantile

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe | None | False |
| target | str | Column in data to look at | None | False |
| symbol | str | Stock ticker | None | False |
| window | int | Length of window | None | False |
| quantile | float | Quantile to get | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

