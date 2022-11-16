---
title: fipo
description: OpenBB SDK Function
---

# fipo

## stocks_disc_finnhub_model.get_future_ipo

```python title='openbb_terminal/stocks/discovery/finnhub_model.py'
def get_future_ipo(num_days_ahead: int, end_date: Union[str, NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/discovery/finnhub_model.py#L103)

Description: Future IPOs dates. [Source: Finnhub]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| num_days_ahead | int | Number of days to look ahead for IPOs dates | None | False |
| end_date | datetime | The end date (format YYYY-MM-DD) to look for IPOs from today onwards | None | False |

## Returns

None

## Examples
