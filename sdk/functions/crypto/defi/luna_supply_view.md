---
title: luna_supply
description: Display Luna circulating supply stats
---
# luna_supply

## crypto_defi_smartstake_view.display_luna_circ_supply_change

```python
def luna_suppl) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L28)

Description: Display Luna circulating supply stats

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| days | int | Number of days | None | False |
| supply_type | str | Supply type to unpack json | None | False |
| export | str | Export type | None | False |
| limit | int | Number of results display on the terminal
Default: 5 | 5 | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

