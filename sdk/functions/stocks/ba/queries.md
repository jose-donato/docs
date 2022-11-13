---
title: queries
description: Get related queries from google api [Source: google]
---
# queries

## stocks_ba_google_model.get_queries

```python
def queries(symbol: str, limit: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/google_model.py#L72)

Description: Get related queries from google api [Source: google]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol to compare | None | False |
| limit | int | Number of queries to show | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| {'top': pd.DataFrame or None, 'rising': pd.DataFrame or None} | None |

## Examples

