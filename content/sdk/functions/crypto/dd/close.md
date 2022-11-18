---
title: close
description: OpenBB SDK Function
---

# close

Returns the price of a cryptocurrency

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/glassnode_model.py#L180)

```python
def get_close_price(symbol: str, start_date: str, end_date: str, print_errors: bool) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Crypto to check close price (BTC or ETH) | None | False |
| start_date | str | Initial date, format YYYY-MM-DD | None | False |
| end_date | str | Final date, format YYYY-MM-DD | None | False |
| print_errors | bool | Flag to print errors. Default: True | True | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | price over time |

---

## Examples

---

