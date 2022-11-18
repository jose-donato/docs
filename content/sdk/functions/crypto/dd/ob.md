---
title: ob
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ob

<Tabs>
<TabItem value="model" label="Model" default>

Returns orderbook for a coin in a given exchange

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/ccxt_model.py#L46)

```python
def get_orderbook(exchange: str, symbol: str, to_symbol: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| exchange | str | exchange id | None | False |
| symbol | str | coin symbol | None | False |
| to_symbol | str | currency to compare coin against | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| Dict[str, Any] | With bids and asks |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Plots order book for a coin in a given exchange

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/ccxt_view.py#L19)

```python
def display_order_book(exchange: str, symbol: str, to_symbol: str, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| exchange | str | exchange id | None | False |
| symbol | str | coin symbol | None | False |
| vs | str | currency to compare coin against | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>