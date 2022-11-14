---
title: popular
description: OpenBB SDK Function
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




# VIEW

# popular

## stocks_ba_reddit_view.display_popular_tickers

```python
def popula) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L183)

Description: Print latest popular tickers. [Source: Reddit]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of top tickers to get | None | False |
| post_limit | int | How many posts to analyze in each subreddit | None | False |
| subreddits | str | String of comma separated subreddits. | None | True |
| export | str | Format to export dataframe | None | False |

## Returns

None

## Examples

