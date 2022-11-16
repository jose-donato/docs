---
title: cgdefi
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# cgdefi

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.cryptocurrency.overview.pycoingecko_model.get_global_defi_info

```python title='openbb_terminal/cryptocurrency/overview/pycoingecko_model.py'
def get_global_defi_info() -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_model.py#L489)

Description: Get global statistics about Decentralized Finances [Source: CoinGecko]

## Parameters

This function does not take any parameters.

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Metric, Value |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.cryptocurrency.overview.pycoingecko_view.display_global_defi_info

```python title='openbb_terminal/cryptocurrency/overview/pycoingecko_view.py'
def display_global_defi_info(export: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_view.py#L305)

Description: Shows global statistics about Decentralized Finances. [Source: CoinGecko]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>