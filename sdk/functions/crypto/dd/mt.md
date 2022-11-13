---
title: mt
description: Returns messari timeseries
---
# mt

## crypto_dd_messari_model.get_messari_timeseries

```python
def m) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L117)

Description: Returns messari timeseries

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Crypto symbol to check messari timeseries | None | False |
| timeseries_id | str | Messari timeserie id | None | False |
| interval | str | Interval frequency (possible values are: 5m, 15m, 30m, 1h, 1d, 1w) | None | False |
| start | int | Initial date like string (e.g., 2021-10-01) | None | False |
| end | int | End date like string (e.g., 2021-10-01) | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | messari timeserie over time |

## Examples

