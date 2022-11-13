---
title: fred_series
description: Display (multiple) series from https://fred.stlouisfed.org. [Source: FRED]
---
# fred_series

## economy_fred_view.display_fred_series

```python
def fred_serie) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L75)

Description: Display (multiple) series from https://fred.stlouisfed.org. [Source: FRED]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| series_ids | List[str] | FRED Series ID from https://fred.stlouisfed.org. For multiple series use: series1,series2,series3 | None | False |
| start_date | str | Starting date (YYYY-MM-DD) of data | None | False |
| end_date | str | Ending date (YYYY-MM-DD) of data | None | False |
| limit | int | Number of data points to display. | None | False |
| raw | bool | Output only raw data | None | False |
| export | str | Export data to csv,json,xlsx or png,jpg,pdf,svg file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

