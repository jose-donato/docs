---
title: gwei
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# gwei

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.cryptocurrency.onchain.ethgasstation_model.get_gwei_fees

```python title='openbb_terminal/cryptocurrency/onchain/ethgasstation_model.py'
def get_gwei_fees() -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/ethgasstation_model.py#L13)

Description: Returns the most recent Ethereum gas fees in gwei

## Parameters

This function does not take any parameters.

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | four gas fees and durations<br/>    (fees for slow, average, fast and<br/>    fastest transactions in gwei and<br/>    its average durations in seconds) |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.cryptocurrency.onchain.ethgasstation_view.display_gwei_fees

```python title='openbb_terminal/cryptocurrency/onchain/ethgasstation_view.py'
def display_gwei_fees(export: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/ethgasstation_view.py#L14)

Description: Current gwei fees

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>