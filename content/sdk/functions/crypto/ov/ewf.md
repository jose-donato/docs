---
title: ewf
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ewf

<Tabs>
<TabItem value="model" label="Model" default>

Scrapes exchange withdrawal fees

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/withdrawalfees_model.py#L182)]

```python
def get_overall_exchange_withdrawal_fees() -> pd.DataFrame
```

---

## Parameters

This function does not take any parameters.

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Exchange, Coins, Lowest, Average, Median, Highest |
---



</TabItem>
<TabItem value="view" label="View">

Exchange withdrawal fees

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/withdrawalfees_view.py#L53)]

```python
def display_overall_exchange_withdrawal_fees(export: str = "") -> None
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| export | str | Export dataframe data to csv,json,xlsx file |  | True |


---

## Returns

This function does not return anything

---



</TabItem>
</Tabs>