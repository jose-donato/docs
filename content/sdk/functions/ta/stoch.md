---
title: stoch
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# stoch

<Tabs>
<TabItem value="model" label="Model" default>

Stochastic oscillator

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/momentum_model.py#L126)

```python
def stoch(data: pd.DataFrame, fastkperiod: int, slowdperiod: int, slowkperiod: int) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of OHLC prices | None | False |
| fastkperiod | int | Fast k period | None | False |
| slowdperiod | int | Slow d period | None | False |
| slowkperiod | int | Slow k period | None | False |

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

Plots stochastic oscillator signal

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/momentum_view.py#L307)

```python
def display_stoch(data: pd.DataFrame, fastkperiod: int, slowdperiod: int, slowkperiod: int, symbol: str, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of OHLC prices | None | False |
| fastkperiod | int | Fast k period | None | False |
| slowdperiod | int | Slow d period | None | False |
| slowkperiod | int | Slow k period | None | False |
| symbol | str | Stock ticker symbol | None | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (3 axes are expected in the list), by default None | None | True |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>