---
title: mkt
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# mkt

<Tabs>
<TabItem value="model" label="Model" default>

All markets for given coin and currency [Source: CoinPaprika]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinpaprika_model.py#L176)

```python
def get_coin_markets_by_id(symbol: str, quotes: str, sortby: str, ascend: bool) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Cryptocurrency symbol (e.g. BTC) | None | False |
| quotes | str | Comma separated list of quotes to return.<br/>Example: quotes=USD,BTC<br/>Allowed values:<br/>BTC, ETH, USD, EUR, PLN, KRW, GBP, CAD, JPY, RUB, TRY, NZD, AUD, CHF, UAH, HKD, SGD, NGN,<br/>PHP, MXN, BRL, THB, CLP, CNY, CZK, DKK, HUF, IDR, ILS, INR, MYR, NOK, PKR, SEK, TWD, ZAR,<br/>VND, BOB, COP, PEN, ARS, ISK | None | False |
| sortby | str | Key by which to sort data. Every column name is valid (see for possible values:<br/>https://api.coinpaprika.com/v1). | None | False |
| ascend | bool | Flag to sort data ascending | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | All markets for given coin and currency |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Prints table showing all markets for given coin id. [Source: CoinPaprika]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinpaprika_view.py#L230)

```python
def display_markets(from_symbol: str, to_symbol: str, limit: int, sortby: str, ascend: bool, links: bool, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| from_symbol | str | Cryptocurrency symbol (e.g. BTC) | None | False |
| to_symbol | str | Quoted currency | None | False |
| limit | int | Number of records to display | None | False |
| sortby | str | Key by which to sort data. Every column name is valid (see for possible values:<br/>https://api.coinpaprika.com/v1). | None | False |
| ascend | bool | Flag to sort data ascending | None | False |
| links | bool | Flag to display urls | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>