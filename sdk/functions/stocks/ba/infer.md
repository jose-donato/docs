---
title: infer
description: OpenBB SDK Function
---
# infer

## stocks_ba_twitter_model.load_analyze_tweets

```python
def infe) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L22)

Description: Load tweets from twitter API and analyzes using VADER

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to search twitter for | None | False |
| limit | int | Number of tweets to analyze | None | False |
| start_date | Optional[str] | If given, the start time to get tweets from | None | False |
| end_date | Optional[str] | If given, the end time to get tweets from | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of tweets and sentiment |

## Examples




# VIEW

# infer

## stocks_ba_twitter_view.display_inference

```python
def infer(symbol: str, limit: int, export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/twitter_view.py#L28)

Description: Infer sentiment from past n tweets

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| limit | int | Number of tweets to analyze | None | False |
| export | str | Format to export tweet dataframe | None | False |

## Returns

None

## Examples

