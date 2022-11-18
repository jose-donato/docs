---
title: redditsent
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# redditsent

<Tabs>
<TabItem value="model" label="Model" default>

Finds posts related to a specific search term in Reddit.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/reddit_model.py#L864)]

```python
def get_posts_about(symbol: str, limit: int = 100, sortby: str = "relevance", time_frame: str = "week", full_search: bool = True, subreddits: str = "all") -> Tuple[pd.DataFrame, list, float]
```
---
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to search for | None | False |
| limit | int | Number of posts to get per subreddit | 100 | True |
| sortby | str | Search type (Possibilities: "relevance", "hot", "top", "new", or "comments") | relevance | True |
| time_frame | str | Relative time of post (Possibilities: "hour", "day", "week", "month", "year", "all") | week | True |
| full_search | bool | Enable comprehensive search for ticker | True | True |
| subreddits | str | Comma-separated list of subreddits | all | True |

---
## Returns

| Type | Description |
| ---- | ----------- |
|  | Dataframe of submissions related to the search term,<br/>List of polarity scores,<br/>Average polarity score. |

---


</TabItem>
<TabItem value="view" label="View">

Plots Reddit sentiment about a search term. Prints table showing if display is True.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/reddit_view.py#L392)]

```python
def display_redditsent(symbol: str, sortby: str = "relevance", limit: int = 100, graphic: bool = False, time_frame: str = "week", full_search: bool = True, subreddits: str = "all", display: bool = False, export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None) -> None
```
---
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | The ticker symbol being search for in Reddit | None | False |
| sortby | str | Type of search | relevance | True |
| limit | str | Number of posts to get at most | 100 | True |
| graphic | bool | Displays box and whisker plot | False | True |
| time_frame | str | Time frame for search | week | True |
| full_search | bool | Enable comprehensive search for ticker | True | True |
| subreddits | str | Comma-separated list of subreddits | all | True |
| display | bool | Enable printing of raw sentiment values for each post | False | True |
| export | str | Format to export data |  | True |
| external_axes | Optional[List[plt.Axes]] | If supplied, expect 1 external axis | None | True |

---
## Returns

This function does not return anything

---


</TabItem>
</Tabs>