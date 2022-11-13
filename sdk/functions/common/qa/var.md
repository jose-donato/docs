# var

## common_qa_model.get_var

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_model.py#L226)

Description: Gets value at risk for specified stock dataframe.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Data dataframe | None | False |
| use_mean | bool | If one should use the data mean for calculation | None | False |
| adjusted_var | bool | If one should return VaR adjusted for skew and kurtosis | None | False |
| student_t | bool | If one should use the student-t distribution | None | False |
| percentile | Union[int,float] | VaR percentile | None | False |
| portfolio | bool | If the data is a portfolio | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame with Value at Risk per percentile |

## Examples

