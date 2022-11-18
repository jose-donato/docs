---
title: basic
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# basic

<Tabs>
<TabItem value="model" label="Model" default>

Basic coin information [Source: CoinPaprika]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinpaprika_model.py#L379)

```python
def basic_coin_info(symbol: str) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Cryptocurrency symbol (e.g. BTC) | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Metric, Value |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Prints table showing basic information for coin. Like:

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinpaprika_view.py#L325)

```python
def display_basic(symbol: str, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Cryptocurrency symbol (e.g. BTC) | None | False |
| export | str | Export dataframe data to csv,json,xlsx | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>