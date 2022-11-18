---
title: closed
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# closed

<Tabs>
<TabItem value="model" label="Model" default>

Get closed exchanges.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/tradinghours/bursa_model.py#L76)]

```python
def get_closed() -> pd.DataFrame
```
## Parameters

This function does not take any parameters.

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Currently closed exchanges |



</TabItem>
<TabItem value="view" label="View">

Display closed exchanges.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/tradinghours/bursa_view.py#L64)]

```python
def display_closed() -> None
```
## Parameters

This function does not take any parameters.

## Returns

This function does not return anything



</TabItem>
</Tabs>