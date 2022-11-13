# season

## forecast_view.display_seasonality

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/forecast_view.py#L119)

Description: Plot seasonality from a dataset

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | The dataframe to plot | None | False |
| column | str | The column of the dataframe to analyze | None | False |
| export | str | Format to export image | None | False |
| m | Optional[int] | Optionally, a time lag to highlight on the plot. Default is none. | none | False |
| max_lag | int | The maximal lag order to consider. Default is 24. | 24 | False |
| alpha | float | The confidence interval to display. Default is 0.05. | 0.05 | False |
| external_axes | Optional[List[plt.axes]] | External axes to plot on | None | False |

None

## Examples

