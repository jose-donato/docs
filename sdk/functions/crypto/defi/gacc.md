---
title: gacc
description: Get terra blockchain account growth history [Source: https://fcd.terra.dev/swagger]
---
# gacc

## crypto_defi_terramoney_fcd_model.get_account_growth

```python
def gacc(cumulative: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/terramoney_fcd_model.py#L261)

Description: Get terra blockchain account growth history [Source: https://fcd.terra.dev/swagger]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| cumulative | bool | distinguish between periodical and cumulative account growth data | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | historical data of accounts growth |

## Examples

