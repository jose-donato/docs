---
title: popular
description: Get popular tickers from list of subreddits [Source: reddit]
---
# popular

## stocks_ba_reddit_model.get_popular_tickers

```python
def popula) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L146)

Description: Get popular tickers from list of subreddits [Source: reddit]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of top tickers to get | None | False |
| post_limit | int | How many posts to analyze in each subreddit | None | False |
| subreddits | str | String of comma separated subreddits. | None | True |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame of top tickers from supplied subreddits |

## Examples

