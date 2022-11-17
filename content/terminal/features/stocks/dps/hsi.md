---
title: hsi
description: OpenBB Terminal Function
---

# Darkpool Shorts

## hsi

### Description: 

Print top stocks being more heavily shorted. HighShortInterest.com provides a convenient sorted database of stocks which have a short interest of over 20 percent. Additional key data such as the float, number of outstanding shares, and company industry is displayed. Data is presented for the Nasdaq Stock Market, the New York Stock Exchange, and the American Stock Exchange. [Source: www.highshortinterest.com]

### Usage: 
```python
usage: hsi [-l LIMIT]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | Limit of the top heavily shorted stocks to retrieve. | 10 | True | None |


## Examples

```python
2022 Feb 15, 08:49 (✨) /stocks/dps/ $ hsi
                                                       Top Interest Stocks
┌────────┬───────────────────────────────┬──────────┬──────────┬─────────┬─────────┬────────────────────────────────────────────┐
│ Ticker │ Company                       │ Exchange │ ShortInt │ Float   │ Outstd  │ Industry                                   │
├────────┼───────────────────────────────┼──────────┼──────────┼─────────┼─────────┼────────────────────────────────────────────┤
│ CRTX   │ Cortexyme Inc                 │ Nasdaq   │ 47.00%   │ 15.56M  │ 29.88M  │ Biotechnology & Medical Research           │
├────────┼───────────────────────────────┼──────────┼──────────┼─────────┼─────────┼────────────────────────────────────────────┤
│ BLNK   │ Blink Charging Co             │ Nasdaq   │ 40.97%   │ 36.46M  │ 42.20M  │ Utilities - Electric                       │
├────────┼───────────────────────────────┼──────────┼──────────┼─────────┼─────────┼────────────────────────────────────────────┤
│ GOGO   │ Gogo Inc                      │ Nasdaq   │ 39.10%   │ 45.62M  │ 109.95M │ Communications Services                    │
├────────┼───────────────────────────────┼──────────┼──────────┼─────────┼─────────┼────────────────────────────────────────────┤
│ FUV    │ Arcimoto Inc                  │ Nasdaq   │ 35.67%   │ 28.76M  │ 37.64M  │ Auto & Truck Manufacturers                 │
├────────┼───────────────────────────────┼──────────┼──────────┼─────────┼─────────┼────────────────────────────────────────────┤
│ ICPT   │ Intercept Pharmaceuticals Inc │ Nasdaq   │ 35.61%   │ 23.52M  │ 29.55M  │ Biotechnology & Medical Research           │
├────────┼───────────────────────────────┼──────────┼──────────┼─────────┼─────────┼────────────────────────────────────────────┤
│ SFT    │ Shift Technologies Inc        │ Nasdaq   │ 35.18%   │ 54.48M  │ 81.31M  │ Retailers - Auto Vehicles, Parts & Service │
├────────┼───────────────────────────────┼──────────┼──────────┼─────────┼─────────┼────────────────────────────────────────────┤
│ BGFV   │ Big 5 Sporting Goods Corp     │ Nasdaq   │ 34.45%   │ 20.01M  │ 22.31M  │ Retailers - Miscellaneous Specialty        │
├────────┼───────────────────────────────┼──────────┼──────────┼─────────┼─────────┼────────────────────────────────────────────┤
│ RMO    │ Romeo Power Inc               │ NYSE     │ 34.28%   │ 90.21M  │ 134.46M │ Electrical Components & Equipment          │
├────────┼───────────────────────────────┼──────────┼──────────┼─────────┼─────────┼────────────────────────────────────────────┤
│ BYND   │ Beyond Meat Inc               │ Nasdaq   │ 33.99%   │ 56.25M  │ 63.33M  │ Food Processing                            │
├────────┼───────────────────────────────┼──────────┼──────────┼─────────┼─────────┼────────────────────────────────────────────┤
│ SDC    │ SmileDirectClub Inc           │ Nasdaq   │ 33.23%   │ 110.88M │ 119.14M │ Medical Equipment, Supplies & Distribution │
└────────┴───────────────────────────────┴──────────┴──────────┴─────────┴─────────┴────────────────────────────────────────────┘
```

