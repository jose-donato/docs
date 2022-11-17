---
title: listorders
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# listorders

<Tabs>
<TabItem value="model" label="Model" default>

Request the orders list from Oanda.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_model.py#L225)]

```python
def order_history_request(order_state: str = "PENDING", order_count: int = 0, accountID: str = "REPLACE_ME") -> Union
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| order_state | str | Filter orders by a specific state ("PENDING", "CANCELLED", etc.) | PENDING | True |
| order_count | int | Limit the number of orders to retrieve | 0 | True |
| accountID | str | Oanda account ID, by default cfg.OANDA_ACCOUNT | REPLACE_ME | True |

## Returns

This function does not return anything



</TabItem>
<TabItem value="view" label="View">

List order history.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_view.py#L153)]

```python
def list_orders(accountID: str, order_state: str = "PENDING", order_count: int = 0) -> None
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| accountID | str | Oanda user account ID | None | False |
| order_state | str | Filter orders by a specific state ("PENDING", "CANCELLED", etc.) | PENDING | True |
| order_count | int | Limit the number of orders to retrieve | 0 | True |

## Returns

This function does not return anything



</TabItem>
</Tabs>