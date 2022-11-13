---
title: corr
description: Plot correlation coefficients for dataset features
---
# corr

## forecast_view.display_corr

```python
def corr(dataset: pd.DataFrame, export: str, external_axes: Union[List[axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/forecast_view.py#L169)

Description: Plot correlation coefficients for dataset features

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| dataset | pd.DataFrame | The dataset fore calculating correlation coefficients | None | False |
| export | str | Format to export image | None | False |
| external_axes | Optional[List[plt.axes]] | External axes to plot on | None | False |

## Returns

None

## Examples

