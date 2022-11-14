---
title: ld
description: OpenBB SDK Function
---
# ld

## etf_financedatabase_model.get_etfs_by_description

```python
def ld(description: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/financedatabase_model.py#L34)

Description: Return a selection of ETFs based on description filtered by total assets.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| description | str | Search by description to find ETFs matching the criteria. | None | False |
| Returns | None | None | None | None |
| ---------- | None | None | None | None |
| data | Dict | Dictionary with ETFs that match a certain description | None | False |

## Returns

None

## Examples




# VIEW

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

