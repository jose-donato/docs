---
title: open
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# open

<Tabs>
<TabItem value="model" label="Model" default>

Get open exchanges.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/tradinghours/bursa_model.py#L54)]
```python
def get_open() -> pd.DataFrame
```
---
## Parameters
This function does not take any parameters.
---
## Returns
| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Currently open exchanges |
---


</TabItem>
<TabItem value="view" label="View">

Display open exchanges.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/tradinghours/bursa_view.py#L44)]
```python
def display_open() -> None
```
---
## Parameters
This function does not take any parameters.
---
## Returns
This function does not return anything
---


</TabItem>
</Tabs>