---
title: kc
description: Keltner Channels
---
# kc

## common_ta_volatility_model.kc

```python
def kc(data: pd.DataFrame, window: int, scalar: float, mamode: str, offset: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/volatility_model.py#L87)

Description: Keltner Channels

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of ohlc prices | None | False |
| window | int | Length of window | None | False |
| scalar | float | Scalar value | None | False |
| mamode | str | Type of filter | None | False |
| offset | int | Offset value | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of rolling kc |

## Examples

