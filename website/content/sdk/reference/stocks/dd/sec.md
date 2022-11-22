---
title: sec
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# sec

<Tabs>
<TabItem value="model" label="Model" default>

Get SEC filings for a given stock ticker. [Source: Market Watch]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/due_diligence/marketwatch_model.py#L20)]

```python
openbb.stocks.dd.sec(symbol: str)
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
| pd.DataFrame | SEC filings data |
---



</TabItem>
<TabItem value="view" label="Chart">

Display SEC filings for a given stock ticker. [Source: Market Watch]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/due_diligence/marketwatch_view.py#L15)]

```python
openbb.stocks.dd.sec_chart(symbol: str, limit: int = 5, export: str = "")
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol | None | False |
| limit | int | Number of ratings to display | 5 | True |
| export | str | Export dataframe data to csv,json,xlsx file |  | True |


---

## Returns

This function does not return anything

---



</TabItem>
</Tabs>