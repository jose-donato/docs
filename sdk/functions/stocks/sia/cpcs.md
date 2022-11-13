# cpcs

## stocks_sia_financedatabase_model.get_companies_per_country_in_sector

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/sector_industry_analysis/financedatabase_model.py#L359)

Description: Get number of companies per country in a specific sector (and specific market cap).

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sector | str | Select sector to get number of companies by each country | None | False |
| mktcap | str | Select market cap of companies to consider from Small, Mid and Large | None | False |
| exclude_exchanges | bool | Exclude international exchanges | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| dict | Dictionary of countries and number of companies in a specific sector |

## Examples

