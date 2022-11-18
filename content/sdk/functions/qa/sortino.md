---
title: sortino
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# sortino

<Tabs>
<TabItem value="model" label="Model" default>

Calculates the sortino ratio

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_model.py#L562)

```python
def get_sortino(data: pd.DataFrame, target_return: float, window: float, adjusted: bool) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | selected dataframe | None | False |
| target_return | float | target return of the asset | None | False |
| window | float | length of the rolling window | None | False |
| adjusted | bool | adjust the sortino ratio | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | sortino ratio |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Plots the sortino ratio

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_view.py#L1139)

```python
def display_sortino(data: pd.DataFrame, target_return: float, window: float, adjusted: bool) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | selected dataframe | None | False |
| target_return | float | target return of the asset | None | False |
| window | float | length of the rolling window | None | False |
| adjusted | bool | adjust the sortino ratio | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>