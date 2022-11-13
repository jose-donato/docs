---
title: contracts
description: Get government contracts for ticker [Source: quiverquant.com]
---
# contracts

## stocks_gov_quiverquant_model.get_contracts

```python
def contracts(symbol: str, past_transaction_days: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_model.py#L102)

Description: Get government contracts for ticker [Source: quiverquant.com]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker to get congress trading data from | None | False |
| past_transaction_days | int | Number of days to get transactions for | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Most recent transactions by members of U.S. Congress |

## Examples

