---
title: watchlist
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# watchlist

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.common.behavioural_analysis.reddit_model.get_watchlists

```python title='openbb_terminal/common/behavioural_analysis/reddit_model.py'
def get_watchlists(limit: int) -> Tuple
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/reddit_model.py#L40)

Description: Get reddit users watchlists [Source: reddit].

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of posts to look through | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[List[praw.models.reddit.submission.Submission], dict, int] | List of reddit submissions,<br/>Dictionary of tickers and their count,<br/>Count of how many posts were analyzed. |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.common.behavioural_analysis.reddit_view.display_watchlist

```python title='openbb_terminal/common/behavioural_analysis/reddit_view.py'
def display_watchlist(limit: int) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/reddit_view.py#L138)

Description: Prints other users watchlist. [Source: Reddit].

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Maximum number of submissions to look at | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>