---
title: balance
description: OpenBB SDK Function
---

# balance

## openbb_terminal.stocks.comparison_analysis.marketwatch_model.get_balance_comparison

```python title='openbb_terminal/stocks/comparison_analysis/marketwatch_model.py'
def get_balance_comparison(similar: List[str], timeframe: str, quarter: bool) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/comparison_analysis/marketwatch_model.py#L107)

Description: Get balance data. [Source: Marketwatch].

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| similar | List[str] | List of tickers to compare.<br/>Comparable companies can be accessed through<br/>finnhub_peers(), finviz_peers(), polygon_peers(). | None | False |
| timeframe | str | Column header to compare | None | False |
| quarter | bool | Whether to use quarterly statements, by default False | False | True |
| export | str | Format to export data | None | True |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of balance comparisons |

## Examples
