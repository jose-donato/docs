---
title: cancel
description: Request cancellation of a pending order.
---
# cancel

## forex_oanda_model.cancel_pending_order_request

```python
def cancel(orderID: str, accountID: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_model.py#L345)

Description: Request cancellation of a pending order.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| orderID | str | The pending order ID to cancel. | None | False |
| accountID | str | Oanda account ID, by default cfg.OANDA_ACCOUNT | cfg.OANDA_ACCOUNT | True |

## Returns

None

## Examples

