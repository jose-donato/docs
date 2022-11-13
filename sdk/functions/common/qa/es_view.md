---
title: es
description: Displays expected shortfall.
---
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

