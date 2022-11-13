---
title: cghold
description: Shows overview of public companies that holds ethereum or bitcoin. [Source: CoinGecko]
---
# cghold

## crypto_ov_pycoingecko_view.display_holdings_overview

```python
def cghold(symbol: str, show_bar: bool, export: str, limit: int) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_view.py#L134)

Description: Shows overview of public companies that holds ethereum or bitcoin. [Source: CoinGecko]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Cryptocurrency: ethereum or bitcoin | None | False |
| show_bar | bool | Whether to show a bar graph for the data | None | False |
| export | str | Export dataframe data to csv,json,xlsx | None | False |
| limit | int | The number of rows to show | None | False |

## Returns

None

## Examples

