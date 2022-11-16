---
title: hcorr
description: OpenBB Terminal Function
---

# Comparison Analysis

## hcorr

### Description: 

Correlation heatmap based on historical price comparison between similar companies.

### Usage: 
```python
usage: hcorr [-t {o,h,l,c,a,r}] [-s START] [--display-full-matrix]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| type_candle | Candle data to use: o-open, h-high, l-low, c-close, a-adjusted close, r-returns. | a | True | o, h, l, c, a, r |
| start | The starting date (format YYYY-MM-DD) of the stock | 2021-11-15 | True | None |
| display_full_matrix | Display all matrix values, rather than masking off half. | False | True | None |


![hcorr](https://user-images.githubusercontent.com/46355364/154073186-45336f5f-85e1-4cb9-9307-9694295b1f80.png)

