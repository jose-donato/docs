---
title: recom
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# recom

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.stocks.technical_analysis.tradingview_model.get_tradingview_recommendation

```python title='openbb_terminal/stocks/technical_analysis/tradingview_model.py'
def get_tradingview_recommendation(symbol: str, screener: str, exchange: str, interval: str) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/technical_analysis/tradingview_model.py#L56)

Description: Get tradingview recommendation based on technical indicators

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to get the recommendation from tradingview based on technical indicators | None | False |
| screener | str | Screener based on tradingview docs https://python-tradingview-ta.readthedocs.io/en/latest/usage.html | None | False |
| exchange | str | Exchange based on tradingview docs https://python-tradingview-ta.readthedocs.io/en/latest/usage.html | None | False |
| interval | str | Interval time to check technical indicators and correspondent recommendation | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of tradingview recommendations based on technical indicators |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.stocks.technical_analysis.tradingview_view.print_recommendation

```python title='openbb_terminal/stocks/technical_analysis/tradingview_view.py'
def print_recommendation(symbol: str, screener: str, exchange: str, interval: str, export: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/technical_analysis/tradingview_view.py#L17)

Description: Print tradingview recommendation based on technical indicators

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to get tradingview recommendation based on technical indicators | None | False |
| screener | str | Screener based on tradingview docs https://python-tradingview-ta.readthedocs.io/en/latest/usage.html | None | False |
| exchange | str | Exchange based on tradingview docs https://python-tradingview-ta.readthedocs.io/en/latest/usage.html | None | False |
| interval | str | Interval time to check technical indicators and correspondent recommendation | None | False |
| export | str | Format of export file | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>