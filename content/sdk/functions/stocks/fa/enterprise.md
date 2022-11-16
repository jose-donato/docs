---
title: enterprise
description: OpenBB SDK Function
---

# enterprise

## openbb_terminal.stocks.fundamental_analysis.fmp_model.get_enterprise

```python title='openbb_terminal/stocks/fundamental_analysis/fmp_model.py'
def get_enterprise(symbol: str, limit: int, quarterly: bool) -> DataFrame
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/fmp_model.py#L131)

Description: Financial Modeling Prep ticker enterprise

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Fundamental analysis ticker symbol | None | False |
| limit | int | Number to get | None | False |
| quarterly | bool | Flag to get quarterly data | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of enterprise information |

## Examples

