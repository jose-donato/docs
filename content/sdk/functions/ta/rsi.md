---
title: rsi
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# rsi

<Tabs>
<TabItem value="model" label="Model" default>

Relative strength index

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/momentum_model.py#L93)

```python
def rsi(data: pd.Series, window: int, scalar: float, drift: int) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.Series | Dataframe of prices | None | False |
| window | int | Length of window | None | False |
| scalar | float | Scalar variable | None | False |
| drift | int | Drift variable | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of technical indicator |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Plots RSI Indicator

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/momentum_view.py#L219)

```python
def display_rsi(data: pd.Series, window: int, scalar: float, drift: int, symbol: str, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.Series | Values to input | None | False |
| window | int | Length of window | None | False |
| scalar | float | Scalar variable | None | False |
| drift | int | Drift variable | None | False |
| symbol | str | Stock ticker | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (2 axes are expected in the list), by default None | None | True |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>