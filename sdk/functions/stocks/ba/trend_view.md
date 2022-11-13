---
title: trend
description: Display most talked about tickers within
---
# trend

## stocks_ba_sentimentinvestor_view.display_trending

```python
def tren) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L146)

Description: Display most talked about tickers within

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| start_date | str | Initial date, format YYYY-MM-DD | None | False |
| hour | int | Hour of the day in 24-hour notation (e.g. 14) | None | False |
| number | int | Number of results returned by API call
Maximum 250 per api call | None | False |
| limit | int | Number of results display on the terminal
Default: 10 | 10 | False |
| export | str | Format to export data | None | False |

## Returns

None

## Examples

