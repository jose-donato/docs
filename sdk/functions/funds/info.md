---
title: info
description: OpenBB SDK Function
---
# info

## mutual_funds_investpy_model.get_fund_info

```python
def info(name: str, country: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/mutual_funds/investpy_model.py#L144)

Description: None

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| name | str | Name of fund (not symbol) to get information | None | False |
| country | str | Country of fund | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of fund information |

## Examples




# VIEW

# info

## mutual_funds_investpy_view.display_fund_info

```python
def info(name: str, country: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/mutual_funds/investpy_view.py#L103)

Description: Display fund information.  Finds name from symbol first if name is false

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| name | str | Fund name to get info for | None | False |
| country | str | Country of fund | None | False |

## Returns

None

## Examples
