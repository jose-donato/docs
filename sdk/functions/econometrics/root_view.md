---
title: root
description: Determine the normality of a timeseries.
---
# root

## econometrics_view.display_root

```python
def root(data: pd.Series, dataset: str, column: str, fuller_reg: str, kpss_reg: str, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/econometrics_view.py#L203)

Description: Determine the normality of a timeseries.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.Series | Series of target variable | None | False |
| dataset | str | Name of the dataset | None | False |
| column | str | Name of the column | None | False |
| fuller_reg | str | Type of regression of ADF test. Choose c, ct, ctt, or nc | None | False |
| kpss_reg | str | Type of regression for KPSS test. Choose c or ct | None | False |
| export | str | Format to export data. | None | False |

## Returns

None

## Examples

