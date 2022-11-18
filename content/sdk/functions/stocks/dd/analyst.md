---
title: analyst
description: OpenBB SDK Function
---

# analyst

Get analyst data. [Source: Finviz]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/due_diligence/finviz_model.py#L33)]

```python
def get_analyst_data(symbol: str) -> pd.DataFrame
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| DataFrame | Analyst price targets |

