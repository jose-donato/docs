---
title: omega
description: OpenBB SDK Function
---
# omega

## common_qa_model.get_omega

```python
def omega(data: pd.DataFrame, threshold_start: float, threshold_end: float) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_model.py#L638)

Description: Get the omega series

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | stock dataframe | None | False |
| threshold_start | float | annualized target return threshold start of plotted threshold range | None | False |
| threshold_end | float | annualized target return threshold end of plotted threshold range | None | False |

## Returns

None

## Examples




# VIEW

# omega

## common_qa_view.display_omega

```python
def omega(data: pd.DataFrame, threshold_start: float, threshold_end: float) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_view.py#L1170)

Description: Displays the omega ratio

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | stock dataframe | None | False |
| threshold_start | float | annualized target return threshold start of plotted threshold range | None | False |
| threshold_end | float | annualized target return threshold end of plotted threshold range | None | False |

## Returns

None

## Examples

