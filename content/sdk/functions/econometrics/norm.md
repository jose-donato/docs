---
title: norm
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# norm

<Tabs>
<TabItem value="model" label="Model" default>

The distribution of returns and generate statistics on the relation to the normal curve.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/econometrics_model.py#L113)

```python
def get_normality(data: pd.Series) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.Series | A series or column of a DataFrame to test normality for | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe containing statistics of normality |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Determine the normality of a timeseries.

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/econometrics_view.py#L129)

```python
def display_norm(data: pd.Series, dataset: str, column: str, plot: bool, export: str, external_axes: Optional[List[axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.Series | Series of custom data | None | False |
| dataset | str | Dataset name | None | False |
| column | str | Column for y data | None | False |
| plot | bool | Whether you wish to plot a histogram | None | False |
| export | str | Format to export data. | None | False |
| external_axes | Optional[List[plt.axes]] | External axes to plot on | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>