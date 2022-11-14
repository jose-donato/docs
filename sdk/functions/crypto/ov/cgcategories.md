---
title: cgcategories
description: OpenBB SDK Function
---
# cgcategories

## crypto_ov_pycoingecko_model.get_top_crypto_categories

```python
def cgcategories(sort_filter: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_model.py#L156)

Description: Returns top crypto categories [Source: CoinGecko]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |

## Returns

| Type | Description |
| ---- | ----------- |
| pandas.DataFrame | Rank, Name, Change_1h, Change_7d, Market_Cap, Volume_24h,Coins, Url |

## Examples




# VIEW

# cgcategories

## crypto_ov_pycoingecko_view.display_categories

```python
def cgcategories(sortby: str, limit: int, export: str, pie: bool) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_view.py#L438)

Description: Shows top cryptocurrency categories by market capitalization

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sortby | str | Key by which to sort data | None | False |
| limit | int | Number of records to display | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| pie | bool | Whether to show the pie chart | None | False |

## Returns

None

## Examples

