---
title: cgh
description: Shows cryptocurrencies heatmap [Source: CoinGecko]
---
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

