---
title: sentiment
description: Get sentiments from symbol
---
# sentiment

## stocks_ba_twitter_model.get_sentiment

```python
def sentiment(symbol: str, n_tweets: int, n_days_past: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/twitter_model.py#L124)

Description: Get sentiments from symbol

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol to get sentiment for | None | False |
| n_tweets | int | Number of tweets to get per hour | None | False |
| n_days_past | int | Number of days to extract tweets for | None | False |

## Returns

None

## Examples

