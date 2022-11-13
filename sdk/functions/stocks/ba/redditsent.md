# redditsent

## stocks_ba_reddit_model.get_posts_about

```python
def get_stars_history(repo: str):
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

