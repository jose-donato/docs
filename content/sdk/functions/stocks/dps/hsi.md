---
title: hsi
description: OpenBB SDK Function
---

# hsi

Returns a high short interest DataFrame

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/shortinterest_model.py#L18)]

```python
def get_high_short_interest() -> DataFrame
```
## Parameters

This function does not take any parameters.

## Returns

| Type | Description |
| ---- | ----------- |
| DataFrame | High short interest Dataframe with the following columns:<br/>Ticker, Company, Exchange, ShortInt, Float, Outstd, Industry |

