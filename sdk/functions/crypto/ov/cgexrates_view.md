---
title: cgexrates
description: Shows  list of crypto, fiats, commodity exchange rates. [Source: CoinGecko]
---
# cgexrates

## crypto_ov_pycoingecko_view.display_exchange_rates

```python
def cgexrates(sortby: str, ascend: bool, limit: int, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_view.py#L199)

Description: Shows  list of crypto, fiats, commodity exchange rates. [Source: CoinGecko]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of records to display | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

