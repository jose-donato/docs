---
title: wf
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# wf

<Tabs>
<TabItem value="model" label="Model" default>

Scrapes top coins withdrawal fees

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/withdrawalfees_model.py#L120)

```python
def get_overall_withdrawal_fees(limit: int) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of coins to search, by default n=100, one page has 100 coins, so 1 page is scraped. | n | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Coin, Lowest, Average, Median, Highest, Exchanges Compared |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Top coins withdrawal fees

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/withdrawalfees_view.py#L18)

```python
def display_overall_withdrawal_fees(limit: int, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of coins to search | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>