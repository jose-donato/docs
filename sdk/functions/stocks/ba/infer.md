# infer

## stocks_ba_twitter_model.load_analyze_tweets

```python
def get_stars_history(repo: str):
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

