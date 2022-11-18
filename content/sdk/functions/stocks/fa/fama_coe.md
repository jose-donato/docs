---
title: fama_coe
description: OpenBB SDK Function
---

# fama_coe

Use Fama and French to get the cost of equity for a company

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/dcf_model.py#L300)]

```python
def get_fama_coe(symbol: str) -> float
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | The ticker symbol to be analyzed | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| float | The stock's Fama French coefficient |

