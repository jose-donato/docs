---
title: perfmap
description: OpenBB SDK Function
---

# perfmap

Opens Finviz map website in a browser. [Source: Finviz]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/finviz_model.py#L42)]

```python
def get_performance_map(period: str = "1d", map_filter: str = "sp500") -> None
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| period | str | Performance period. Available periods are 1d, 1w, 1m, 3m, 6m, 1y. | 1d | True |
| scope | str | Map filter. Available map filters are sp500, world, full, etf. | None | True |


---

## Returns

This function does not return anything

---

