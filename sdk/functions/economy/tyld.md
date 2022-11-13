---
title: tyld
description: OpenBB SDK Function
---
# tyld

## economy_alphavantage_model.get_treasury_yield

```python
def tyld(interval: str, maturity: str, start_date: str) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/alphavantage_model.py#L228)

Description: Get historical yield for a given maturity

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| interval | str | Interval for data.  Can be "d","w","m" for daily, weekly or monthly, by default "m" | None | False |
| start_date | str | Start date for data.  Should be in YYYY-MM-DD format, by default "2010-01-01" | None | False |
| maturity | str | Maturity timeline.  Can be "3mo","5y","10y" or "30y", by default "10y" | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of historical yields |

## Examples




# VIEW

# tyld

## economy_alphavantage_view.display_treasury_yield

```python
def tyl) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L314)

Description: Display historical treasury yield for given maturity

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| interval | str | Interval for data.  Can be "d","w","m" for daily, weekly or monthly, by default "m" | None | False |
| maturity | str | Maturity timeline.  Can be "3mo","5y","10y" or "30y", by default "10y" | None | False |
| start_date | str | Start date for data.  Should be in YYYY-MM-DD format, by default "2010-01-01" | None | False |
| raw | bool | Flag to display raw data, by default False | False | True |
| export | str | Format to export data, by default "" | None | True |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

