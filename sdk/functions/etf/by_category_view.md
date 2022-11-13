---
title: by_category
description: Display a selection of ETFs based on a category filtered by total assets.
---
# by_category

## etf_financedatabase_view.display_etf_by_category

```python
def by_category(category: str, limit: int, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/financedatabase_view.py#L94)

Description: Display a selection of ETFs based on a category filtered by total assets.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| description | str | Search by description to find ETFs matching the criteria. | None | False |
| limit | int | Limit of ETFs to display | None | False |
| export | str | Type of format to export data | None | False |

## Returns

None

## Examples

