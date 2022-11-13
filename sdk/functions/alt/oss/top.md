---
title: top
description: OpenBB SDK Function
---
# top

## alt_oss_github_model.get_top_repos

```python
def top(sortby: str, limit: int, categories: str) -> DataFrame:
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




# VIEW

# top

## alt_oss_github_view.display_top_repos

```python
def top(sortby: str, categories: str, limit: int, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/alternative/oss/github_view.py#L64)

Description: Display repo summary [Source: https://api.github.com]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sortby | str | Sort repos by {stars, forks} | None | False |
| categories | str | Check for repo categories. If more than one separate with a comma: e.g., finance,investment. Default: None | None | False |
| limit | int | Number of repos to look at | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples
