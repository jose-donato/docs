---
title: sratio
description: Get terra blockchain staking ratio history [Source: https://fcd.terra.dev/swagger]
---
# sratio

## crypto_defi_terramoney_fcd_model.get_staking_ratio_history

```python
def sratio(limit: int) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/terramoney_fcd_model.py#L284)

Description: Get terra blockchain staking ratio history [Source: https://fcd.terra.dev/swagger]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | The number of ratios to show | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | historical staking ratio |

## Examples

