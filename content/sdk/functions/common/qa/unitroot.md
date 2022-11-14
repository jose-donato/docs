---
title: unitroot
description: OpenBB SDK Function
---
# unitroot

## common_qa_model.get_unitroot

```python
def unitroot(data: pd.DataFrame, fuller_reg: str, kpss_reg: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_model.py#L136)

Description: Calculate test statistics for unit roots

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | DataFrame of target variable | None | False |
| fuller_reg | str | Type of regression of ADF test. Can be ‘c’,’ct’,’ctt’,’nc’ 'c' - Constant and t - trend order | None | False |
| kpss_reg | str | Type of regression for KPSS test.  Can be ‘c’,’ct' | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe with results of ADF test and KPSS test |

## Examples




# VIEW

# unitroot

## common_qa_view.display_unitroot

```python
def unitroot(data: pd.DataFrame, target: str, fuller_reg: str, kpss_reg: str, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_view.py#L802)

Description: Show unit root test calculations

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | DataFrame | None | False |
| target | str | Column of data to look at | None | False |
| fuller_reg | str | Type of regression of ADF test. Can be ‘c’,’ct’,’ctt’,’nc’ 'c' - Constant and t - trend order | None | False |
| kpss_reg | str | Type of regression for KPSS test. Can be ‘c’,’ct' | None | False |
| export | str | Format for exporting data | None | False |

## Returns

None

## Examples

