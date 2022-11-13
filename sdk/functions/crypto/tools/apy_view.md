---
title: apy
description: Displays APY value converted from APR
---
# apy

## crypto_tools_view.display_apy

```python
def apy(apr: float, compounding_times: int, narrative: bool, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/tools/tools_view.py#L15)

Description: Displays APY value converted from APR

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| apr | float | value in percentage | None | False |
| compounding_times | int | number of compounded periods in a year | None | False |
| narrative | str | display narrative version instead of dataframe | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

