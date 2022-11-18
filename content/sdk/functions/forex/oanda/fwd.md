---
title: fwd
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# fwd

<Tabs>
<TabItem value="model" label="Model" default>

Gets forward rates from fxempire

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/fxempire_model.py#L14)

```python
def get_forward_rates(to_symbol: str, from_symbol: str) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| to_symbol | str | To currency | None | False |
| from_symbol | str | From currency | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe containing forward rates |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Display forward rates for currency pairs

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/fxempire_view.py#L14)

```python
def display_forward_rates(to_symbol: str, from_symbol: str, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| to_symbol | str | To currency | None | False |
| from_symbol | str | From currency | None | False |
| export | str | Format to export data | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>