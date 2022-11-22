---
title: pt
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# pt

<Tabs>
<TabItem value="model" label="Model" default>

Get analysts' price targets for a given stock. [Source: Business Insider]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/due_diligence/business_insider_model.py#L20)]

```python
openbb.stocks.dd.pt(symbol: str)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol | None | False |


---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Analysts data |
---



</TabItem>
<TabItem value="view" label="Chart">

Display analysts' price targets for a given stock. [Source: Business Insider]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/due_diligence/business_insider_view.py#L31)]

```python
openbb.stocks.dd.pt_chart(symbol: str, data: pd.DataFrame, start_date: str = None, limit: int = 10, raw: bool = False, export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Due diligence ticker symbol | None | False |
| data | DataFrame | Due diligence stock dataframe | None | False |
| start_date | str | Start date of the stock data, format YYYY-MM-DD | None | True |
| limit | int | Number of latest price targets from analysts to print | 10 | True |
| raw | bool | Display raw data only | False | True |
| export | str | Export dataframe data to csv,json,xlsx file |  | True |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |


---

## Returns

This function does not return anything

---



</TabItem>
</Tabs>