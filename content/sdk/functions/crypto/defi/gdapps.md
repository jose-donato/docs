---
title: gdapps
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# gdapps

<Tabs>
<TabItem value="model" label="Model" default>

Display top dApps (in terms of TVL) grouped by chain.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/llama_model.py#L149)

```python
def get_grouped_defi_protocols(limit: int) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of top dApps to display | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Information about DeFi protocols grouped by chain |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Plots top dApps (in terms of TVL) grouped by chain.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/llama_view.py#L28)

```python
def display_grouped_defi_protocols(limit: int, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| num | int | Number of top dApps to display | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>