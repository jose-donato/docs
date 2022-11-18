---
title: overview
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# overview

<Tabs>
<TabItem value="model" label="Model" default>

Get overview data for selected etf

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/stockanalysis_model.py#L48)

```python
def get_etf_overview(symbol: str) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| etf_symbol | str | Etf symbol to get overview for | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of stock overview data |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Print etf overview information

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/etf/stockanalysis_view.py#L17)

```python
def view_overview(symbol: str, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | ETF symbols to display overview for | None | False |
| export | str | Format to export data | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>