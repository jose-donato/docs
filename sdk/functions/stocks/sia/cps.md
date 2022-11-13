# cps

## stocks_sia_financedatabase_model.get_companies_per_sector_in_country

```python
def get_stars_history(repo: str):
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/sector_industry_analysis/financedatabase_model.py#L204)

Description: Get number of companies per sector in a specific country (and specific market cap). [Source: Finance Database]

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| country | str | Select country to get number of companies by each sector | None | False |
| mktcap | str | Select market cap of companies to consider from Small, Mid and Large | None | False |
| exclude_exchanges | bool | Exclude international exchanges | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| dict | Dictionary of sectors and number of companies in a specific country |

## Examples

