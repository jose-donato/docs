---
title: poly_financials
description: Display tickers balance sheet or income statement
---
# poly_financials

## stocks_fa_polygon_view.display_fundamentals

```python
def poly_financial) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L25)

Description: Display tickers balance sheet or income statement

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| statement | str | Either balance or income | None | False |
| limit | int | Number of results to show, by default 10 | 10 | False |
| quarterly | bool | Flag to get quarterly reports, by default False | False | False |
| ratios | bool | Shows percentage change, by default False | False | False |
| plot | list | List of row labels to plot | None | False |
| export | str | Format to export data | None | False |

## Returns

None

## Examples

