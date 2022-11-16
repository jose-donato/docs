---
title: validators
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# validators

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.cryptocurrency.defi.terramoney_fcd_model.get_validators

```python title='openbb_terminal/cryptocurrency/defi/terramoney_fcd_model.py'
def get_validators(sortby: str, ascend: bool) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/terramoney_fcd_model.py#L155)

Description: Get information about terra validators [Source: https://fcd.terra.dev/swagger]

## Parameters

This function does not take any parameters.

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | terra validators details |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.cryptocurrency.defi.terramoney_fcd_view.display_validators

```python title='openbb_terminal/cryptocurrency/defi/terramoney_fcd_view.py'
def display_validators(limit: int, sortby: str, ascend: bool, export: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/terramoney_fcd_view.py#L64)

Description: Prints table showing information about terra validators [Source: https://fcd.terra.dev/swagger]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | None | False |
| sortby | str | Key by which to sort data. Choose from:<br/>validatorName, tokensAmount, votingPower, commissionRate, status, uptime | None | False |
| ascend | bool | Flag to sort data descending | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>