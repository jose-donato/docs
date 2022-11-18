---
title: exchanges
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# exchanges

<Tabs>
<TabItem value="model" label="Model" default>

Get list of top exchanges from CoinGecko API [Source: CoinGecko]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_model.py#L218)

```python
def get_exchanges(sortby: str, ascend: bool) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data descending | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Trust_Score, Id, Name, Country, Year_Established, Trade_Volume_24h_BTC, Url |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Shows list of top exchanges from CoinGecko. [Source: CoinGecko]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_view.py#L499)

```python
def display_exchanges(sortby: str, ascend: bool, limit: int, links: bool, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
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