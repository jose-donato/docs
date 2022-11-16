---
title: historical
description: OpenBB Terminal Function
---

# Screener

## historical

### Description: 

Historical price comparison between similar companies [Source: Yahoo Finance]

### Usage: 
```python
usage: historical [-l LIMIT] [-n] [-s START] [-t {o,h,l,c,a}]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | Limit of the most shorted stocks to retrieve. | 10 | False | None |
| no_scale | Flag to not put all prices on same 0-1 scale | None | False | None |
| start | The starting date (format YYYY-MM-DD) of the historical price to plot | 2022-05-20 | False | None |
| type_candle | type of candles: o-open, h-high, l-low, c-close, a-adjusted close. | a | False | o, h, l, c, a |


