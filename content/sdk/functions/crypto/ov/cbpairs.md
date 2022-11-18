---
title: cbpairs
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# cbpairs

<Tabs>
<TabItem value="model" label="Model" default>

Get a list of available currency pairs for trading. [Source: Coinbase]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/coinbase_model.py#L24)

```python
def get_trading_pairs(limit: int, sortby: str, ascend: bool) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Top n of pairs | None | False |
| sortby | str | Key to sortby data | None | False |
| ascend | bool | Sort descending flag | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Available trading pairs on Coinbase |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Displays a list of available currency pairs for trading. [Source: Coinbase]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/coinbase_view.py#L19)

```python
def display_trading_pairs(limit: int, sortby: str, ascend: bool, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Top n of pairs | None | False |
| sortby | str | Key to sortby data | None | False |
| ascend | bool | Sort ascending flag | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>