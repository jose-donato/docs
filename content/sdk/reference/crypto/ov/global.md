---
title: global
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# global

<Tabs>
<TabItem value="model" label="Model" default>

Get global statistics about crypto markets from CoinGecko API like:

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_model.py#L460)]

```python
openbb.crypto.ov.global()
```

---

## Parameters

This function does not take any parameters.

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Market_Cap, Volume, Market_Cap_Percentage |
---



</TabItem>
<TabItem value="view" label="Chart">

Shows global statistics about crypto. [Source: CoinGecko]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_view.py#L238)]

```python
openbb.crypto.ov.global_chart(pie: bool = False, export: str = "")
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| pie | bool | Whether to show a pie chart | False | True |
| export | str | Export dataframe data to csv,json,xlsx file |  | True |


---

## Returns

This function does not return anything

---



</TabItem>
</Tabs>