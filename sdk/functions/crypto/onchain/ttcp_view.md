---
title: ttcp
description: Display most traded crypto pairs on given decentralized exchange in chosen time period.
---
# ttcp

## crypto_onchain_bitquery_view.display_most_traded_pairs

```python
def ttc) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L283)

Description: Display most traded crypto pairs on given decentralized exchange in chosen time period.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| exchange |  | Decentralized exchange name | None | False |
| days |  | Number of days taken into calculation account. | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Most traded crypto pairs on given decentralized exchange in chosen time period. |

## Examples

