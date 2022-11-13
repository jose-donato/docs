---
title: vwap
description: Gets volume weighted average price (VWAP)
---
# vwap

## common_ta_overlap_model.vwap

```python
def vwap(data: pd.Series, offset: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/overlap_model.py#L138)

Description: Gets volume weighted average price (VWAP)

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of dates and prices | None | False |
| offset | int | Length of offset | None | False |
| Returns | None | None | None | None |
| ---------- | None | None | None | None |
| df_vwap | pd.DataFrame | Dataframe with VWAP data | None | False |

## Returns

None

## Examples

