---
title: prom
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# prom

<Tabs>
<TabItem value="model" label="Model" default>

Get all FINRA ATS data, and parse most promising tickers based on linear regression

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/finra_model.py#L214)

```python
def getATSdata(limit: int, tier_ats: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of tickers to filter from entire ATS data based on the sum of the total weekly shares quantity | None | False |
| tier_ats | int | Tier to process data from: T1, T2 or OTCE | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[pd.DataFrame, Dict] | Dark Pools (ATS) Data, Tickers from Dark Pools with better regression slope |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Display dark pool (ATS) data of tickers with growing trades activity. [Source: FINRA]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/finra_view.py#L188)

```python
def darkpool_otc(input_limit: int, limit: int, tier: str, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| input_limit | int | Number of tickers to filter from entire ATS data based on<br/>the sum of the total weekly shares quantity | None | False |
| limit | int | Number of tickers to display from most promising with<br/>better linear regression slope | None | False |
| tier | str | Tier to process data from: T1, T2 or OTCE | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>