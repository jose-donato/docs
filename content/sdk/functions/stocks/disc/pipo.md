---
title: pipo
description: OpenBB SDK Function
---

# pipo

## openbb_terminal.stocks.discovery.finnhub_model.get_past_ipo

```python title='openbb_terminal/stocks/discovery/finnhub_model.py'
def get_past_ipo(num_days_behind: int, start_date: Optional[str]) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/discovery/finnhub_model.py#L74)

Description: Past IPOs dates. [Source: Finnhub]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| num_days_behind | int | Number of days to look behind for IPOs dates | None | False |
| start_date | str | The starting date (format YYYY-MM-DD) to look for IPOs | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Get dataframe with past IPOs |

## Examples

