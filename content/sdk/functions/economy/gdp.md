---
title: gdp
description: OpenBB SDK Function
---
# gdp

## economy_alphavantage_model.get_real_gdp

```python
def gdp(interval: str, start_year: int) -> DataFrame:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/alphavantage_model.py#L43)

Description: Get annual or quarterly Real GDP for US

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| interval | str | Interval for GDP, by default "a" for annual, by default "q" | None | True |
| start_year | int | Start year for plot, by default 2010 | 2010 | True |

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of GDP |

## Examples




# VIEW

# gdp

## economy_alphavantage_view.display_real_gdp

```python
def gd) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/decorators.py#L87)

Description: Display US GDP from AlphaVantage

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| interval | str | Interval for GDP.  Either "a" or "q", by default "q" | None | False |
| start_year | int | Start year for plot, by default 2010 | 2010 | True |
| raw | bool | Flag to show raw data, by default False | False | True |
| export | str | Format to export data, by default "" | None | True |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |

## Returns

None

## Examples

