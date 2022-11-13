---
title: scorr
description: Get correlation sentiments across similar companies. [Source: FinBrain]
---
# scorr

## stocks_ca_finbrain_model.get_sentiment_correlation

```python
def scorr(similar: List[str]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/comparison_analysis/finbrain_model.py#L124)

Description: Get correlation sentiments across similar companies. [Source: FinBrain]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| similar | List[str] | Similar companies to compare income with.
Comparable companies can be accessed through
finnhub_peers(), finviz_peers(), polygon_peers(). | None | False |

## Returns

None

## Examples

