# macro

## economy_econdb_model.get_aggregated_macro_data

```python
def get_stars_history(repo: str):
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

None

## Examples

