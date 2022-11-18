---
title: normality
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# normality

<Tabs>
<TabItem value="model" label="Model" default>

Look at the distribution of returns and generate statistics on the relation to the normal curve.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_model.py#L81)]

```python
def get_normality(data: pd.DataFrame) -> pd.DataFrame
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of targeted data | None | False |


---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe containing statistics of normality |
---



</TabItem>
<TabItem value="view" label="View">

Prints table showing normality statistics

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_view.py#L769)]

```python
def display_normality(data: pd.DataFrame, target: str, export: str = "") -> None
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | DataFrame | None | False |
| target | str | Column in data to look at | None | False |
| export | str | Format to export data |  | True |


---

## Returns

This function does not return anything

---



</TabItem>
</Tabs>