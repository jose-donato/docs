---
title: volexch
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# volexch

<Tabs>
<TabItem value="model" label="Model" default>

Gets short data for 5 exchanges [https://ftp.nyse.com] starting at 1/1/2021

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/nyse_model.py#L15)]
```python
def get_short_data_by_exchange(symbol: str) -> pd.DataFrame
```
---
## Parameters
| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker to get data for | None | False |

---
## Returns
| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame of short data by exchange |
---


</TabItem>
<TabItem value="view" label="View">

Display short data by exchange

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/nyse_view.py#L29)]
```python
def display_short_by_exchange(symbol: str, raw: bool = False, sortby: str = "", ascend: bool = False, mpl: bool = True, export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None) -> None
```
---
## Parameters
| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker | None | False |
| raw | bool | Flag to display raw data | False | True |
| sortby | str | Column to sort by |  | True |
| ascend | bool | Sort in ascending order | False | True |
| mpl | bool | Display using matplotlib | True | True |
| export | str | Format  of export data |  | True |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

---
## Returns
This function does not return anything
---


</TabItem>
</Tabs>