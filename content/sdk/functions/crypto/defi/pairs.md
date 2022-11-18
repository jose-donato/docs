---
title: pairs
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# pairs

<Tabs>
<TabItem value="model" label="Model" default>

Get lastly added trade-able pairs on Uniswap with parameters like:

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/graph_model.py#L164)

```python
def get_uniswap_pool_recently_added(last_days: int, min_volume: int, min_liquidity: int, min_tx: int) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| last_days | int | How many days back to look for added pairs. | None | False |
| min_volume | int | Minimum volume | None | False |
| min_liquidity | int | Minimum liquidity | None | False |
| min_tx | int | Minimum number of transactions done in given pool. | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Lastly added pairs on Uniswap DEX. |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Prints table showing Lastly added pairs on Uniswap DEX.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/graph_view.py#L102)

```python
def display_recently_added(limit: int, days: int, min_volume: int, min_liquidity: int, min_tx: int, sortby: str, ascend: bool, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | None | False |
| days | int | Number of days the pair has been active, | None | False |
| min_volume | int | Minimum trading volume, | None | False |
| min_liquidity | int | Minimum liquidity | None | False |
| min_tx | int | Minimum number of transactions | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data descending | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>