---
title: redditsent
description: OpenBB SDK Function
---
# redditsent

## stocks_ba_reddit_model.get_posts_about

```python
def redditsen) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L868)

Description: Finds posts related to a specific search term in Reddit

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to search for | None | False |
| limit | int | Number of posts to get per subreddit | None | False |
| sortby | str | Search type
Possibilities: "relevance", "hot", "top", "new", or "comments" | None | False |
| time_frame | str | Relative time of post
Possibilities: "hour", "day", "week", "month", "year", "all" | None | False |
| full_search | bool | Enable comprehensive search for ticker | None | False |
| subreddits | str | Comma-separated list of subreddits | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
|  | Dataframe of submissions related to the search term,
List of polarity scores,
Average polarity score |

## Examples




# VIEW

# redditsent

## stocks_ba_reddit_view.display_redditsent

```python
def redditsen) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L387)

Description: Determine Reddit sentiment about a search term

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | The ticker symbol being search for in Reddit | None | False |
| sortby | str | Type of search | None | False |
| limit | str | Number of posts to get at most | None | False |
| graphic | bool | Displays box and whisker plot | None | False |
| time_frame | str | Time frame for search | None | False |
| full_search | bool | Enable comprehensive search for ticker | None | False |
| subreddits | str | Comma-separated list of subreddits | None | False |
| display | bool | Enable printing of raw sentiment values for each post | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | If supplied, expect 1 external axis | None | False |

## Returns

None

## Examples
