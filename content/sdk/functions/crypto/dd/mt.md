---
title: mt
description: OpenBB SDK Function
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




# VIEW

# mt

## crypto_dd_messari_view.display_messari_timeseries

```python
def m) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L102)

Description: Display messari timeseries

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Crypto symbol to check market cap dominance | None | False |
| timeseries_id | str | Obtained by api.crypto.dd.get_mt command | None | False |
| start_date | int | Initial date like string (e.g., 2021-10-01) | None | False |
| end_date | int | End date like string (e.g., 2021-10-01) | None | False |
| interval | str | Interval frequency (possible values are: 5m, 15m, 30m, 1h, 1d, 1w) | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

