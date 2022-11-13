# treasury

## economy_econdb_model.get_treasuries

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/econdb_model.py#L723)

Description: Get U.S. Treasury rates [Source: EconDB]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| instruments | list | Type(s) of treasuries, nominal, inflation-adjusted (long term average) or secondary market.
Available options can be accessed through economy.treasury_maturities(). | None | False |
| maturities | list | Treasury maturities to get. Available options can be accessed through economy.treasury_maturities(). | None | False |
| frequency | str | Frequency of the data, this can be annually, monthly, weekly or daily. | None | False |
| start_date | str | Starting date, format "YEAR-MONTH-DAY", i.e. 2010-12-31. | None | False |
| end_date | str | End date, format "YEAR-MONTH-DAY", i.e. 2020-06-05. | None | False |
| Returns | None | None | None | None |
| ---------- | None | None | None | None |
| treasury_data | pd.Dataframe | Holds data of the selected types and maturities | None | False |

None

## Examples

