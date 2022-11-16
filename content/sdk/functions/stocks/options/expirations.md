---
title: expirations
description: OpenBB SDK Function
---

# expirations

## openbb_terminal.stocks.options.options_sdk_helper.get_option_expirations

```python title='openbb_terminal/stocks/options/options_sdk_helper.py'
def get_option_expirations(symbol: str, source: str) -> List
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/options_sdk_helper.py#L63)

Description: Get Option Chain Expirations

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Symbol to get chain for | None | False |
| source | str | Source to get data from, by default "Nasdaq" | None | True |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of full option chain. |

## Examples

