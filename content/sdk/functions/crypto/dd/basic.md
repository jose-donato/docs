---
title: basic
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# basic

<Tabs>
<TabItem value="model" label="Model" default>

Basic coin information [Source: CoinPaprika]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinpaprika_model.py#L379)]
```python
def basic_coin_info(symbol: str = "BTC") -> pd.DataFrame
```
---
## Parameters
| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Cryptocurrency symbol (e.g. BTC) | BTC | True |

---
## Returns
| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Metric, Value |
---


</TabItem>
<TabItem value="view" label="View">

Prints table showing basic information for coin. Like:

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/coinpaprika_view.py#L325)]
```python
def display_basic(symbol: str = "BTC", export: str = "") -> None
```
---
## Parameters
| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Cryptocurrency symbol (e.g. BTC) | BTC | True |
| export | str | Export dataframe data to csv,json,xlsx |  | True |

---
## Returns
This function does not return anything
---


</TabItem>
</Tabs>