---
title: lastcontracts
description: Get last government contracts [Source: quiverquant.com]
---
# lastcontracts

## stocks_gov_quiverquant_model.get_last_contracts

```python
def lastcontracts(past_transaction_days: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_model.py#L376)

Description: Get last government contracts [Source: quiverquant.com]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| past_transaction_days | int | Number of days to look back | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame of government contracts |

## Examples

