---
title: cgderivatives
description: OpenBB SDK Function
---
# cgderivatives

## crypto_ov_pycoingecko_model.get_derivatives

```python
def cgderivatives(sortby: str, ascend: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_model.py#L340)

Description: Get list of crypto derivatives from CoinGecko API [Source: CoinGecko]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data descending | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pandas.DataFrame | Rank, Market, Symbol, Price, Pct_Change_24h, Contract_Type, Basis, Spread,
Funding_Rate, Volume_24h, |

## Examples




# VIEW

# cgderivatives

## crypto_ov_pycoingecko_view.display_derivatives

```python
def cgderivatives(sortby: str, ascend: bool, limit: int, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_view.py#L673)

Description: Shows  list of crypto derivatives. [Source: CoinGecko]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data descending | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

