---
title: ldapps
description: Display information about listed DeFi protocols, their current TVL and changes to it in
---
# ldapps

## crypto_defi_llama_view.display_defi_protocols

```python
def ldapps(sortby: str, limit: int, ascend: bool, description: bool, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/llama_view.py#L93)

Description: Display information about listed DeFi protocols, their current TVL and changes to it in

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data descending | None | False |
| description | bool | Flag to display description of protocol | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

