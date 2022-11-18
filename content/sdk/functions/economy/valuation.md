---
title: valuation
description: OpenBB SDK Function
---

# valuation

Get group (sectors, industry or country) valuation data. [Source: Finviz]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/finviz_model.py#L66)

```python
def get_valuation_data(group: str, sortby: str, ascend: bool) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| group | str | Group by category. Available groups can be accessed through get_groups(). | None | False |
| sortby | str | Column to sort by | None | False |
| ascend | bool | Flag to sort in ascending order | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | dataframe with valuation/performance data |

---

## Examples

---

