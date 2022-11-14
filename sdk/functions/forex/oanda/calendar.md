---
title: calendar
description: OpenBB SDK Function
---
# calendar

## forex_oanda_model.get_calendar_request

```python
def calendar(days: int, instrument: Union[str, NoneType]) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_model.py#L644)

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




# VIEW

# calendar

## forex_oanda_view.calendar

```python
def calenda) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L392)

Description: View calendar of significant events.

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| instrument | str | The loaded currency pair | None | False |
| days | int | Number of days in advance | None | False |

## Returns

None

## Examples

