---
title: norm
description: OpenBB SDK Function
---
# norm

## econometrics_model.get_normality

```python
def norm(data: pd.Series) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/econometrics_model.py#L110)

Description: The distribution of returns and generate statistics on the relation to the normal curve.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.Series | A series or column of a DataFrame to test normality for | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe containing statistics of normality |

## Examples




# VIEW

# norm

## econometrics_view.display_norm

```python
def norm(data: pd.Series, dataset: str, column: str, plot: bool, export: str, external_axes: Union[List[axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/econometrics_view.py#L135)

Description: Determine the normality of a timeseries.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.Series | Series of custom data | None | False |
| dataset | str | Dataset name | None | False |
| column | str | Column for y data | None | False |
| plot | bool | Whether you wish to plot a histogram | None | False |
| export | str | Format to export data. | None | False |
| external_axes | Optional[List[plt.axes]] | External axes to plot on | None | False |

## Returns

None

## Examples

