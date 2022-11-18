---
title: ex
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ex

<Tabs>
<TabItem value="model" label="Model" default>

Get all exchanges for given coin id. [Source: CoinPaprika]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinpaprika_model.py#L137)

```python
def get_coin_exchanges_by_id(symbol: str, sortby: str, ascend: bool) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Cryptocurrency symbol (e.g. BTC) | None | False |
| sortby | str | Key by which to sort data. Every column name is valid (see for possible values:<br/>https://api.coinpaprika.com/v1). | None | False |
| ascend | bool | Flag to sort data ascending | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | All exchanges for given coin<br/>Columns: id, name, adjusted_volume_24h_share, fiats |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Prints table showing all exchanges for given coin id. [Source: CoinPaprika]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinpaprika_view.py#L185)

```python
def display_exchanges(symbol: str, limit: int, sortby: str, ascend: bool, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Cryptocurrency symbol (e.g. BTC) | None | False |
| limit | int | Number of records to display | None | False |
| sortby | str | Key by which to sort data. Every column name is valid (see for possible values:<br/>https://api.coinpaprika.com/v1). | None | False |
| ascend | bool | Flag to sort data ascending | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>