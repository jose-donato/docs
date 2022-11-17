---
title: events
description: OpenBB SDK Function
---

# events

Get economic calendar for countries between specified dates

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/nasdaq_model.py#L21)]

```python
def get_economic_calendar(countries: Union[List[str], str] = "", start_date: str = None, end_date: str = None) -> DataFrame
```
## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| countries | [List[str],str] | List of countries to include in calendar.  Empty returns all |  | True |
| start_date | str | Start date for calendar | None | True |
| end_date | str | End date for calendar | None | True |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Economic calendar |

