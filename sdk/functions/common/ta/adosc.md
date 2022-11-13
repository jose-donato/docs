---
title: adosc
description: Calculate AD oscillator technical indicator
---
# adosc

## common_ta_volume_model.adosc

```python
def adosc(data: pd.DataFrame, use_open: bool, fast: int, slow: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/volume_model.py#L45)

Description: Calculate AD oscillator technical indicator

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of OHLC prices | None | False |
| use_open | bool | Whether to use open prices | None | False |
| fast | int | Fast value | None | False |
| slow | int | Slow value | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe with technical indicator |

## Examples

