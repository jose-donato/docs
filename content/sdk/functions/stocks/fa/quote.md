---
title: quote
description: OpenBB SDK Function
---

# quote

## openbb_terminal.stocks.fundamental_analysis.fmp_model.get_quote

```python title='openbb_terminal/stocks/fundamental_analysis/fmp_model.py'
def get_quote(symbol: str) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/fmp_model.py#L84)

Description: Gets ticker quote from FMP

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of ticker quote |

## Examples

