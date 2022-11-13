---
title: stat
description: Show historical cases and deaths by country
---
# stat

## alt_covid_view.display_covid_stat

```python
def stat(country: str, stat: str, raw: bool, limit: int, export: str, plot: bool) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/alternative/covid/covid_view.py#L171)

Description: Show historical cases and deaths by country

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| country | str | Country to get data for | None | False |
| stat | str | Statistic to get.  Either "cases", "deaths" or "rates" | None | False |
| raw | bool | Flag to display raw data | None | False |
| limit | int | Number of raw data to show | None | False |
| export | str | Format to export data | None | False |
| plot | bool | Flag to plot data | None | False |

## Returns

None

## Examples

