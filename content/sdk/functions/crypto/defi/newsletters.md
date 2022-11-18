---
title: newsletters
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# newsletters

<Tabs>
<TabItem value="model" label="Model" default>

Scrape all substack newsletters from url list.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/substack_model.py#L54)

```python
def get_newsletters() -> DataFrame
```
---

## Parameters

This function does not take any parameters.

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame with recent news from most popular DeFi related newsletters. |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Prints table showing DeFi related substack newsletters.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/substack_view.py#L16)

```python
def display_newsletters(limit: int, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>