---
title: summary
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# summary

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.alternative.oss.github_model.get_repo_summary

```python title='openbb_terminal/alternative/oss/github_model.py'
def get_repo_summary(repo: str) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/alternative/oss/github_model.py#L179)

Description: Get repository summary.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| repo | str | Repo to search for Format: org/repo, e.g., openbb-finance/openbbterminal | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe with repo summary - Columns: Metric, Value |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.alternative.oss.github_view.display_repo_summary

```python title='openbb_terminal/alternative/oss/github_view.py'
def display_repo_summary(repo: str, export: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/alternative/oss/github_view.py#L123)

Description: Prints table showing repo summary [Source: https://api.github.com].

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| repo | str | Repository to display summary. Format: org/repo, e.g., openbb-finance/openbbterminal | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>