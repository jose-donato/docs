---
title: ov
description: OpenBB SDK Function
---
# ov

## alt_covid_model.get_covid_ov

```python
def ov(country: str, limit: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/alternative/covid/covid_model.py#L98)

Description: Get historical cases and deaths by country

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| country | str | Country to get data for | None | False |
| limit | int | Number of raw data to show | None | False |

## Returns

None

## Examples




# VIEW

# ov

## alt_covid_view.display_covid_ov

```python
def ov(country: str, raw: bool, limit: int, export: str, plot: bool) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/alternative/covid/covid_view.py#L131)

Description: Show historical cases and deaths by country

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| country | str | Country to get data for | None | False |
| raw | bool | Flag to display raw data | None | False |
| limit | int | Number of raw data to show | None | False |
| export | str | Format to export data | None | False |
| plot | bool | Flag to display historical plot | None | False |

## Returns

None

## Examples

