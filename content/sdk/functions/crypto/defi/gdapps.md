---
title: gdapps
description: OpenBB SDK Function
---
# gdapps

## crypto_defi_llama_model.get_grouped_defi_protocols

```python
def gdapps(limit: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/llama_model.py#L143)

Description: Display top dApps (in terms of TVL) grouped by chain.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of top dApps to display | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Information about DeFi protocols grouped by chain |

## Examples




# VIEW

# gdapps

## crypto_defi_llama_view.display_grouped_defi_protocols

```python
def gdapps(limit: int, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/llama_view.py#L27)

Description: Display top dApps (in terms of TVL) grouped by chain.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| num | int | Number of top dApps to display | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

