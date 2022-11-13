---
title: arktrades
description: Gets a dataframe of ARK trades for ticker
---
# arktrades

## stocks_dd_ark_model.get_ark_trades_by_ticker

```python
def arktrades(symbol: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/due_diligence/ark_model.py#L18)

Description: Gets a dataframe of ARK trades for ticker

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker to get trades for | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame of trades |

## Examples

