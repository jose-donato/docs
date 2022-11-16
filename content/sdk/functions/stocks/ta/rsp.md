---
title: rsp
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# rsp

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.stocks.technical_analysis.rsp_model.get_rsp

```python title='openbb_terminal/stocks/technical_analysis/rsp_model.py'
def get_rsp(s_ticker: str) -> Tuple
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/technical_analysis/rsp_model.py#L16)

Description: Relative strength percentile [Source: https://github.com/skyte/relative-strength]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| s_ticker | str | Stock Ticker | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[pd.DataFrame, pd.DataFrame, pd.DataFrame, pd.DataFrame] | Dataframe of stock percentile, Dataframe of industry percentile,<br/>Raw stock dataframe for export, Raw industry dataframe for export |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.stocks.technical_analysis.rsp_view.display_rsp

```python title='openbb_terminal/stocks/technical_analysis/rsp_view.py'
def display_rsp(s_ticker: str, export: str, tickers_show: bool) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/technical_analysis/rsp_view.py#L20)

Description: Display Relative Strength Percentile [Source: https://github.com/skyte/relative-strength]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| s_ticker | str | Stock ticker | None | False |
| export | str | Format of export file | None | False |
| tickers_show | bool | Boolean to check if tickers in the same industry as the stock should be shown | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>