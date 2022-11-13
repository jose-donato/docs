# hist

## stocks_ba_sentimentinvestor_model.get_historical

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L18)

Description: Get hour-level sentiment data for the chosen symbol

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker to view sentiment data | None | False |
| start_date | str | Initial date like string or unix timestamp (e.g. 12-21-2021) | None | False |
| end_date | str | End date like string or unix timestamp (e.g. 12-21-2021) | None | False |
| number | int | Number of results returned by API call
Maximum 250 per api call | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of historical sentiment |

## Examples

