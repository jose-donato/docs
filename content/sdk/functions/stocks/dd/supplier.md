---
title: supplier
description: OpenBB SDK Function
---

# supplier

Get suppliers from ticker provided. [Source: CSIMarket]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/due_diligence/csimarket_model.py#L42)]
```python
def get_suppliers(symbol: str, limit: int = 50) -> pd.DataFrame
```
---
## Parameters
| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker to select suppliers from | None | False |
| limit | int | The maximum number of rows to show | 50 | True |

---
## Returns
| Type | Description |
| ---- | ----------- |
| pd.DataFrame | A dataframe of suppliers |
---
