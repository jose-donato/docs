---
title: stvl
description: OpenBB SDK Function
---
# stvl

## crypto_defi_llama_model.get_defi_tvl

```python
def stv) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/llama_model.py#L164)

Description: Returns historical values of the total sum of TVLs from all listed protocols.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Historical values of total sum of Total Value Locked from all listed protocols. |

## Examples




# VIEW

# stvl

## crypto_defi_llama_view.display_defi_tvl

```python
def stvl(limit: int, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/llama_view.py#L187)

Description: Displays historical values of the total sum of TVLs from all listed protocols.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display, by default 5 | 5 | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

