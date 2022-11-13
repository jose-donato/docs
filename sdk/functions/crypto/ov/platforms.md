---
title: platforms
description: Get list of financial platforms from CoinGecko API [Source: CoinGecko]
---
# platforms

## crypto_ov_pycoingecko_model.get_financial_platforms

```python
def platforms(sortby: str, ascend: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_model.py#L259)

Description: Get list of financial platforms from CoinGecko API [Source: CoinGecko]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pandas.DataFrame | Rank, Name, Category, Centralized, Url |

## Examples

