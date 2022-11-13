---
title: cgexrates
description: Get list of crypto, fiats, commodity exchange rates from CoinGecko API [Source: CoinGecko]
---
# cgexrates

## crypto_ov_pycoingecko_model.get_exchange_rates

```python
def cgexrates(sortby: str, ascend: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_model.py#L388)

Description: Get list of crypto, fiats, commodity exchange rates from CoinGecko API [Source: CoinGecko]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascending | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pandas.DataFrame | Index, Name, Unit, Value, Type |

## Examples

