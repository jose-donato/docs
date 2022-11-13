# gh

## crypto_dd_santiment_model.get_github_activity

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L27)

Description: Returns  a list of developer activity for a given coin and time interval.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Crypto symbol to check github activity | None | False |
| dev_activity | bool | Whether to filter only for development activity | None | False |
| start_date | int | Initial date like string (e.g., 2021-10-01) | None | False |
| end_date | int | End date like string (e.g., 2021-10-01) | None | False |
| interval | str | Interval frequency (e.g., 1d) | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | developer activity over time |

## Examples

