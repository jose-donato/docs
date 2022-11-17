---
title: rsp
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# rsp

<Tabs>
<TabItem value="model" label="Model" default>

Relative strength percentile [Source: https://github.com/skyte/relative-strength]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/technical_analysis/rsp_model.py#L16)]

```python
def get_rsp(s_ticker: str = "") -> Tuple[pd.DataFrame, pd.DataFrame, pd.DataFrame, pd.DataFrame]
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| s_ticker | str | Stock Ticker |  | True |

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[pd.DataFrame, pd.DataFrame, pd.DataFrame, pd.DataFrame] | Dataframe of stock percentile, Dataframe of industry percentile,<br/>Raw stock dataframe for export, Raw industry dataframe for export |



</TabItem>
<TabItem value="view" label="View">

Display Relative Strength Percentile [Source: https://github.com/skyte/relative-strength]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/technical_analysis/rsp_view.py#L20)]

```python
def display_rsp(s_ticker: str = "", export: str = "", tickers_show: bool = False) -> None
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| s_ticker | str | Stock ticker |  | True |
| export | str | Format of export file |  | True |
| tickers_show | bool | Boolean to check if tickers in the same industry as the stock should be shown | False | True |

## Returns

This function does not return anything



</TabItem>
</Tabs>