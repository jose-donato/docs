# search

## mutual_funds_investpy_model.search_funds

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/mutual_funds/investpy_model.py#L19)

Description: Search investpy for matching funds

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| by | str | Field to match on.  Can be name, issuer, isin or symbol | None | False |
| value | str | String that will be searched for | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe containing matches |

## Examples

