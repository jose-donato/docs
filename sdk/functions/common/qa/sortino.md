---
title: sortino
description: OpenBB SDK Function
---
# sortino

## common_qa_model.get_sortino

```python
def sortino(data: pd.DataFrame, target_return: float, window: float, adjusted: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_model.py#L563)

Description: Calculates the sortino ratio

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | selected dataframe | None | False |
| target_return | float | target return of the asset | None | False |
| window | float | length of the rolling window | None | False |
| adjusted | bool | adjust the sortino ratio | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | sortino ratio |

## Examples




# VIEW

# sortino

## common_qa_view.display_sortino

```python
def sortino(data: pd.DataFrame, target_return: float, window: float, adjusted: bool) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_view.py#L1138)

Description: Displays the sortino ratio

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | selected dataframe | None | False |
| target_return | float | target return of the asset | None | False |
| window | float | length of the rolling window | None | False |
| adjusted | bool | adjust the sortino ratio | None | False |

## Returns

None

## Examples
