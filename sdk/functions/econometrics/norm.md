---
title: norm
description: The distribution of returns and generate statistics on the relation to the normal curve.
---
# norm

## econometrics_model.get_normality

```python
def norm(data: pd.Series) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/econometrics_model.py#L110)

Description: The distribution of returns and generate statistics on the relation to the normal curve.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.Series | A series or column of a DataFrame to test normality for | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe containing statistics of normality |

## Examples

