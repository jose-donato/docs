---
title: summary
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# summary

<Tabs>
<TabItem value="model" label="Model" default>

Return summary description of ETF. [Source: Yahoo Finance]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/yfinance_model.py#L44)

```python
def get_etf_summary_description(name: str) -> str
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| name | str | ETF name | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| str | Summary description of the ETF |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Display ETF description summary. [Source: Yahoo Finance]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/yfinance_view.py#L101)

```python
def display_etf_description(name: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| name | str | ETF name | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>