---
title: oi
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# oi

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.cryptocurrency.due_diligence.coinglass_model.get_open_interest_per_exchange

```python title='openbb_terminal/cryptocurrency/due_diligence/coinglass_model.py'
def get_open_interest_per_exchange(symbol: str, interval: int) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinglass_model.py#L149)

Description: Returns open interest by exchange for a certain symbol

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Crypto Symbol to search open interest futures (e.g., BTC) | None | False |
| interval | int | Frequency (possible values are: 0 for ALL, 2 for 1H, 1 for 4H, 4 for 12H), by default 0 | 0 | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | open interest by exchange and price |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.cryptocurrency.due_diligence.coinglass_view.display_open_interest

```python title='openbb_terminal/cryptocurrency/due_diligence/coinglass_view.py'
def display_open_interest(symbol: str, interval: int, export: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinglass_view.py#L57)

Description: Plots open interest by exchange for a certain cryptocurrency

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Crypto symbol to search open interest (e.g., BTC) | None | False |
| interval | int | Frequency (possible values are: 0 for ALL, 2 for 1H, 1 for 4H, 4 for 12H), by default 0 | 0 | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>