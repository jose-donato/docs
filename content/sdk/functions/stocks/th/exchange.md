---
title: exchange
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# exchange

<Tabs>
<TabItem value="model" label="Model" default>

Get current exchange open hours.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/tradinghours/bursa_model.py#L20)]

```python
def get_bursa(symbol: str) -> DataFrame
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Exchange symbol | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Exchange info |



</TabItem>
<TabItem value="view" label="View">

Display current exchange trading hours.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/tradinghours/bursa_view.py#L15)]

```python
def display_exchange(symbol: str) -> None
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Exchange symbol | None | False |

## Returns

This function does not return anything



</TabItem>
</Tabs>