---
title: unu
description: OpenBB SDK Function
---
# unu

## stocks_options_fdscanner_model.unusual_options

```python
def unu(limit: int) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/fdscanner_model.py#L17)

Description: Get unusual option activity from fdscanner.com

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number to show | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe containing options information |

## Examples




# VIEW

# unu

## stocks_options_fdscanner_view.display_options

```python
def unu(limit: int, sortby: str, ascend: bool, calls_only: bool, puts_only: bool, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/fdscanner_view.py#L14)

Description: Displays the unusual options table

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of rows to show | None | False |
| sortby | str | Data column to sort on | None | False |
| ascend | bool | Whether to sort in ascend order | None | False |
| calls_only | bool | Flag to only show calls | None | False |
| puts_only | bool | Flag to show puts only | None | False |
| export | str | File type to export | None | False |

## Returns

None

## Examples

