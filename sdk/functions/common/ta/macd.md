---
title: macd
description: Moving average convergence divergence
---
# macd

## common_ta_momentum_model.macd

```python
def macd(data: pd.Series, n_fast: int, n_slow: int, n_signal: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/momentum_model.py#L60)

Description: Moving average convergence divergence

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.Series | Values for calculation | None | False |
| n_fast | int | Fast period | None | False |
| n_slow | int | Slow period | None | False |
| n_signal | int | Signal period | None | False |
| Returns | None | None | None | None |
| ---------- | None | None | None | None |
| pd.DataFrame | None | Dataframe of technical indicator | None | None |

## Returns

None

## Examples

