# es

## common_qa_model.get_es

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_model.py#L357)

Description: Gets Expected Shortfall for specified stock dataframe.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Data dataframe | None | False |
| use_mean | bool | If one should use the data mean for calculation | None | False |
| distribution | str | Type of distribution, options: laplace, student_t, normal | None | False |
| percentile | Union[float,int] | VaR percentile | None | False |
| portfolio | bool | If the data is a portfolio | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame with Expected Shortfall per percentile |

## Examples

