---
title: losers
description: Shows Largest Losers - coins which lost the most in given period of time. [Source: CoinGecko]
---
# losers

## crypto_disc_pycoingecko_view.display_losers

```python
def losers(interval: str, limit: int, export: str, sortby: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/pycoingecko_view.py#L145)

Description: Shows Largest Losers - coins which lost the most in given period of time. [Source: CoinGecko]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| interval | str | Time period by which data is displayed. One from [1h, 24h, 7d, 14d, 30d, 60d, 1y] | None | False |
| limit | int | Number of records to display | None | False |
| sortby | str | Key to sort data. The table can be sorted by every of its columns. Refer to
API documentation (see /coins/markets in https://www.coingecko.com/en/api/documentation) | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

