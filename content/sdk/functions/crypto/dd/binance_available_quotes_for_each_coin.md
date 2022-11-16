---
title: binance_available_quotes_for_each_coin
description: OpenBB SDK Function
---

# binance_available_quotes_for_each_coin

## openbb_terminal.cryptocurrency.due_diligence.binance_model.get_binance_available_quotes_for_each_coin

```python title='openbb_terminal/cryptocurrency/due_diligence/binance_model.py'
def get_binance_available_quotes_for_each_coin() -> dict
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/binance_model.py#L77)

Description: Helper methods that for every coin available on Binance add all quote assets. [Source: Binance]

## Parameters

This function does not take any parameters.

## Returns

| Type | Description |
| ---- | ----------- |
| dict | All quote assets for given coin<br/>{'ETH' : ['BTC', 'USDT' ...], 'UNI' : ['ETH', 'BTC','BUSD', ...] |

## Examples

