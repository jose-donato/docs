---
title: crypto_hacks
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# crypto_hacks

<Tabs>
<TabItem value="model" label="Model" default>

Get major crypto-related hacks

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/rekt_model.py#L93)

```python
def get_crypto_hacks(sortby: str, ascend: bool) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sortby | str | Key by which to sort data {Platform,Date,Amount [$],Audit,Slug,URL} | None | False |
| ascend | bool | Flag to sort data ascending | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Hacks with columns {Platform,Date,Amount [$],Audited,Slug,URL} |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Display list of major crypto-related hacks. If slug is passed

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/rekt_view.py#L18)

```python
def display_crypto_hacks(limit: int, sortby: str, ascend: bool, slug: str, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| slug | str | Crypto hack slug to check (e.g., polynetwork-rekt) | None | False |
| limit | int | Number of hacks to search | None | False |
| sortby | str | Key by which to sort data {Platform,Date,Amount [$],Audit,Slug,URL} | None | False |
| ascend | bool | Flag to sort data ascending | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>