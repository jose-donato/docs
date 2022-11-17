---
title: calendar
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# calendar

<Tabs>
<TabItem value="model" label="Model" default>

Request data of significant events calendar.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_model.py#L645)]

```python
def get_calendar_request(days: int = 14, instrument: Optional[str] = None) -> Union
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| instrument | Union[str, None] | The loaded currency pair, by default None | None | True |
| days | int | Number of days in advance | 14 | True |

## Returns

| Type | Description |
| ---- | ----------- |
| Union[pd.DataFrame, bool] | Calendar events data or False |



</TabItem>
<TabItem value="view" label="View">

View calendar of significant events.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_view.py#L383)]

```python
def calendar(instrument: str, days: int = 7) -> None
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| instrument | str | The loaded currency pair | None | False |
| days | int | Number of days in advance | 7 | True |

## Returns

This function does not return anything



</TabItem>
</Tabs>