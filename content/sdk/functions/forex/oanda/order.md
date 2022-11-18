---
title: order
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# order

<Tabs>
<TabItem value="model" label="Model" default>

Request creation of buy/sell trade order.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_model.py#L270)

```python
def create_order_request(price: int, units: int, instrument: Optional[str], accountID: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| instrument | Union[str, None] | The loaded currency pair, by default None | None | False |
| price | int | The price to set for the limit order. | None | False |
| units | int | The number of units to place in the order request. | None | False |
| accountID | str | Oanda account ID, by default cfg.OANDA_ACCOUNT | cfg.OANDA_ACCOUNT | True |

---

## Returns

| Type | Description |
| ---- | ----------- |
| Union[pd.DataFrame, bool] | Orders data or False |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Create a buy/sell order.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_view.py#L174)

```python
def create_order(accountID: str, instrument: str, price: int, units: int) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| accountID | str | Oanda user account ID | None | False |
| instrument | str | The loaded currency pair | None | False |
| price | int | The price to set for the limit order. | None | False |
| units | int | The number of units to place in the order request. | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>