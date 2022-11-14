---
title: sentiment
description: OpenBB SDK Function
---
# sentiment

## stocks_ca_finbrain_model.get_sentiments

```python
def sentiment(symbols: List[str]) -> DataFrame:
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




# VIEW

# sentiment

## stocks_ca_finbrain_view.display_sentiment_compare

```python
def sentiment(similar: List[str], raw: bool, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/comparison_analysis/finbrain_view.py#L31)

Description: Display sentiment for all ticker. [Source: FinBrain]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| similar | List[str] | Similar companies to compare income with.
Comparable companies can be accessed through
finviz_peers(), finnhub_peers() or polygon_peers(). | None | False |
| raw | bool | Output raw values, by default False | False | True |
| export | str | Format to export data | None | True |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

