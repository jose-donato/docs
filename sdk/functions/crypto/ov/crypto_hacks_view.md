---
title: crypto_hacks
description: Display list of major crypto-related hacks. If slug is passed
---
# crypto_hacks

## crypto_ov_rekt_view.display_crypto_hacks

```python
def crypto_hacks(limit: int, sortby: str, ascend: bool, slug: str, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/rekt_view.py#L17)

Description: Display list of major crypto-related hacks. If slug is passed

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| slug | str | Crypto hack slug to check (e.g., polynetwork-rekt) | None | False |
| limit | int | Number of hacks to search | None | False |
| sortby | str | Key by which to sort data {Platform,Date,Amount [$],Audit,Slug,URL} | None | False |
| ascend | bool | Flag to sort data ascending | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

