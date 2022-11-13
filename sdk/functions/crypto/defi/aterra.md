---
title: aterra
description: Returns historical data of an asset in a certain terra address
---
# aterra

## crypto_defi_terraengineer_model.get_history_asset_from_terra_address

```python
def aterra(asset: str, address: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/terraengineer_model.py#L18)

Description: Returns historical data of an asset in a certain terra address

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| asset | str | Terra asset {ust,luna,sdt} | None | False |
| address | str | Terra address. Valid terra addresses start with 'terra' | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | historical data |

## Examples

