---
title: ln
description: OpenBB SDK Function
---
# ln

## etf_financedatabase_model.get_etfs_by_name

```python
def ln(name: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/financedatabase_model.py#L14)

Description: Return a selection of ETFs based on name filtered by total assets. [Source: Finance Database]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| name | str | Search by name to find ETFs matching the criteria. | None | False |
| Returns | None | None | None | None |
| ---------- | None | None | None | None |
| data | Dict | Dictionary with ETFs that match a certain name | None | False |

## Returns

None

## Examples




# VIEW

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

