---
title: eb
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# eb

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.cryptocurrency.due_diligence.glassnode_model.get_exchange_balances

```python title='openbb_terminal/cryptocurrency/due_diligence/glassnode_model.py'
def get_exchange_balances(symbol: str, exchange: str, start_date: str, end_date: str) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/glassnode_model.py#L452)

Description: Returns the total amount of coins held on exchange addresses in units and percentage.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Asset to search active addresses (e.g., BTC) | None | False |
| exchange | str | Exchange to check net position change (e.g., binance) | None | False |
| start_date | str | Initial date, format YYYY-MM-DD | None | False |
| end_date | str | Final date, format YYYY-MM-DD | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | total amount of coins in units/percentage and symbol price over time |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.cryptocurrency.due_diligence.glassnode_view.display_exchange_balances

```python title='openbb_terminal/cryptocurrency/due_diligence/glassnode_view.py'
def display_exchange_balances(symbol: str, exchange: str, start_date: str, end_date: str, percentage: bool, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/glassnode_view.py#L238)

Description: Plots total amount of coins held on exchange addresses in units and percentage.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Asset to search active addresses (e.g., BTC) | None | False |
| exchange | str | Exchange to check net position change (possible values are: aggregated, binance, bittrex,<br/>coinex, gate.io, gemini, huobi, kucoin, poloniex, bibox, bigone, bitfinex, hitbtc, kraken,<br/>okex, bithumb, zb.com, cobinhood, bitmex, bitstamp, coinbase, coincheck, luno) | None | False |
| start_date | str | Initial date, format YYYY-MM-DD | None | False |
| end_date | str | Final date, format YYYY-MM-DD | None | False |
| percentage | bool | Show percentage instead of stacked value. | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (2 axes are expected in the list), by default None | None | True |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>