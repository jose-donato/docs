# trend

## stocks_ba_sentimentinvestor_model.get_trending

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/sentimentinvestor_model.py#L129)

Description: Get sentiment data on the most talked about tickers

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| start_date | datetime | Datetime object (e.g. datetime(2021, 12, 21) | None | False |
| hour | int | Hour of the day in 24-hour notation (e.g. 14) | None | False |
| number | int | Number of results returned by API call
Maximum 250 per api call | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of trending data |

## Examples

