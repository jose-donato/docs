---
title: ln
description: Display a selection of ETFs based on name filtered by total assets. [Source: Finance Database]
---
# ln

## etf_financedatabase_view.display_etf_by_name

```python
def ln(name: str, limit: int, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/financedatabase_view.py#L17)

Description: Display a selection of ETFs based on name filtered by total assets. [Source: Finance Database]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| name | str | Search by name to find ETFs matching the criteria. | None | False |
| limit | int | Limit of ETFs to display | None | False |
| export | str | Type of format to export data | None | False |

## Returns

None

## Examples

