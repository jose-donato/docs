---
title: fipo
description: OpenBB Terminal Function
---

# Discovery

## fipo

### Description: 

Future IPOs dates. [Source: https://finnhub.io]

### Usage: 
```python
usage: fipo [-d DAYS] [-s END] [-l LIMIT]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| days | Number of days in the future to look for IPOs. | 5 | False | None |
| end | The end date (format YYYY-MM-DD) to look for IPOs, starting from today. When set, end date will override --days argument | None | False | None |
| limit | Limit number of IPOs to display. | 20 | False | None |


## Examples

```python

2022 Feb 16, 03:59 (✨) /stocks/disc/ $ fipo
                                                       Future IPO Dates
┏━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━┓
┃ Future     ┃ Exchange       ┃ Name                 ┃ Number of Shares ┃ Price      ┃ Status   ┃ symbol ┃ Total Shares Value ┃
┡━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━┩
│ 2022-02-16 │ NASDAQ Capital │ SMART FOR LIFE, INC. │ 1800000          │ 9.00-11.00 │ expected │ SMFL   │ 22770000           │
└────────────┴────────────────┴──────────────────────┴──────────────────┴────────────┴──────────┴────────┴────────────────────┘

```

