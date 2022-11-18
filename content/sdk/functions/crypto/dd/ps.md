---
title: ps
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ps

<Tabs>
<TabItem value="model" label="Model" default>

Get all most important ticker related information for given coin id [Source: CoinPaprika]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinpaprika_model.py#L290)

```python
def get_tickers_info_for_coin(symbol: str, quotes: str) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Cryptocurrency symbol (e.g. BTC) | None | False |
| quotes | str | Comma separated quotes to return e.g quotes = USD, BTC | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Most important ticker related information<br/>Columns: Metric, Value |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Prints table showing ticker information for single coin [Source: CoinPaprika]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinpaprika_view.py#L287)

```python
def display_price_supply(from_symbol: str, to_symbol: str, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| from_symbol | str | Cryptocurrency symbol (e.g. BTC) | None | False |
| to_symbol | str | Quoted currency | None | False |
| export | str | Export dataframe data to csv,json,xlsx | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>