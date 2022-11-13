---
title: lasttrades
description: Get last government trading [Source: quiverquant.com]
---
# lasttrades

## stocks_gov_quiverquant_model.get_last_government

```python
def lasttrades(gov_type: str, limit: int, representative: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_model.py#L163)

Description: Get last government trading [Source: quiverquant.com]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| gov_type | str | Type of government data between: congress, senate and house | None | False |
| limit | int | Number of days to look back | None | False |
| representative | str | Specific representative to look at | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Last government trading |

## Examples

