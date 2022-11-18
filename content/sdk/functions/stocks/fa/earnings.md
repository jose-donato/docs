---
title: earnings
description: OpenBB SDK Function
---

# earnings

Get earnings calendar for ticker

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/av_model.py#L430)]

```python
def get_earnings(symbol: str, quarterly: bool = False) -> pd.DataFrame
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| quarterly | bool | Flag to get quarterly and not annual, by default False | False | True |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of earnings |

