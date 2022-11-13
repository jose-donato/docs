---
title: slopes
description: OpenBB SDK Function
---
# slopes

## alt_covid_model.get_case_slopes

```python
def slopes(days_back: int, limit: int, threshold: int, ascend: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/alternative/covid/covid_model.py#L152)

Description: Load cases and find slope over period

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| days_back | int | Number of historical days to consider | None | False |
| limit | int | Number of rows to show | None | False |
| threshold | int | Threshold for total number of cases | None | False |
| ascend | bool | Flag to sort in ascending order | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe containing slopes |

## Examples




# VIEW

# slopes

## alt_covid_view.display_case_slopes

```python
def slopes(days_back: int, limit: int, threshold: int, ascend: bool, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/alternative/covid/covid_view.py#L214)

Description: None

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| days_back | int | Number of historical days to get slope for | None | False |
| limit | int | Number to show in table | None | False |
| ascend | bool | Flag to sort in ascending order | None | False |
| threshold | int | Threshold for total cases over period | None | False |
| export | str | Format to export data | None | False |

## Returns

None

## Examples
