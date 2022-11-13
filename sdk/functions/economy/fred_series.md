---
title: fred_series
description: Get Series data. [Source: FRED]
---
# fred_series

## economy_fred_model.get_aggregated_series_data

```python
def fred_serie) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L203)

Description: Get Series data. [Source: FRED]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| series_ids | List[str] | Series ID to get data from | None | False |
| start_date | str | Start date to get data from, format yyyy-mm-dd | None | False |
| end_date | str | End data to get from, format yyyy-mm-dd | None | False |
| Returns | None | None | None | None |
| ---------- | None | None | None | None |
| pd.DataFrame | None | Series data | None | None |

## Returns

None

## Examples

