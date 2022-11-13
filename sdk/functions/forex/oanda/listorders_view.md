---
title: listorders
description: List order history.
---
# listorders

## forex_oanda_view.list_orders

```python
def listorder) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L155)

Description: List order history.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| accountID | str | Oanda user account ID | None | False |
| order_state | str | Filter orders by a specific state ("PENDING", "CANCELLED", etc.) | None | False |
| order_count | int | Limit the number of orders to retrieve | None | False |

## Returns

None

## Examples

