---
title: summary
description: OpenBB SDK Function
---
# summary

## alt_oss_github_model.get_repo_summary

```python
def summary(repo: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/alternative/oss/github_model.py#L171)

Description: Get repository summary

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| repo | str | Repo to search for Format: org/repo, e.g., openbb-finance/openbbterminal | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Metric, Value | None |

## Examples




# VIEW

# summary

## alt_oss_github_view.display_repo_summary

```python
def summary(repo: str, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/alternative/oss/github_view.py#L122)

Description: Display repo summary [Source: https://api.github.com]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| repo | str | Repository to display summary. Format: org/repo, e.g., openbb-finance/openbbterminal | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

None

## Examples

