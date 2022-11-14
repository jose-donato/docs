---
title: root
description: OpenBB SDK Function
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




# VIEW

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

