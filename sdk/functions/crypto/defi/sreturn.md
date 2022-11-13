---
title: sreturn
description: Get terra blockchain staking returns history [Source: https://fcd.terra.dev/v1]
---
# sreturn

## crypto_defi_terramoney_fcd_model.get_staking_returns_history

```python
def sreturn(limit: int) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/terramoney_fcd_model.py#L309)

Description: Get terra blockchain staking returns history [Source: https://fcd.terra.dev/v1]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | The number of returns to show | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | historical staking returns |

## Examples

