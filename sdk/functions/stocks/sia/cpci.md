# cpci

## stocks_sia_financedatabase_model.get_companies_per_country_in_industry

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/sector_industry_analysis/financedatabase_model.py#L410)

Description: Get number of companies per country in a specific industry (and specific market cap).

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| industry | str | Select industry to get number of companies by each country | None | False |
| mktcap | str | Select market cap of companies to consider from Small, Mid and Large | None | False |
| exclude_exchanges | bool | Exclude international exchanges | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| dict | Dictionary of countries and number of companies in a specific sector |

## Examples

