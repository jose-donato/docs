---
title: calendar
description: OpenBB SDK Function
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# calendar

<Tabs>
<TabItem value="model" label="Model" default>

## openbb_terminal.forex.oanda.oanda_model.get_calendar_request

```python title='openbb_terminal/forex/oanda/oanda_model.py'
def get_calendar_request(days: int, instrument: Optional[str]) -> Union
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_model.py#L645)

Description: Request data of significant events calendar.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| instrument | Union[str, None] | The loaded currency pair, by default None | None | False |
| days | int | Number of days in advance | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| Union[pd.DataFrame, bool] | Calendar events data or False |

## Examples



</TabItem>
<TabItem value="view" label="View">

## openbb_terminal.forex.oanda.oanda_view.calendar

```python title='openbb_terminal/forex/oanda/oanda_view.py'
def calendar(instrument: str, days: int) -> None
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_view.py#L393)

Description: View calendar of significant events.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| instrument | str | The loaded currency pair | None | False |
| days | int | Number of days in advance | None | False |

## Returns

This function does not return anything

## Examples



</TabItem>
</Tabs>