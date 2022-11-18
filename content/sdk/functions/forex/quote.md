---
title: quote
description: OpenBB SDK Function
---

# quote

Get current exchange rate quote from alpha vantage.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/av_model.py#L56)]

```python
def get_quote(to_symbol: str = "USD", from_symbol: str = "EUR") -> Dict[str, Any]
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| to_symbol | str | To forex symbol | USD | True |
| from_symbol | str | From forex symbol | EUR | True |

## Returns

| Type | Description |
| ---- | ----------- |
| Dict[str, Any] | Dictionary of exchange rate |

