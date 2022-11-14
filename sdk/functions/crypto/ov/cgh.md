---
title: cgh
description: OpenBB SDK Function
---
# cgh

## crypto_ov_pycoingecko_model.get_coins

```python
def cgh(limit: int, category: str, sortby: str, ascend: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/pycoingecko_model.py#L120)

Description: Get N coins from CoinGecko [Source: CoinGecko]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of top coins to grab from CoinGecko | None | False |
| category | str | Category of the coins we want to retrieve | None | False |
| sortby | str | Key to sort data | None | False |
| ascend | bool | Sort data in ascending order | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pandas.DataFrame | N coins |

## Examples




# VIEW

# cgh

## crypto_ov_pycoingecko_view.display_crypto_heatmap

```python
def cgh(category: str, limit: int, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_view.py#L35)

Description: Shows cryptocurrencies heatmap [Source: CoinGecko]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| caterogy | str | Category (e.g., stablecoins). Empty for no category (default: ) | None | False |
| limit | int | Number of top cryptocurrencies to display | None | False |
| export | str | Export dataframe data to csv,json,xlsx | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

