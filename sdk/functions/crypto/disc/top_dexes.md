# top_dexes

## crypto_disc_dappradar_model.get_top_dexes

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/discovery/dappradar_model.py#L122)

Description: Get top dexes by daily volume and users [Source: https://dappradar.com/]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sortby | str | Key by which to sort data | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Top decentralized exchanges. Columns: Name, Daily Users, Daily Volume [$] |

## Examples

