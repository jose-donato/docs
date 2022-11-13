# hr

## crypto_dd_glassnode_model.get_hashrate

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L365)

Description: Returns dataframe with mean hashrate of btc or eth blockchain and symbol price

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Blockchain to check hashrate (BTC or ETH) | None | False |
| start_date | int | Initial date timestamp (e.g., 1_614_556_800) | None | False |
| end_date | int | End date timestamp (e.g., 1_614_556_800) | None | False |
| interval | str | Interval frequency (e.g., 24h) | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | mean hashrate and symbol price over time |

## Examples

