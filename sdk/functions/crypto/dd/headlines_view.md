---
title: headlines
description: Sentiment analysis from FinBrain for Cryptocurrencies
---
# headlines

## crypto_dd_crypto_finbrain_view.display_crypto_sentiment_analysis

```python
def headlines(symbol: str, raw: bool, export: str, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/finbrain_crypto_view.py#L38)

Description: Sentiment analysis from FinBrain for Cryptocurrencies

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Cryptocurrency | None | False |
| raw | False | Display raw table data | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

