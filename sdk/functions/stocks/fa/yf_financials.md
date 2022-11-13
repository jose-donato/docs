---
title: yf_financials
description: Get cashflow statement for company
---
# yf_financials

## stocks_fa_yahoo_finance_model.get_financials

```python
def yf_financials(symbol: str, statement: str, ratios: bool) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/yahoo_finance_model.py#L327)

Description: Get cashflow statement for company

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| statement | str | can be:

- cash-flow
- financials for Income
- balance-sheet | None | False |
| ratios | bool | Shows percentage change | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of Financial statement |

## Examples

