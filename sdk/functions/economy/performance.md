---
title: performance
description: OpenBB SDK Function
---
# performance

## economy_finviz_model.get_performance_data

```python
def performance(group: str, sortby: str, ascend: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/finviz_model.py#L111)

Description: Get group (sectors, industry or country) performance data. [Source: Finviz]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| group | str | Group by category. Available groups can be accessed through get_groups(). | None | False |
| sortby | str | Column to sort by | None | False |
| ascend | bool | Flag to sort in ascending order | None | False |
| Returns | None | None | None | None |
| ---------- | None | None | None | None |
| pd.DataFrame | None | dataframe with performance data | None | None |

## Returns

None

## Examples




# VIEW

# performance

## economy_finviz_view.display_performance

```python
def performance(group: str, sortby: str, ascend: bool, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/finviz_view.py#L71)

Description: View group (sectors, industry or country) performance data. [Source: Finviz]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| group | str | Group by category. Available groups can be accessed through get_groups(). | None | False |
| sortby | str | Column to sort by | None | False |
| ascend | bool | Flag to sort in ascending order | None | False |
| export | str | Export data to csv,json,xlsx or png,jpg,pdf,svg file | None | False |

## Returns

None

## Examples

