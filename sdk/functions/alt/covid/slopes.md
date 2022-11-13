---
title: slopes
description: Load cases and find slope over period
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

