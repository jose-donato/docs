---
title: cancel
description: OpenBB SDK Function
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




# VIEW

# cancel

## forex_oanda_view.cancel_pending_order

```python
def cance) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L201)

Description: Cancel a Pending Order.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| accountID | str | Oanda user account ID | None | False |
| orderID | str | The pending order ID to cancel. | None | False |

## Returns

None

## Examples

