---
title: sidtc
description: Get short interest and days to cover. [Source: Stockgrid]
---
# sidtc

## stocks_dps_stockgrid_model.get_short_interest_days_to_cover

```python
def sidtc(sortby: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/stockgrid_model.py#L77)

Description: Get short interest and days to cover. [Source: Stockgrid]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sortby | str | Field for which to sort by, where 'float': Float Short %%,
'dtc': Days to Cover, 'si': Short Interest | None | False |
| Returns | None | None | None | None |
| ---------- | None | None | None | None |
| pd.DataFrame | None | Short interest and days to cover data | None | None |

## Returns

None

## Examples

