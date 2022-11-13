---
title: atr
description: Average True Range
---
# atr

## common_ta_volatility_model.atr

```python
def atr(data: pd.DataFrame, window: int, mamode: str, offset: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/volatility_model.py#L131)

Description: Average True Range

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of ohlc prices | None | False |
| window | int | Length of window | None | False |
| mamode | str | Type of filter | None | False |
| offset | int | Offset value | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of atr |

## Examples

