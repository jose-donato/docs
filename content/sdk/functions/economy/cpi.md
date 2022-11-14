---
title: cpi
description: OpenBB SDK Function
---
# cpi

## economy_alphavantage_model.get_cpi

```python
def cpi(interval: str, start_year: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/alphavantage_model.py#L180)

Description: Get Consumer Price Index from Alpha Vantage

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| interval | str | Interval for data.  Either "m" or "s" for monthly or semiannual | None | False |
| start_year | int | Start year for plot, by default 2010 | 2010 | True |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of CPI |

## Examples




# VIEW

# cpi

## economy_alphavantage_view.display_cpi

```python
def cp) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L256)

Description: Display US consumer price index (CPI) from AlphaVantage

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| interval | str | Interval for GDP.  Either "m" or "s" | None | False |
| start_year | int | Start year for plot, by default 2010 | 2010 | True |
| raw | bool | Flag to show raw data, by default False | False | True |
| export | str | Format to export data, by default "" | None | True |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

