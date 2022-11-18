---
title: lasttrades
description: OpenBB SDK Function
---

# lasttrades

Get last government trading [Source: quiverquant.com]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_model.py#L164)

```python
def get_last_government(gov_type: str, limit: int, representative: str) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| gov_type | str | Type of government data between: congress, senate and house | None | False |
| limit | int | Number of days to look back | None | False |
| representative | str | Specific representative to look at | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Last government trading |

---

## Examples

---

