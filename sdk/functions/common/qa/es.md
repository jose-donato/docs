---
title: es
description: OpenBB SDK Function
---
# es

## common_qa_model.get_es

```python
def es(data: pd.DataFrame, use_mean: bool, distribution: str, percentile: Union[float, int], portfolio: bool) -> DataFrame:
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




# VIEW

# es

## common_qa_view.display_es

```python
def es(data: pd.DataFrame, symbol: str, use_mean: bool, distribution: str, percentile: float, portfolio: bool) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_view.py#L1066)

Description: Displays expected shortfall.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Data dataframe | None | False |
| use_mean |  | if one should use the data mean return | None | False |
| symbol | str | name of the data | None | False |
| distribution | str | choose distribution to use: logistic, laplace, normal | None | False |
| percentile | int | es percentile | None | False |
| portfolio | bool | If the data is a portfolio | None | False |

## Returns

None

## Examples
