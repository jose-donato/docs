---
title: print_insider_data
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# print_insider_data

<Tabs>
<TabItem value="model" label="Model" default>

Print insider data

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/insider/openinsider_model.py#L1437)

```python
def get_print_insider_data(type_insider: str, limit: int) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| type_insider | str | Insider type of data. Available types can be accessed through get_insider_types(). | None | False |
| limit | int | Limit of data rows to display | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Open insider filtered data |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Print insider data

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/insider/openinsider_view.py#L108)

```python
def print_insider_data(type_insider: str, limit: int, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| type_insider | str | Insider type of data. Available types can be accessed through get_insider_types(). | None | False |
| limit | int | Limit of data rows to display | None | False |
| export | str | Export data format | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>