---
title: change
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# change

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.cryptocurrency.due_diligence.glassnode_model.get_exchange_net_position_change

```python title='openbb_terminal/cryptocurrency/due_diligence/glassnode_model.py'
def get_exchange_net_position_change(symbol: str, exchange: str, start_date: str, end_date: str) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/glassnode_model.py#L538)

Description: Returns 30d change of the supply held in exchange wallets of a certain symbol.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Asset symbol to search supply (e.g., BTC) | None | False |
| exchange | str | Exchange to check net position change (e.g., binance) | None | False |
| start_date | str | Initial date, format YYYY-MM-DD | None | False |
| end_date | str | Final date, format YYYY-MM-DD | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | supply change in exchange wallets of a certain symbol over time |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.cryptocurrency.due_diligence.glassnode_view.display_exchange_net_position_change

```python title='openbb_terminal/cryptocurrency/due_diligence/glassnode_view.py'
def display_exchange_net_position_change(symbol: str, exchange: str, start_date: str, end_date: str, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/glassnode_view.py#L157)

Description: Plots 30d change of the supply held in exchange wallets.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Asset to search active addresses (e.g., BTC) | None | False |
| exchange | str | Exchange to check net position change (possible values are: aggregated, binance,<br/>bittrex, coinex, gate.io, gemini, huobi, kucoin, poloniex, bibox, bigone, bitfinex,<br/>hitbtc, kraken, okex, bithumb, zb.com, cobinhood, bitmex, bitstamp, coinbase, coincheck, luno) | None | False |
| start_date | str | Initial date, format YYYY-MM-DD | None | False |
| end_date | str | Final date, format YYYY-MM-DD | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>