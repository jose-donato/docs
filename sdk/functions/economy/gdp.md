---
title: gdp
description: Get annual or quarterly Real GDP for US
---
# gdp

## economy_alphavantage_model.get_real_gdp

```python
def gdp(interval: str, start_year: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/alphavantage_model.py#L43)

Description: Get annual or quarterly Real GDP for US

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| interval | str | Interval for GDP, by default "a" for annual, by default "q" | None | True |
| start_year | int | Start year for plot, by default 2010 | 2010 | True |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of GDP |

## Examples

