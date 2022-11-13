---
title: cgglobal
description: OpenBB SDK Function
---
# cgglobal

## crypto_ov_pycoingecko_model.get_global_markets_info

```python
def cggloba) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_model.py#L450)

Description: Get global statistics about crypto markets from CoinGecko API like:

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |

## Returns

| Type | Description |
| ---- | ----------- |
| pandas.DataFrame | Market_Cap, Volume, Market_Cap_Percentage |

## Examples




# VIEW

# cgglobal

## crypto_ov_pycoingecko_view.display_global_market_info

```python
def cgglobal(pie: bool, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_view.py#L239)

Description: Shows global statistics about crypto. [Source: CoinGecko]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| pie | bool | Whether to show a pie chart | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

