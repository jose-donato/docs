---
title: order
description: OpenBB SDK Function
---
# order

## forex_oanda_model.create_order_request

```python
def order(price: int, units: int, instrument: Union[str, NoneType], accountID: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_model.py#L269)

Description: Request creation of buy/sell trade order.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| instrument | Union[str, None] | The loaded currency pair, by default None | None | False |
| price | int | The price to set for the limit order. | None | False |
| units | int | The number of units to place in the order request. | None | False |
| accountID | str | Oanda account ID, by default cfg.OANDA_ACCOUNT | cfg.OANDA_ACCOUNT | True |

## Returns

| Type | Description |
| ---- | ----------- |
| Union[pd.DataFrame, bool] | Orders data or False |

## Examples




# VIEW

# order

## forex_oanda_view.create_order

```python
def orde) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L177)

Description: Create a buy/sell order.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| accountID | str | Oanda user account ID | None | False |
| instrument | str | The loaded currency pair | None | False |
| price | int | The price to set for the limit order. | None | False |
| units | int | The number of units to place in the order request. | None | False |

## Returns

None

## Examples
