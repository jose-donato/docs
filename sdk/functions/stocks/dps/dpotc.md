---
title: dpotc
description: OpenBB SDK Function
---
# dpotc

## stocks_dps_finra_model.getTickerFINRAdata

```python
def dpotc(symbol: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/finra_model.py#L296)

Description: Get all FINRA data associated with a ticker

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker to get data from | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dark Pools (ATS) Data |

## Examples




# VIEW

# dpotc

## stocks_dps_finra_view.darkpool_ats_otc

```python
def dpotc(symbol: str, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/finra_view.py#L26)

Description: Display barchart of dark pool (ATS) and OTC (Non ATS) data. [Source: FINRA]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (2 axes are expected in the list), by default None | None | True |

## Returns

None

## Examples

