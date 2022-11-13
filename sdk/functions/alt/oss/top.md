# top

## alt_oss_github_model.get_top_repos

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/alternative/oss/github_model.py#L129)

Description: Get repos sorted by stars or forks. Can be filtered by categories

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sortby | str | Sort repos by {stars, forks} | None | False |
| categories | str | Check for repo categories. If more than one separate with a comma: e.g., finance,investment. Default: None | None | False |
| limit | int | Number of repos to search for | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame with list of repos | None |

## Examples

