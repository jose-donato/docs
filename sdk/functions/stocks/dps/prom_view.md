---
title: prom
description: Display dark pool (ATS) data of tickers with growing trades activity. [Source: FINRA]
---
# prom

## stocks_dps_finra_view.darkpool_otc

```python
def prom(input_limit: int, limit: int, tier: str, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/finra_view.py#L188)

Description: Display dark pool (ATS) data of tickers with growing trades activity. [Source: FINRA]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| input_limit | int | Number of tickers to filter from entire ATS data based on
the sum of the total weekly shares quantity | None | False |
| limit | int | Number of tickers to display from most promising with
better linear regression slope | None | False |
| tier | str | Tier to process data from: T1, T2 or OTCE | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

