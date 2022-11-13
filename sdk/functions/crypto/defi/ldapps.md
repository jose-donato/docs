---
title: ldapps
description: Returns information about listed DeFi protocols, their current TVL and changes to it in the last hour/day/week.
---
# ldapps

## crypto_defi_llama_model.get_defi_protocols

```python
def ldapps(limit: int, sortby: str, ascend: bool, description: bool, drop_chain: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/llama_model.py#L34)

Description: Returns information about listed DeFi protocols, their current TVL and changes to it in the last hour/day/week.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | The number of dApps to display | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data descending | None | False |
| description | bool | Flag to display description of protocol | None | False |
| drop_chain | bool | Whether to drop the chain column | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Information about DeFi protocols |

## Examples

