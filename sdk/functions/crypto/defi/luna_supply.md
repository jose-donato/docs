---
title: luna_supply
description: OpenBB SDK Function
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




# VIEW

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

