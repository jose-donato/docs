---
title: sratio
description: OpenBB SDK Function
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




# VIEW

# sratio

## crypto_defi_terramoney_fcd_view.display_staking_ratio_history

```python
def sratio(limit: int, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/terramoney_fcd_view.py#L206)

Description: Display terra blockchain staking ratio history [Source: https://fcd.terra.dev/v1]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples
