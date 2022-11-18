---
title: psi_sg
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# psi_sg

<Tabs>
<TabItem value="model" label="Model" default>

Get price vs short interest volume. [Source: Stockgrid]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/stockgrid_model.py#L121)]

```python
def get_short_interest_volume(symbol: str) -> Tuple[pd.DataFrame, List]
```
---
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock to get data from | None | False |

---
## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[pd.DataFrame, List] | Short interest volume data, Price data |

---


</TabItem>
<TabItem value="view" label="View">

Plot price vs short interest volume. [Source: Stockgrid]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/stockgrid_view.py#L123)]

```python
def short_interest_volume(symbol: str, limit: int = 84, raw: bool = False, export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None) -> None
```
---
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock to plot for | None | False |
| limit | int | Number of last open market days to show | 84 | True |
| raw | bool | Flag to print raw data instead | False | True |
| export | str | Export dataframe data to csv,json,xlsx file |  | True |
| external_axes | Optional[List[plt.Axes]] | External axes (3 axes are expected in the list), by default None | None | True |

---
## Returns

This function does not return anything

---


</TabItem>
</Tabs>