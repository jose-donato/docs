---
title: all
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# all

<Tabs>
<TabItem value="model" label="Model" default>

Get all exchanges.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/tradinghours/bursa_model.py#L98)]

```python
def get_all() -> pd.DataFrame
```
## Parameters

This function does not take any parameters.

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | All available exchanges |



</TabItem>
<TabItem value="view" label="View">

Display all exchanges.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/tradinghours/bursa_view.py#L84)]

```python
def display_all() -> None
```
## Parameters

This function does not take any parameters.

## Returns

This function does not return anything



</TabItem>
</Tabs>