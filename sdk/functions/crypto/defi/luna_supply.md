---
title: luna_supply
description: Get supply history of the Terra ecosystem
---
# luna_supply

## crypto_defi_smartstake_model.get_luna_supply_stats

```python
def luna_supply(supply_type: str, days: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/smartstake_model.py#L13)

Description: Get supply history of the Terra ecosystem

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| supply_type | str | Supply type to unpack json | None | False |
| days | int | Day count to fetch data | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of supply history data |

## Examples

