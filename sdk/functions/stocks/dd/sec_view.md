---
title: sec
description: Display SEC filings for a given stock ticker. [Source: Market Watch]
---
# sec

## stocks_dd_marketwatch_view.sec_filings

```python
def sec(symbol: str, limit: int, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/due_diligence/marketwatch_view.py#L14)

Description: Display SEC filings for a given stock ticker. [Source: Market Watch]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| limit | int | Number of ratings to display | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

