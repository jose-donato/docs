---
title: sentiment
description: Plot sentiments from symbol
---
# sentiment

## stocks_ba_twitter_view.display_sentiment

```python
def sentiment(symbol: str, n_tweets: int, n_days_past: int, compare: bool, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/twitter_view.py#L78)

Description: Plot sentiments from symbol

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol to get sentiment for | None | False |
| n_tweets | int | Number of tweets to get per hour | None | False |
| n_days_past | int | Number of days to extract tweets for | None | False |
| compare | bool | Show corresponding change in stock price | None | False |
| export | str | Format to export tweet dataframe | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

