---
title: fipo
description: OpenBB SDK Function
---

# fipo

Future IPOs dates. [Source: Finnhub]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/discovery/finnhub_model.py#L115)

```python
def get_future_ipo(num_days_ahead: int, end_date: Optional[str]) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| num_days_ahead | int | Number of days to look ahead for IPOs dates | None | False |
| end_date | datetime | The end date (format YYYY-MM-DD) to look for IPOs from today onwards | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Get dataframe with future IPOs |

---

## Examples

---

