---
title: headlines
description: Gets Sentiment analysis provided by FinBrain's API [Source: finbrain]
---
# headlines

## stocks_ba_finbrain_model.get_sentiment

```python
def headlines(symbol: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/finbrain_model.py#L14)

Description: Gets Sentiment analysis provided by FinBrain's API [Source: finbrain]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to get the sentiment analysis from | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| DataFrame() | Empty if there was an issue with data retrieval |

## Examples

