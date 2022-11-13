---
title: overview
description: OpenBB SDK Function
---
# overview

## mutual_funds_investpy_model.get_overview

```python
def overview(country: str, limit: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/mutual_funds/investpy_model.py#L48)

Description: None

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| country | str | Country to get overview for | None | False |
| limit | int | Number of results to get | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe containing overview |

## Examples




# VIEW

# overview

## mutual_funds_investpy_view.display_overview

```python
def overview(country: str, limit: int, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/mutual_funds/investpy_view.py#L73)

Description: Displays an overview of the main funds from a country.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| country | str | Country to get overview for | None | False |
| limit | int | Number to show | None | False |
| export | str | Format to export data | None | False |

## Returns

None

## Examples

