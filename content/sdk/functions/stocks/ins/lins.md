---
title: lins
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# lins

<Tabs>
<TabItem value="model" label="Model" default>

Get last insider activity for a given stock ticker. [Source: Finviz]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/insider/finviz_model.py#L16)

```python
def get_last_insider_activity(symbol: str) -> DataFrame
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Latest insider trading activity |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Display insider activity for a given stock ticker. [Source: Finviz]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/insider/finviz_view.py#L15)

```python
def last_insider_activity(symbol: str, limit: int, export: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| limit | int | Number of latest insider activity to display | None | False |
| export | str | Export dataframe data to csv,json,xlsx file | None | False |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>