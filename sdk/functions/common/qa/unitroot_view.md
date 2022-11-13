---
title: unitroot
description: Show unit root test calculations
---
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

