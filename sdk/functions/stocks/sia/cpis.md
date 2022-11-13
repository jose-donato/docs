---
title: cpis
description: Get number of companies per industry in a specific sector (and specific market cap).
---
# cpis

## stocks_sia_financedatabase_model.get_companies_per_industry_in_sector

```python
def cpis(sector: str, mktcap: str, exclude_exchanges: bool) -> dict:
```
[Source Code](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/sector_industry_analysis/financedatabase_model.py#L308)

Description: Get number of companies per industry in a specific sector (and specific market cap).

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| sector | str | Select sector to get number of companies by each industry | None | False |
| mktcap | str | Select market cap of companies to consider from Small, Mid and Large | None | False |
| exclude_exchanges | bool | Exclude international exchanges | None | False |

## Returns

| Type | Description |
| ---- | ----------- |
| dict | Dictionary of industries and number of companies in a specific sector |

## Examples

