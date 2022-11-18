---
title: th
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# th

<Tabs>
<TabItem value="model" label="Model" default>

Get info about token historical transactions. [Source: Ethplorer]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/ethplorer_model.py#L489)]
```python
def get_token_history(address: str, sortby: str = "timestamp", ascend: bool = False) -> pd.DataFrame
```
---
## Parameters
| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| address | str | Token e.g. 0xf3db5fa2c66b7af3eb0c0b782510816cbe4813b8 | None | False |
| sortby | str | Key to sort by. | timestamp | True |
| ascend | str | Sort in descending order. | False | True |

---
## Returns
| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame with token historical transactions. |
---


</TabItem>
<TabItem value="view" label="View">

Display info about token history. [Source: Ethplorer]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/ethplorer_view.py#L276)]
```python
def display_token_history(address: str, limit: int = 10, sortby: str = "timestamp", ascend: bool = False, hash_: bool = False, export: str = "") -> None
```
---
## Parameters
| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| address | str | Token balance e.g. 0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984 | None | False |
| limit | int | Limit of transactions. Maximum 100 | 10 | True |
| sortby | str | Key to sort by. | timestamp | True |
| ascend | str | Sort in descending order. | False | True |
| hash_ | bool, | Flag to show transaction hash. | False | True |
| export | str | Export dataframe data to csv,json,xlsx file |  | True |

---
## Returns
This function does not return anything
---


</TabItem>
</Tabs>