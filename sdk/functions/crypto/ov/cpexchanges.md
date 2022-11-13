---
title: cpexchanges
description: List exchanges from CoinPaprika API [Source: CoinPaprika]
---
# cpexchanges

## crypto_ov_coinpaprika_model.get_list_of_exchanges

```python
def cpexchanges(symbols: str, sortby: str, ascend: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/coinpaprika_model.py#L282)

Description: List exchanges from CoinPaprika API [Source: CoinPaprika]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbols | str | Comma separated quotes to return e.g quotes=USD,BTC | None | False |
| sortby | str | Key by which to sort data | None | False |
| ascend | bool | Flag to sort data ascend | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pandas.DataFrame | rank, name, currencies, markets, fiats, confidence_score, reported_volume_24h,
reported_volume_7d ,reported_volume_30d, sessions_per_month, |

## Examples

