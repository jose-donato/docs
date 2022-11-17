---
title: voi_yf
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# voi_yf

<Tabs>
<TabItem value="model" label="Model" default>

Plot volume and open interest

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/yfinance_model.py#L599)]

```python
def get_volume_open_interest(symbol: str, expiry: str) -> pd.DataFrame
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| expiry | str | Option expiration | None | False |

## Returns

This function does not return anything



</TabItem>
<TabItem value="view" label="View">

Plot volume and open interest

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/yfinance_view.py#L429)]

```python
def plot_volume_open_interest(symbol: str, expiry: str, min_sp: float = -1, max_sp: float = -1, min_vol: float = -1, export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None) -> None
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| expiry | str | Option expiration | None | False |
| min_sp | float | Min strike price | -1 | True |
| max_sp | float | Max strike price | -1 | True |
| min_vol | float | Min volume to consider | -1 | True |
| export | str | Format for exporting data |  | True |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

This function does not return anything



</TabItem>
</Tabs>