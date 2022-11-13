---
title: root
description: Calculate test statistics for unit roots
---
# root

## econometrics_model.get_root

```python
def root(data: pd.Series, fuller_reg: str, kpss_reg: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/econometrics_model.py#L165)

Description: Calculate test statistics for unit roots

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.Series | Series or column of DataFrame of target variable | None | False |
| fuller_reg | str | Type of regression of ADF test | None | False |
| kpss_reg | str | Type of regression for KPSS test | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe with results of ADF test and KPSS test |

## Examples

