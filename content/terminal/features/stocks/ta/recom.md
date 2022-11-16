---
title: recom
description: OpenBB Terminal Function
---

# Technical Analysis

## recom

### Description: 

Print tradingview recommendation based on technical indicators. [Source: Tradingview]

### Usage: 
```python
usage: recom [-s {australia,brazil,cfd,crypto,euronext,forex,france,germany,hongkong,india,indonesia,malaysia,philippines,russia,ksa,rsa,korea,spain,sweden,taiwan,thailand,turkey,uk,america,vietnam}] [-e EXCHANGE] [-i {1m,5m,15m,1h,4h,1d,1W,1M}]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| screener | Screener. See https://python-tradingview-ta.readthedocs.io/en/latest/usage.html | america | True | australia, brazil, cfd, crypto, euronext, forex, france, germany, hongkong, india, indonesia, malaysia, philippines, russia, ksa, rsa, korea, spain, sweden, taiwan, thailand, turkey, uk, america, vietnam |
| exchange | Set exchange. For Forex use: 'FX_IDC', and for crypto use 'TVC'. See https://python-tradingview-ta.readthedocs.io/en/latest/usage.html. By default Alpha Vantage tries to get this data from the ticker. |  | True | None |
| interval | Interval, that corresponds to the recommendation given by tradingview based on technical indicators. See https://python-tradingview-ta.readthedocs.io/en/latest/usage.html |  | True | dict_keys(['1m', '5m', '15m', '1h', '4h', '1d', '1W', '1M']) |


## Examples

```python

2022 Feb 16, 11:31 (✨) /stocks/ta/ $ recom
               Ticker Recommendation
┏━━━━━━━━━┳━━━━━━━━━━━━━━━━┳━━━━━┳━━━━━━┳━━━━━━━━━┓
┃         ┃ RECOMMENDATION ┃ BUY ┃ SELL ┃ NEUTRAL ┃
┡━━━━━━━━━╇━━━━━━━━━━━━━━━━╇━━━━━╇━━━━━━╇━━━━━━━━━┩
│ 1 month │ BUY            │ 15  │ 2    │ 9       │
├─────────┼────────────────┼─────┼──────┼─────────┤
│ 1 week  │ BUY            │ 14  │ 2    │ 10      │
├─────────┼────────────────┼─────┼──────┼─────────┤
│ 1 day   │ SELL           │ 5   │ 13   │ 8       │
├─────────┼────────────────┼─────┼──────┼─────────┤
│ 4 hours │ SELL           │ 4   │ 14   │ 8       │
├─────────┼────────────────┼─────┼──────┼─────────┤
│ 1 hour  │ SELL           │ 4   │ 13   │ 9       │
├─────────┼────────────────┼─────┼──────┼─────────┤
│ 15 min  │ SELL           │ 3   │ 13   │ 10      │
├─────────┼────────────────┼─────┼──────┼─────────┤
│ 5 min   │ SELL           │ 5   │ 12   │ 9       │
├─────────┼────────────────┼─────┼──────┼─────────┤
│ 1 min   │ SELL           │ 6   │ 11   │ 9       │
└─────────┴────────────────┴─────┴──────┴─────────┘

```

