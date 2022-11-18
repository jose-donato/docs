---
title: weights
description: OpenBB SDK Function
---

# weights

Return sector weightings allocation of ETF. [Source: Yahoo Finance]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/yfinance_model.py#L15)]
```python
def get_etf_sector_weightings(name: str) -> Dict
```
---
## Parameters
| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| name | str | ETF name | None | False |

---
## Returns
| Type | Description |
| ---- | ----------- |
| Dict[str, Any] | Dictionary with sector weightings allocation |
---
