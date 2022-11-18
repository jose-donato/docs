---
title: mktcap
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# mktcap

<Tabs>
<TabItem value="model" label="Model" default>

Get market cap over time for ticker. [Source: Yahoo Finance]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/yahoo_finance_model.py#L273)

```python
def get_mktcap(symbol: str, start_date: str) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker to get market cap over time | None | False |
| start_date | str | Initial date (e.g., 2021-10-01). Defaults to 3 years back | 3 | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of estimated market cap over time |

---

## Examples

---



</TabItem>
<TabItem value="view" label="View">

Display market cap over time. [Source: Yahoo Finance]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/yahoo_finance_view.py#L335)

```python
def display_mktcap(symbol: str, start_date: str, export: str, external_axes: Optional[List[matplotlib.axes._axes.Axes]]) -> None
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| start_date | str | Initial date (e.g., 2021-10-01). Defaults to 3 years back | 3 | False |
| export | str | Format to export data | None | False |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

---

## Returns

This function does not return anything

---

## Examples

---



</TabItem>
</Tabs>