---
title: pipo
description: OpenBB SDK Function
---

# pipo

Past IPOs dates. [Source: Finnhub]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/discovery/finnhub_model.py#L74)

```python
def get_past_ipo(num_days_behind: int, start_date: Optional[str]) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| num_days_behind | int | Number of days to look behind for IPOs dates | None | False |
| start_date | str | The starting date (format YYYY-MM-DD) to look for IPOs | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Get dataframe with past IPOs |

---

## Examples

---

