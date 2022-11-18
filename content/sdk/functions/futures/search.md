---
title: search
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# search

<Tabs>
<TabItem value="model" label="Model" default>

Get search futures [Source: Yahoo Finance]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/futures/yfinance_model.py#L50)

```python
def get_search_futures(category: str, exchange: str, description: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| category | str | Select the category where the future exists | None | False |
| exchange | str | Select the exchange where the future exists | None | False |
| description | str | Select the description where the future exists | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Display search futures [Source: Yahoo Finance]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/futures/yfinance_view.py#L29)

```python
def display_search(category: str, exchange: str, description: str, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| category | str | Select the category where the future exists | None | False |
| exchange | str | Select the exchange where the future exists | None | False |
| description | str | Select the description of the future | None | False |
| export | str | Type of format to export data | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>