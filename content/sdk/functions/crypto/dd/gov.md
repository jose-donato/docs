---
title: gov
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# gov

<Tabs>
<TabItem value="model" label="Model" default>

Returns coin governance

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/messari_model.py#L567)

```python
def get_governance(symbol: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Crypto symbol to check governance | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[str, pd.DataFrame] | Governance summary,<br/>Metric Value with governance details |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Prints table showing coin governance

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/messari_view.py#L602)

```python
def display_governance(symbol: str, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Crypto symbol to check coin governance | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>