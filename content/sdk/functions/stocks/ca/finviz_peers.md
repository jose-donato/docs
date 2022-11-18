---
title: finviz_peers
description: OpenBB SDK Function
---

# finviz_peers

Get similar companies from Finviz.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/comparison_analysis/finviz_compare_model.py#L25)]
```python
def get_similar_companies(symbol: str, compare_list: List[str] = None) -> List[str]
```
---
## Parameters
| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker to find comparisons for | None | False |
| compare_list | List[str] | List of fields to compare, ["Sector", "Industry", "Country"] | None | True |

---
## Returns
| Type | Description |
| ---- | ----------- |
| List[str] | List of similar companies |
---
