---
title: cpinfo
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# cpinfo

<Tabs>
<TabItem value="model" label="Model" default>

Returns basic coin information for all coins from CoinPaprika API [Source: CoinPaprika]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/coinpaprika_model.py#L183)

```python
def get_coins_info(symbols: str, sortby: str, ascend: bool) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbols | str | Comma separated quotes to return e.g quotes=USD,BTC | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data descending | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | rank, name, symbol, price, volume_24h, circulating_supply, total_supply,<br/>max_supply, market_cap, beta_value, ath_price, |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Displays basic coin information for all coins from CoinPaprika API. [Source: CoinPaprika]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/coinpaprika_view.py#L159)

```python
def display_all_coins_info(symbol: str, sortby: str, ascend: bool, limit: int, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Quoted currency | None | False |
| limit | int | Number of records to display | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data descending | None | False |
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