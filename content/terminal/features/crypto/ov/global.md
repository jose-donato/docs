---
title: global
description: OpenBB Terminal Function
---

# Overview

## global

### Description: 

Shows global statistics about Crypto Market

### Usage: 
```python
usage: global [--pie]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| pie | Flag to show pie chart with market cap distribution. Works only with CoinGecko source | False | True | None |


## Examples

```python

2022 Feb 15, 08:13 (✨) /crypto/ov/ $ global
                 Global Statistics
┌──────────────────────────────────────┬──────────┐
│ Metric                               │ Value    │
├──────────────────────────────────────┼──────────┤
│ Active Cryptocurrencies              │ 12589.00 │
├──────────────────────────────────────┼──────────┤
│ Upcoming Icos                        │ 0.00     │
├──────────────────────────────────────┼──────────┤
│ Ongoing Icos                         │ 49.00    │
├──────────────────────────────────────┼──────────┤
│ Ended Icos                           │ 3376.00  │
├──────────────────────────────────────┼──────────┤
│ Markets                              │ 741.00   │
├──────────────────────────────────────┼──────────┤
│ Market Cap Change Percentage 24H Usd │ 5.08     │
├──────────────────────────────────────┼──────────┤
│ Btc Market Cap In Pct                │ 40.46    │
├──────────────────────────────────────┼──────────┤
│ Eth Market Cap In Pct                │ 17.95    │
├──────────────────────────────────────┼──────────┤
│ Altcoin Market Cap In Pct            │ 41.59    │
└──────────────────────────────────────┴──────────┘

```

