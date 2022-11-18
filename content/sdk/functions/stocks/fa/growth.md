---
title: growth
description: OpenBB SDK Function
---

# growth

Get financial statement growth

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/fmp_model.py#L499)

```python
def get_financial_growth(symbol: str, limit: int, quarterly: bool) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| limit | int | Number to get | None | False |
| quarterly | bool | Flag to get quarterly data, by default False | False | True |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of financial statement growth |

---

## Examples

---

