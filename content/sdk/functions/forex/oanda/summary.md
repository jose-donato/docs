---
title: summary
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# summary

<Tabs>
<TabItem value="model" label="Model" default>

Request Oanda account summary.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_model.py#L74)]
```python
def account_summary_request(accountID: str = "REPLACE_ME") -> Union[pd.DataFrame, bool]
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
| Union[pd.DataFrame, bool] | Account summary data or False |
---


</TabItem>
<TabItem value="view" label="View">

Print Oanda account summary.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_view.py#L62)]
```python
def get_account_summary(accountID: str) -> None
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