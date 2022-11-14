---
title: exchanges
description: OpenBB SDK Function
---
# exchanges

## crypto_ov_pycoingecko_model.get_exchanges

```python
def exchanges(sortby: str, ascend: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_model.py#L211)

Description: Get list of top exchanges from CoinGecko API [Source: CoinGecko]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data descending | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pandas.DataFrame | Trust_Score, Id, Name, Country, Year_Established, Trade_Volume_24h_BTC, Url |

## Examples




# VIEW

# exchanges

## crypto_ov_pycoingecko_view.display_exchanges

```python
def exchanges(sortby: str, ascend: bool, limit: int, links: bool, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_view.py#L504)

Description: Shows list of top exchanges from CoinGecko. [Source: CoinGecko]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data descending | None | False |
| links | bool | Flag to display urls | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

