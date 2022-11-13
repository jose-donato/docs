---
title: prom
description: Get all FINRA ATS data, and parse most promising tickers based on linear regression
---
# prom

## stocks_dps_finra_model.getATSdata

```python
def prom(limit: int, tier_ats: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/finra_model.py#L215)

Description: Get all FINRA ATS data, and parse most promising tickers based on linear regression

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of tickers to filter from entire ATS data based on the sum of the total weekly shares quantity | None | False |
| tier_ats | int | Tier to process data from: T1, T2 or OTCE | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dark Pools (ATS) Data |

## Examples

