---
title: ipo
description: OpenBB SDK Function
---

# ipo

## openbb_terminal.stocks.discovery.finnhub_model.get_ipo_calendar

```python title='openbb_terminal/stocks/discovery/finnhub_model.py'
def get_ipo_calendar(start_date: str, end_date: str) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/discovery/finnhub_model.py#L16)

Description: Get IPO calendar

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| start_date | str | Initial date, format YYYY-MM-DD | None | False |
| end_date | str | Final date, format YYYY-MM-DD | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Get dataframe with IPO calendar events |

## Examples

