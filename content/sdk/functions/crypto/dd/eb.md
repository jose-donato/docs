---
title: eb
description: OpenBB SDK Function
---
# eb

## crypto_dd_glassnode_model.get_exchange_balances

```python
def e) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L439)

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




# VIEW

# eb

## crypto_dd_glassnode_view.display_exchange_balances

```python
def e) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L228)

Description: Display total amount of coins held on exchange addresses in units and percentage.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Asset to search active addresses (e.g., BTC) | None | False |
| exchange | str | Exchange to check net position change (possible values are: aggregated, binance, bittrex,
coinex, gate.io, gemini, huobi, kucoin, poloniex, bibox, bigone, bitfinex, hitbtc, kraken,
okex, bithumb, zb.com, cobinhood, bitmex, bitstamp, coinbase, coincheck, luno) | None | False |
| start_date | str | Initial date, format YYYY-MM-DD | None | False |
| end_date | str | Final date, format YYYY-MM-DD | None | False |
| percentage | bool | Show percentage instead of stacked value. | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (2 axes are expected in the list), by default None | None | True |

## Returns

None

## Examples

