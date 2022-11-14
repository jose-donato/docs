---
title: macro
description: OpenBB SDK Function
---
# macro

## economy_econdb_model.get_aggregated_macro_data

```python
def macro(parameters: list, countries: list, transform: str, start_date: str, end_date: Any, symbol: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/econdb_model.py#L648)

Description: This functions groups the data queried from the EconDB database [Source: EconDB]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| parameters | list | The type of data you wish to download. Available parameters can be accessed through economy.macro_parameters(). | None | False |
| countries | list | The selected country or countries. Available countries can be accessed through economy.macro_countries(). | None | False |
| transform | str | The selected transform. Available transforms can be accessed through get_macro_transform(). | None | False |
| start_date | str | The starting date, format "YEAR-MONTH-DAY", i.e. 2010-12-31. | None | False |
| end_date | str | The end date, format "YEAR-MONTH-DAY", i.e. 2020-06-05. | None | False |
| symbol | str | In what currency you wish to convert all values. | None | False |
| Returns | None | None | None | None |
| ---------- | None | None | None | None |
| pd.DataFrame | None | A DataFrame with the requested macro data of all chosen countries | None | None |
| Dictionary | None | A dictionary containing the units of each country's parameter (e.g. EUR) | None | None |
| str | None | Denomination which can be Trillions, Billions, Millions, Thousands | None | None |

## Returns

None

## Examples




# VIEW

# macro

## economy_econdb_view.show_macro_data

```python
def macro(parameters: list, countries: list, transform: str, start_date: str, end_date: str, symbol: str, raw: bool, external_axes: Union[List[axes], NoneType], export: str) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/econdb_view.py#L25)

Description: Show the received macro data about a company [Source: EconDB]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| parameters | list | The type of data you wish to display. Available parameters can be accessed through get_macro_parameters(). | None | False |
| countries | list | The selected country or countries. Available countries can be accessed through get_macro_countries(). | None | False |
| transform | str | select data transformation from:
    '' - no transformation
    'TPOP' - total percentage change on period,
    'TOYA' - total percentage since 1 year ago,
    'TUSD' - level USD,
    'TPGP' - Percentage of GDP,
    'TNOR' - Start = 100 | None | False |
| start_date | str | The starting date, format "YEAR-MONTH-DAY", i.e. 2010-12-31. | None | False |
| end_date | str | The end date, format "YEAR-MONTH-DAY", i.e. 2020-06-05. | None | False |
| symbol | str | In what currency you wish to convert all values. | None | False |
| raw | bool | Whether to display the raw output. | None | False |
| external_axes | Optional[List[plt.axes]] | External axes to plot on | None | False |
| export | str | Export data to csv,json,xlsx or png,jpg,pdf,svg file | None | False |
| Returns | None | None | None | None |
| ---------- | None | None | None | None |
| Plots the Series. | None | None | None | None |

## Returns

None

## Examples

