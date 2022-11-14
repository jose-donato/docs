---
title: change
description: OpenBB SDK Function
---
# change

## crypto_dd_glassnode_model.get_exchange_net_position_change

```python
def chang) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L521)

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




# VIEW

# change

## crypto_dd_glassnode_view.display_exchange_net_position_change

```python
def chang) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L150)

Description: Display 30d change of the supply held in exchange wallets.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Asset to search active addresses (e.g., BTC) | None | False |
| exchange | str | Exchange to check net position change (possible values are: aggregated, binance,
bittrex, coinex, gate.io, gemini, huobi, kucoin, poloniex, bibox, bigone, bitfinex,
hitbtc, kraken, okex, bithumb, zb.com, cobinhood, bitmex, bitstamp, coinbase, coincheck, luno) | None | False |
| start_date | str | Initial date, format YYYY-MM-DD | None | False |
| end_date | str | Final date, format YYYY-MM-DD | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

