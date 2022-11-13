---
title: history
description: OpenBB SDK Function
---
# history

## alt_oss_github_model.get_stars_history

```python
def history(repo: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/alternative/oss/github_model.py#L83)

Description: Get repository star history

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| repo | str | Repo to search for Format: org/repo, e.g., openbb-finance/openbbterminal | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Date, Stars | None |

## Examples




# VIEW

# history

## alt_oss_github_view.display_star_history

```python
def history(repo: str, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/alternative/oss/github_view.py#L27)

Description: Display repo summary [Source: https://api.github.com]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| repo | str | Repository to display star history. Format: org/repo, e.g., openbb-finance/openbbterminal | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples
