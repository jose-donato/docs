---
title: curve
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# curve

<Tabs>
<TabItem value="model" label="Model" default>

Get curve futures [Source: Yahoo Finance]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/futures/yfinance_model.py#L118)

```python
def get_curve_futures(symbol: str) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | symbol to get forward curve | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dictionary with sector weightings allocation |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Display curve futures [Source: Yahoo Finance]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/futures/yfinance_view.py#L232)

```python
def display_curve(symbol: str, raw: bool, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Curve future symbol to display | None | False |
| raw | bool | Display futures timeseries in raw format | None | False |
| export | str | Type of format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>