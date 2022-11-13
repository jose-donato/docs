---
title: stat
description: Show historical cases and deaths by country
---
# stat

## alt_covid_model.get_covid_stat

```python
def stat(country: str, stat: str, limit: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/alternative/covid/covid_model.py#L120)

Description: Show historical cases and deaths by country

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| country | str | Country to get data for | None | False |
| stat | str | Statistic to get.  Either "cases", "deaths" or "rates" | None | False |
| limit | int | Number of raw data to show | None | False |

## Returns

None

## Examples

