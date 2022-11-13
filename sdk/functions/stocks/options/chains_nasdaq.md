---
title: chains_nasdaq
description: Get option chain for symbol at a given expiration
---
# chains_nasdaq

## stocks_options_nasdaq_model.get_chain_given_expiration

```python
def chains_nasdaq(symbol: str, expiration: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/nasdaq_model.py#L112)

Description: Get option chain for symbol at a given expiration

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Symbol to get chain for | None | False |
| expiration | None | Expiration to get chain for | None | None |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of option chain |

## Examples

