---
title: opentrades
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# opentrades

<Tabs>
<TabItem value="model" label="Model" default>

Request open trades data.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_model.py#L470)]
```python
def open_trades_request(accountID: str = "REPLACE_ME") -> Union[pd.DataFrame, bool]
```
---
## Parameters
| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| accountID | str | Oanda account ID, by default cfg.OANDA_ACCOUNT | REPLACE_ME | True |

---
## Returns
| Type | Description |
| ---- | ----------- |
| Union[pd.DataFrame, bool] | Open trades data or False |
---


</TabItem>
<TabItem value="view" label="View">

View open trades.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_view.py#L252)]
```python
def get_open_trades(accountID: str) -> None
```
---
## Parameters
| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| accountID | str | Oanda user account ID | None | False |

---
## Returns
This function does not return anything
---


</TabItem>
</Tabs>