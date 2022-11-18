---
title: gov_proposals
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# gov_proposals

<Tabs>
<TabItem value="model" label="Model" default>

Get terra blockchain governance proposals list [Source: https://fcd.terra.dev/swagger]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/terramoney_fcd_model.py#L197)

```python
def get_proposals(status: str, sortby: str, ascend: bool, limit: int) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| status | str | status of proposal, one from list: ['Voting','Deposit','Passed','Rejected'] | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |
| limit | int | Number of records to display | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Terra blockchain governance proposals list |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Prints table showing terra blockchain governance proposals list [Source: https://fcd.terra.dev/swagger]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/terramoney_fcd_view.py#L108)

```python
def display_gov_proposals(limit: int, status: str, sortby: str, ascend: bool, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | None | False |
| status | str | status of proposal, one from list: ['Voting','Deposit','Passed','Rejected'] | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascend | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>