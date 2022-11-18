---
title: sectors
description: OpenBB SDK Function
---

# sectors

Get all sectors in Yahoo Finance data based on country or industry. [Source: Finance Database]

Source Code: [link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/sector_industry_analysis/financedatabase_model.py#L44)

```python
def get_sectors(industry: str, country: str) -> list
```
---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| industry | str | Filter retrieved sectors by industry | None | False |
| country | str | Filter retrieved sectors by country | None | False |

---

## Returns

| Type | Description |
| ---- | ----------- |
| list | List of possible sectors |

---

## Examples

---

