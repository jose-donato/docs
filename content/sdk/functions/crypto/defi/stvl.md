---
title: stvl
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# stvl

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.cryptocurrency.defi.llama_model.get_defi_tvl

```python title='openbb_terminal/cryptocurrency/defi/llama_model.py'
def get_defi_tvl() -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/llama_model.py#L170)

Description: Returns historical values of the total sum of TVLs from all listed protocols.

## Parameters

This function does not take any parameters.

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Historical values of total sum of Total Value Locked from all listed protocols. |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.cryptocurrency.defi.llama_view.display_defi_tvl

```python title='openbb_terminal/cryptocurrency/defi/llama_view.py'
def display_defi_tvl(limit: int, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/llama_view.py#L188)

Description: Plots historical values of the total sum of TVLs from all listed protocols.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display, by default 5 | 5 | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>