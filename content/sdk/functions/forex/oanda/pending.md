---
title: pending
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# pending

<Tabs>
<TabItem value="model" label="Model" default>

Request information on pending orders.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_model.py#L421)]

```python
def pending_orders_request(accountID: str = "REPLACE_ME") -> Union[pd.DataFrame, bool]
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| accountID | str | Oanda account ID, by default cfg.OANDA_ACCOUNT | REPLACE_ME | True |

## Returns

| Type | Description |
| ---- | ----------- |
| Union[pd.DataFrame, bool] | Pending orders data or False |



</TabItem>
<TabItem value="view" label="View">

Get information about pending orders.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_view.py#L233)]

```python
def get_pending_orders(accountID: str) -> None
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| accountID | str | Oanda user account ID | None | False |

## Returns

This function does not return anything



</TabItem>
</Tabs>