---
title: tx
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# tx

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.cryptocurrency.onchain.ethplorer_model.get_tx_info

```python title='openbb_terminal/cryptocurrency/onchain/ethplorer_model.py'
def get_tx_info(tx_hash: Any) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/ethplorer_model.py#L444)

Description: Get info about transaction. [Source: Ethplorer]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| tx_hash | str | Transaction hash e.g. 0x9dc7b43ad4288c624fdd236b2ecb9f2b81c93e706b2ffd1d19b112c1df7849e6 | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame with information about ERC20 token transaction. |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.cryptocurrency.onchain.ethplorer_view.display_tx_info

```python title='openbb_terminal/cryptocurrency/onchain/ethplorer_view.py'
def display_tx_info(tx_hash: str, export: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/ethplorer_view.py#L249)

Description: Display info about transaction. [Source: Ethplorer]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| tx_hash | str | Transaction hash e.g. 0x9dc7b43ad4288c624fdd236b2ecb9f2b81c93e706b2ffd1d19b112c1df7849e6 | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>