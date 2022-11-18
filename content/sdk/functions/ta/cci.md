---
title: cci
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# cci

<Tabs>
<TabItem value="model" label="Model" default>

Commodity channel index

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/momentum_model.py#L20)

```python
def cci(data: pd.DataFrame, window: int, scalar: float) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| high_vals | pd.Series | High values | None | False |
| low_values | pd.Series | Low values | None | False |
| close-values | pd.Series | Close values | None | False |
| window | int | Length of window | None | False |
| scalar | float | Scalar variable | None | False |

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

Plots CCI Indicator

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/momentum_view.py#L34)

```python
def display_cci(data: pd.DataFrame, window: int, scalar: float, symbol: str, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of OHLC | None | False |
| window | int | Length of window | None | False |
| scalar | float | Scalar variable | None | False |
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