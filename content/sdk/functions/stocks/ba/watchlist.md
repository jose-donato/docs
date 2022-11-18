---
title: watchlist
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# watchlist

<Tabs>
<TabItem value="model" label="Model" default>

Get reddit users watchlists [Source: reddit].

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/reddit_model.py#L40)]

```python
def get_watchlists(limit: int = 5) -> Tuple[List[praw.models.reddit.submission.Submission], dict, int]
```
---
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of posts to look through | 5 | True |

---
## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[List[praw.models.reddit.submission.Submission], dict, int] | List of reddit submissions,<br/>Dictionary of tickers and their count,<br/>Count of how many posts were analyzed. |

---


</TabItem>
<TabItem value="view" label="View">

Prints other users watchlist. [Source: Reddit].

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/reddit_view.py#L138)]

```python
def display_watchlist(limit: int = 5) -> None
```
---
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Maximum number of submissions to look at | 5 | True |

---
## Returns

This function does not return anything

---


</TabItem>
</Tabs>