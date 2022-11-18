---
title: polygon_peers
description: OpenBB SDK Function
---

# polygon_peers

Get similar companies from Polygon

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/comparison_analysis/polygon_model.py#L17)]

```python
def get_similar_companies(symbol: str, us_only: bool = False) -> List[str]
```
---
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker to get similar companies of | None | False |
| us_only | bool | Only stocks from the US stock exchanges | False | True |

---
## Returns

| Type | Description |
| ---- | ----------- |
|  | List of similar tickers |

---
