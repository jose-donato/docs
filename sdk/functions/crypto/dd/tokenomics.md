---
title: tokenomics
description: Get tokenomics for given coin. [Source: CoinGecko]
---
# tokenomics

## crypto_dd_pycoingecko_model.get_coin_tokenomics

```python
def tokenomics(symbol: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/pycoingecko_model.py#L252)

Description: Get tokenomics for given coin. [Source: CoinGecko]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | coin symbol to check tokenomics | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pandas.DataFrame | Metric, Value with tokenomics |

## Examples

