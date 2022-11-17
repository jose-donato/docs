---
title: analyst
description: OpenBB Terminal Function
---

# Due Diligence

## analyst

### Description: 

Print analyst prices and ratings of the company. The following fields are expected: date, analyst, category, price from, price to, and rating. [Source: Finviz]

### Usage: 
```python
usage: analyst
```



## Examples

```python
2022 Feb 16, 04:20 (✨) /stocks/dd/ $ analyst
                                         Display Analyst Ratings
┏━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━━━━━━┳━━━━━━━━━━━┓
┃            ┃ category   ┃ analyst         ┃ rating                ┃ target  ┃ target_from ┃ target_to ┃
┡━━━━━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━━┩
│ 2022-01-31 │ Upgrade    │ Credit Suisse   │ Neutral - Outperform │ 1025.00 │ nan         │ nan       │
├────────────┼────────────┼─────────────────┼───────────────────────┼─────────┼─────────────┼───────────┤
│ 2022-01-27 │ Reiterated │ Wells Fargo     │ Equal Weight          │ nan     │ 860.00      │ 910.00    │
├────────────┼────────────┼─────────────────┼───────────────────────┼─────────┼─────────────┼───────────┤
│ 2022-01-27 │ Reiterated │ Robert W. Baird │ Outperform            │ nan     │ 888.00      │ 1108.00   │
├────────────┼────────────┼─────────────────┼───────────────────────┼─────────┼─────────────┼───────────┤
│ 2022-01-27 │ Reiterated │ Oppenheimer     │ Outperform            │ nan     │ 1080.00     │ 1103.00   │
├────────────┼────────────┼─────────────────┼───────────────────────┼─────────┼─────────────┼───────────┤
│ 2022-01-27 │ Reiterated │ JP Morgan       │ Underweight           │ nan     │ 295.00      │ 325.00    │
└────────────┴────────────┴─────────────────┴───────────────────────┴─────────┴─────────────┴───────────┘
```

