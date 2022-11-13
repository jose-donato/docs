---
title: ross
description: Display list of startups from ross index [Source: https://runacap.com/]
---
# ross

## alt_oss_runa_view.display_rossindex

```python
def ross(limit: int, sortby: str, ascend: bool, show_chart: bool, show_growth: bool, chart_type: str, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/alternative/oss/runa_view.py#L24)

Description: Display list of startups from ross index [Source: https://runacap.com/]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of startups to search | None | False |
| sortby | str | Key by which to sort data. Default: Stars AGR [%] | Stars | False |
| ascend | bool | Flag to sort data descending | None | False |
| show_chart | bool | Flag to show chart with startups | None | False |
| show_growth | bool | Flag to show growth line chart | None | False |
| chart_type | str | Chart type {stars,forks} | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

