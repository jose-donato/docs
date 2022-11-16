---
title: historical
description: OpenBB Terminal Function
---

# Comparison Analysis

## historical

### Description: 

Historical price comparison between similar companies.

### Usage: 
```python
usage: historical [-t {o,h,l,c,a}] [-n] [-s START]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| type_candle | Candle data to use: o-open, h-high, l-low, c-close, a-adjusted close. | a | False | o, h, l, c, a |
| normalize | Flag to normalize all prices on same 0-1 scale | None | False | None |
| start | The starting date (format YYYY-MM-DD) of the stock | 2021-11-15 | False | None |


