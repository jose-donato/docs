---
title: customer
description: Print customers from ticker provided
---
# customer

## stocks_dd_csimarket_model.get_customers

```python
def customer(symbol: str, limit: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/due_diligence/csimarket_model.py#L65)

Description: Print customers from ticker provided

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker to select customers from | None | False |
| limit | int | The maximum number of rows to show | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | A dataframe of suppliers |

## Examples

