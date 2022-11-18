---
title: cpglobal
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# cpglobal

<Tabs>
<TabItem value="model" label="Model" default>

Return data frame with most important global crypto statistics like:

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/coinpaprika_model.py#L72)]

```python
def get_global_market() -> pd.DataFrame
```
---
## Parameters

This function does not take any parameters.

---
## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Most important global crypto statistics<br/>Metric, Value |

---


</TabItem>
<TabItem value="view" label="View">

Return data frame with most important global crypto statistics like:

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/coinpaprika_view.py#L74)]

```python
def display_global_market(export: str = "") -> None
```
---
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| export | str | Export dataframe data to csv,json,xlsx file |  | True |

---
## Returns

This function does not return anything

---


</TabItem>
</Tabs>