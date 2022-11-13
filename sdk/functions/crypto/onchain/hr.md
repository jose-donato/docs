---
title: hr
description: Returns dataframe with mean hashrate of btc or eth blockchain and symbol price
---
# hr

## crypto_dd_glassnode_model.get_hashrate

```python
def h) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L364)

Description: Returns dataframe with mean hashrate of btc or eth blockchain and symbol price

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Blockchain to check hashrate (BTC or ETH) | None | False |
| start_date | str | Initial date, format YYYY-MM-DD | None | False |
| end_date | str | Final date, format YYYY-MM-DD | None | False |
| interval | str | Interval frequency (e.g., 24h) | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | mean hashrate and symbol price over time |

## Examples

