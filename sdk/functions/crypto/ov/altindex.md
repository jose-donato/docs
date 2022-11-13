---
title: altindex
description: Get altcoin index overtime
---
# altindex

## crypto_ov_blockchaincenter_model.get_altcoin_index

```python
def altindex(period: int, start_date: str, end_date: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/blockchaincenter_model.py#L18)

Description: Get altcoin index overtime

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| period | int | Number of days {30,90,365} to check performance of coins and calculate the altcoin index.
E.g., 365 checks yearly performance, 90 will check seasonal performance (90 days),
30 will check monthly performance (30 days). | None | False |
| start_date | str | Initial date, format YYYY-MM-DD | None | False |
| end_date | str | Final date, format YYYY-MM-DD | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
|  | Date, Value (Altcoin Index) |

## Examples

