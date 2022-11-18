---
title: quote
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# quote

<Tabs>
<TabItem value="model" label="Model" default>

Get current exchange rate quote from alpha vantage.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/av_model.py#L56)

```python
def get_quote(to_symbol: str, from_symbol: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| to_symbol | str | To forex symbol | None | False |
| from_symbol | str | From forex symbol | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| Dict[str, Any] | Dictionary of exchange rate |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Display current forex pair exchange rate.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/av_view.py#L18)

```python
def display_quote(to_symbol: str, from_symbol: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| to_symbol | str | To symbol | None | False |
| from_symbol | str | From forex symbol | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>