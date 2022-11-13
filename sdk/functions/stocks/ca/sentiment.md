# sentiment

## stocks_ca_finbrain_model.get_sentiments

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/comparison_analysis/finbrain_model.py#L46)

Description: Gets Sentiment analysis from several symbols provided by FinBrain's API

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbols | List[str] | List of tickers to get sentiment
Comparable companies can be accessed through
finnhub_peers(), finviz_peers(), polygon_peers(). | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Contains sentiment analysis from several tickers |

## Examples

