---
title: rise
description: OpenBB SDK Function
---
# rise

## stocks_ba_google_model.get_rise

```python
def rise(symbol: str, limit: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/google_model.py#L105)

Description: Get top rising related queries with this stock's query [Source: google]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| limit | int | Number of queries to show | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe containing rising related queries |

## Examples




# VIEW

# rise

## stocks_ba_google_view.display_rise

```python
def rise(symbol: str, limit: int, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/google_view.py#L242)

Description: Print top rising related queries with this stock's query. [Source: Google]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol | None | False |
| limit | int | Number of queries to show | None | False |
| export | str | Format to export data | None | False |

## Returns

None

## Examples

