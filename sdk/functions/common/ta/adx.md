---
title: adx
description: ADX technical indicator
---
# adx

## common_ta_trend_indicators_model.adx

```python
def adx(data: pd.DataFrame, window: int, scalar: int, drift: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/trend_indicators_model.py#L15)

Description: ADX technical indicator

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe with OHLC price data | None | False |
| window | int | Length of window | None | False |
| scalar | int | Scalar variable | None | False |
| drift | int | Drift variable | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame with adx indicator |

## Examples

