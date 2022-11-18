---
title: sharpe
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# sharpe

<Tabs>
<TabItem value="model" label="Model" default>

Calculates the sharpe ratio

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_model.py#L537)

```python
def get_sharpe(data: pd.DataFrame, rfr: float, window: float) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | selected dataframe column | None | False |
| rfr | float | risk free rate | None | False |
| window | float | length of the rolling window | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | sharpe ratio |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Plots Calculated the sharpe ratio

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_view.py#L1114)

```python
def display_sharpe(data: pd.DataFrame, rfr: float, window: float) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | selected dataframe column | None | False |
| rfr | float | risk free rate | None | False |
| window | float | length of the rolling window | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>