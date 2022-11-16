---
title: decompose
description: OpenBB SDK Function
---

# decompose

## openbb_terminal.common.quantitative_analysis.qa_model.get_seasonal_decomposition

```python title='openbb_terminal/common/quantitative_analysis/qa_model.py'
def get_seasonal_decomposition(data: pd.DataFrame, multiplicative: bool) -> Tuple
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_model.py#L46)

Description: Perform seasonal decomposition

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of targeted data | None | False |
| multiplicative | bool | Boolean to indicate multiplication instead of addition | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[DecomposeResult, pd.DataFrame, pd.DataFrame] | DecomposeResult class from statsmodels (observed, seasonal, trend, residual, and weights),<br/>Filtered cycle DataFrame,<br/>Filtered trend DataFrame |

## Examples

