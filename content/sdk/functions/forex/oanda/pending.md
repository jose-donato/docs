---
title: pending
description: OpenBB SDK Function
---
# pending

## forex_oanda_model.pending_orders_request

```python
def pending(accountID: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_model.py#L420)

Description: Request information on pending orders.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| accountID | str | Oanda account ID, by default cfg.OANDA_ACCOUNT | cfg.OANDA_ACCOUNT | True |

## Returns

| Type | Description |
| ---- | ----------- |
| Union[pd.DataFrame, bool] | Pending orders data or False |

## Examples




# VIEW

# pending

## forex_oanda_view.get_pending_orders

```python
def pendin) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L239)

Description: Get information about pending orders.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| accountID | str | Oanda user account ID | None | False |

## Returns

None

## Examples

