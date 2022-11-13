---
title: hcorr
description: Correlation heatmap based on historical price comparison
---
# hcorr

## stocks_ca_yahoo_finance_view.display_correlation

```python
def hcorr(similar: List[str], start_date: str, candle_type: str, display_full_matrix: bool, raw: bool, external_axes: Union[List[matplotlib.axes._axes.Axes], NoneType], export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/comparison_analysis/yahoo_finance_view.py#L162)

Description: Correlation heatmap based on historical price comparison

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| similar | List[str] | List of similar tickers.
Comparable companies can be accessed through
finnhub_peers(), finviz_peers(), polygon_peers(). | None | False |
| start_date | str | Start date of comparison, by default 1 year ago | 1 | True |
| candle_type | str | OHLCA column to use for candles or R for returns, by default "a" for Adjusted Close | None | True |
| display_full_matrix | bool | Optionally display all values in the matrix, rather than masking off half, by default False | False | True |
| raw | bool | Whether to display raw data | None | True |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |
| export | str | Format to export correlation prices, by default "" | None | True |

## Returns

None

## Examples

