---
title: price
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# price

<Tabs>
<TabItem value="model" label="Model" default>

Request price for a forex pair.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_model.py#L36)

```python
def fx_price_request(accountID: str, instrument: Optional[str]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| accountID | str | Oanda account ID, by default cfg.OANDA_ACCOUNT | cfg.OANDA_ACCOUNT | True |
| instrument | Union[str, None] | The loaded currency pair, by default None | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| Union[Dict[str, str], bool] | The currency pair price or False |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

View price for loaded currency pair.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_view.py#L40)

```python
def get_fx_price(account: str, instrument: Optional[str]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| accountID | str | Oanda account ID | None | False |
| instrument | Union[str, None] | Instrument code or None | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>