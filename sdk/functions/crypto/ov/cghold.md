---
title: cghold
description: Returns public companies that holds ethereum or bitcoin [Source: CoinGecko]
---
# cghold

## crypto_ov_pycoingecko_model.get_holdings_overview

```python
def cghold(endpoint: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_model.py#L101)

Description: Returns public companies that holds ethereum or bitcoin [Source: CoinGecko]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| endpoint | str | "bitcoin" or "ethereum" | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
|  | - str:              Overall statistics
- pandas.DataFrame: Companies holding crypto |

## Examples

