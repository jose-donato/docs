---
title: cpic
description: Get number of companies per industry in a specific country (and specific market cap).
---
# cpic

## stocks_sia_financedatabase_model.get_companies_per_industry_in_country

```python
def cpic(country: str, mktcap: str, exclude_exchanges: bool) -> None:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/sector_industry_analysis/financedatabase_model.py#L254)

Description: Get number of companies per industry in a specific country (and specific market cap).

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| country | str | Select country to get number of companies by each industry | None | False |
| mktcap | str | Select market cap of companies to consider from Small, Mid and Large | None | False |
| exclude_exchanges | bool | Exclude international exchanges | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| dict | Dictionary of industries and number of companies in a specific country |

## Examples

