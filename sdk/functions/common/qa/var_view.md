---
title: var
description: Displays VaR of dataframe.
---
# var

## common_qa_view.display_var

```python
def var(data: pd.DataFrame, symbol: str, use_mean: bool, adjusted_var: bool, student_t: bool, percentile: float, data_range: int, portfolio: bool) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_view.py#L1006)

Description: Displays VaR of dataframe.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.Dataframe | Data dataframe | None | False |
| use_mean | bool | if one should use the data mean return | None | False |
| symbol | str | name of the data | None | False |
| adjusted_var | bool | if one should have VaR adjusted for skew and kurtosis (Cornish-Fisher-Expansion) | None | False |
| student_t | bool | If one should use the student-t distribution | None | False |
| percentile | int | var percentile | None | False |
| data_range | int | Number of rows you want to use VaR over | None | False |
| portfolio | bool | If the data is a portfolio | None | False |

## Returns

None

## Examples

