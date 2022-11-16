---
title: dpotc
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# dpotc

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.stocks.dark_pool_shorts.finra_model.getTickerFINRAdata

```python title='openbb_terminal/stocks/dark_pool_shorts/finra_model.py'
def getTickerFINRAdata(symbol: str) -> Tuple
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/finra_model.py#L293)

Description: Get all FINRA data associated with a ticker

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker to get data from | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[pd.DataFrame, pd.DataFrame] | Dark Pools (ATS) Data, OTC (Non-ATS) Data |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.stocks.dark_pool_shorts.finra_view.darkpool_ats_otc

```python title='openbb_terminal/stocks/dark_pool_shorts/finra_view.py'
def darkpool_ats_otc(symbol: str, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/finra_view.py#L27)

Description: Display barchart of dark pool (ATS) and OTC (Non ATS) data. [Source: FINRA]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (2 axes are expected in the list), by default None | None | True |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>