---
title: platforms1
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# platforms1

<Tabs>
<TabItem value="model" label="Model" default>

List all smart contract platforms like ethereum, solana, cosmos, polkadot, kusama ... [Source: CoinPaprika]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/coinpaprika_model.py#L380)]

```python
def get_all_contract_platforms() -> pd.DataFrame
```
---
## Parameters

This function does not take any parameters.

---
## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | index, platform_id |

---


</TabItem>
<TabItem value="view" label="View">

List all smart contract platforms like ethereum, solana, cosmos, polkadot, kusama.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/coinpaprika_view.py#L324)]

```python
def display_all_platforms(export: str) -> None
```
---
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

---
## Returns

This function does not return anything

---


</TabItem>
</Tabs>