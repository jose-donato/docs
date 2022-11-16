---
title: fmp_cash
description: OpenBB SDK Function
---

# fmp_cash

## openbb_terminal.stocks.fundamental_analysis.fmp_model.get_cash

```python title='openbb_terminal/stocks/fundamental_analysis/fmp_model.py'
def get_cash(symbol: str, limit: int, quarterly: bool, ratios: bool, plot: bool) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/fmp_model.py#L349)

Description: Get cash flow

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| limit | int | Number to get | None | False |
| quarterly | bool | Flag to get quarterly data, by default False | False | True |
| ratios | bool | Shows percentage change, by default False | False | False |
| plot | bool | If the data shall be formatted ready to plot | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of company cash flow |

## Examples

