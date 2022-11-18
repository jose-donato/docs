---
title: omega
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# omega

<Tabs>
<TabItem value="model" label="Model" default>

Get the omega series

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_model.py#L639)

```python
def get_omega(data: pd.DataFrame, threshold_start: float, threshold_end: float) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | stock dataframe | None | False |
| threshold_start | float | annualized target return threshold start of plotted threshold range | None | False |
| threshold_end | float | annualized target return threshold end of plotted threshold range | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | omega series |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Plots the omega ratio

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_view.py#L1172)

```python
def display_omega(data: pd.DataFrame, threshold_start: float, threshold_end: float) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | stock dataframe | None | False |
| threshold_start | float | annualized target return threshold start of plotted threshold range | None | False |
| threshold_end | float | annualized target return threshold end of plotted threshold range | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>