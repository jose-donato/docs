---
title: cghm
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# cghm

<Tabs>
<TabItem value="model" label="Model" default>

Get N coins from CoinGecko [Source: CoinGecko]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/pycoingecko_model.py#L128)

```python
def get_coins(limit: int, category: str, sortby: str, ascend: bool) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of top coins to grab from CoinGecko | None | False |
| category | str | Category of the coins we want to retrieve | None | False |
| sortby | str | Key to sort data | None | False |
| ascend | bool | Sort data in ascending order | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | N coins |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Shows cryptocurrencies heatmap [Source: CoinGecko]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_view.py#L36)

```python
def display_crypto_heatmap(category: str, limit: int, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| caterogy | str | Category (e.g., stablecoins). Empty for no category (default: ) | None | False |
| limit | int | Number of top cryptocurrencies to display | None | False |
| export | str | Export dataframe data to csv,json,xlsx | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>