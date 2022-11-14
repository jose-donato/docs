---
title: get_mt
description: OpenBB SDK Function
---
# get_mt

## crypto_dd_messari_model.get_available_timeseries

```python
def get_mt(only_free: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/messari_model.py#L33)

Description: Returns available messari timeseries

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| only_free | bool | Display only timeseries available for free | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | available timeseries |

## Examples




# VIEW

# get_mt

## crypto_dd_messari_view.display_messari_timeseries_list

```python
def get_m) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L48)

Description: Display messari timeseries list

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | number to show | None | False |
| query | str | Query to search across all messari timeseries | None | False |
| only_free | bool | Display only timeseries available for free | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

