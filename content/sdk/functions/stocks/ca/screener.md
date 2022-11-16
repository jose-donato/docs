---
title: screener
description: OpenBB SDK Function
---

# screener

## openbb_terminal.stocks.comparison_analysis.finviz_compare_model.get_comparison_data

```python title='openbb_terminal/stocks/comparison_analysis/finviz_compare_model.py'
def get_comparison_data(similar: List[str], data_type: str) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/comparison_analysis/finviz_compare_model.py#L53)

Description: Screener Overview.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| similar |  | List of similar companies.<br/>Comparable companies can be accessed through<br/>finnhub_peers(), finviz_peers(), polygon_peers(). | None | False |
| data_type | str | Data type between: overview, valuation, financial, ownership, performance, technical | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe with overview, valuation, financial, ownership, performance or technical |

## Examples

