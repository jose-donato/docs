---
title: all_binance_trading_pairs
description: OpenBB SDK Function
---

# all_binance_trading_pairs

## openbb_terminal.cryptocurrency.due_diligence.binance_model.get_all_binance_trading_pairs

```python title='openbb_terminal/cryptocurrency/due_diligence/binance_model.py'
def get_all_binance_trading_pairs() -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/binance_model.py#L58)

Description: Returns all available pairs on Binance in DataFrame format. DataFrame has 3 columns symbol, baseAsset, quoteAsset

## Parameters

This function does not take any parameters.

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | All available pairs on Binance<br/>Columns: symbol, baseAsset, quoteAsset |

## Examples

