# active

## crypto_dd_glassnode_model.get_active_addresses

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L307)

Description: Returns active addresses of a certain symbol

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Asset to search active addresses (e.g., BTC) | None | False |
| start_date | int | Initial date timestamp (e.g., 1_614_556_800) | None | False |
| end_date | int | End date timestamp (e.g., 1_614_556_800) | None | False |
| interval | str | Interval frequency (e.g., 24h) | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | active addresses over time |

## Examples

