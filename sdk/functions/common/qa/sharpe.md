---
title: sharpe
description: OpenBB SDK Function
---
# sharpe

## common_qa_model.get_sharpe

```python
def sharpe(data: pd.DataFrame, rfr: float, window: float) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_model.py#L539)

Description: Calculates the sharpe ratio

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | selected dataframe column | None | False |
| rfr | float | risk free rate | None | False |
| window | float | length of the rolling window | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | sharpe ratio |

## Examples




# VIEW

# sharpe

## common_qa_view.display_sharpe

```python
def sharpe(data: pd.DataFrame, rfr: float, window: float) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_view.py#L1114)

Description: Calculates the sharpe ratio

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | selected dataframe column | None | False |
| rfr | float | risk free rate | None | False |
| window | float | length of the rolling window | None | False |

## Returns

None

## Examples

