---
title: quote
description: Get current exchange rate quote from alpha vantage.
---
# quote

## forex_av_model.get_quote

```python
def quote(to_symbol: str, from_symbol: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/av_model.py#L55)

Description: Get current exchange rate quote from alpha vantage.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| to_symbol | str | To forex symbol | None | False |
| from_symbol | str | From forex symbol | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Dict | Dictionary of exchange rate |

## Examples

