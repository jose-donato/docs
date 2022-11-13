---
title: ld
description: Display a selection of ETFs based on description filtered by total assets.
---
# ld

## etf_financedatabase_view.display_etf_by_description

```python
def ld(description: str, limit: int, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/financedatabase_view.py#L55)

Description: Display a selection of ETFs based on description filtered by total assets.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| description | str | Search by description to find ETFs matching the criteria. | None | False |
| limit | int | Limit of ETFs to display | None | False |
| export | str | Type of format to export data | None | False |

## Returns

None

## Examples

