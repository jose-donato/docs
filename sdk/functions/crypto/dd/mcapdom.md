# mcapdom

## crypto_dd_messari_model.get_marketcap_dominance

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/messari_model.py#L80)

Description: Returns market dominance of a coin over time

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Crypto symbol to check market cap dominance | None | False |
| interval | str | Interval frequency (possible values are: 5m, 15m, 30m, 1h, 1d, 1w) | None | False |
| start_date | int | Initial date like string (e.g., 2021-10-01) | None | False |
| end_date | int | End date like string (e.g., 2021-10-01) | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | market dominance percentage over time |

## Examples

