---
title: summary
description: OpenBB SDK Function
---
# summary

## common_qa_model.get_summary

```python
def summary(data: pd.DataFrame) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_model.py#L24)

Description: Print summary statistics

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe to get summary statistics for | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Summary statistics |

## Examples




# VIEW

# summary

## common_qa_view.display_summary

```python
def summary(data: pd.DataFrame, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_view.py#L52)

Description: Show summary statistics

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | DataFrame to get statistics of | None | False |
| export | str | Format to export data | None | False |

## Returns

None

## Examples

