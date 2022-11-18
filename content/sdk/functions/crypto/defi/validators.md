---
title: validators
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# validators

<Tabs>
<TabItem value="model" label="Model" default>

Get information about terra validators [Source: https://fcd.terra.dev/swagger]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/terramoney_fcd_model.py#L155)

```python
def get_validators(sortby: str, ascend: bool) -> DataFrame
```
---

## Parameters

This function does not take any parameters.

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | terra validators details |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Prints table showing information about terra validators [Source: https://fcd.terra.dev/swagger]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/terramoney_fcd_view.py#L64)

```python
def display_validators(limit: int, sortby: str, ascend: bool, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | None | False |
| sortby | str | Key by which to sort data. Choose from:<br/>validatorName, tokensAmount, votingPower, commissionRate, status, uptime | None | False |
| ascend | bool | Flag to sort data descending | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>