---
title: vol_yf
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vol_yf

<Tabs>
<TabItem value="model" label="Model" default>

Plot volume

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/yfinance_model.py#L580)]

```python
def get_vol(symbol: str, expiry: str) -> pd.DataFrame
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol | None | False |
| expiry | str | expiration date for options | None | False |

## Returns

This function does not return anything



</TabItem>
<TabItem value="view" label="View">

Plot volume

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/yfinance_view.py#L338)]

```python
def plot_vol(symbol: str, expiry: str, min_sp: float = -1, max_sp: float = -1, calls_only: bool = False, puts_only: bool = False, export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None) -> None
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol | None | False |
| expiry | str | expiration date for options | None | False |
| min_sp | float | Min strike to consider | -1 | True |
| max_sp | float | Max strike to consider | -1 | True |
| calls_only | bool | Show calls only | False | True |
| puts_only | bool | Show puts only | False | True |
| export | str | Format to export file |  | True |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

This function does not return anything



</TabItem>
</Tabs>