---
title: vsurf
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# vsurf

<Tabs>
<TabItem value="model" label="Model" default>

Gets IV surface for calls and puts for ticker

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/yfinance_model.py#L367)

```python
def get_iv_surface(symbol: str) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol to get | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of DTE, Strike and IV |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Display vol surface

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/yfinance_view.py#L1128)

```python
def display_vol_surface(symbol: str, export: str, z: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to get surface for | None | False |
| export | str | Format to export data | None | False |
| z | str | The variable for the Z axis | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>