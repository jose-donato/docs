# mover

## etf_disc_wsj_model.etf_movers

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/discovery/wsj_model.py#L14)

Description: Scrape data for top etf movers.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sort_type | str | Data to get. Can be "gainers", "decliners" or "active" | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Datafame containing the name, price, change and the volume of the etf |

## Examples

