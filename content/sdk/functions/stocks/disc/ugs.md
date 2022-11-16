---
title: ugs
description: OpenBB SDK Function
---

# ugs

## openbb_terminal.stocks.discovery.yahoofinance_model.get_ugs

```python title='openbb_terminal/stocks/discovery/yahoofinance_model.py'
def get_ugs() -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/discovery/yahoofinance_model.py#L54)

Description: Get stocks with earnings growth rates better than 25% and relatively low PE and PEG ratios.

## Parameters

This function does not take any parameters.

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Undervalued stocks |

## Examples

