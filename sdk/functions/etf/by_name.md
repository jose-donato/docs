---
title: by_name
description: Get an ETF symbol and name based on ETF string to search. [Source: StockAnalysis]
---
# by_name

## etf_stockanalysis_model.get_etfs_by_name

```python
def by_name(name_to_search: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/stockanalysis_model.py#L133)

Description: Get an ETF symbol and name based on ETF string to search. [Source: StockAnalysis]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| name_to_search | str | ETF name to match | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.Dataframe | Dataframe with symbols and names |

## Examples

