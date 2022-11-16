---
title: unitroot
description: OpenBB Terminal Function
---

# Quantitative Analysis

## unitroot

### Description: 

Unit root test / stationarity (ADF, KPSS)

### Usage: 
```python
usage: unitroot [-r {c,ct,ctt,nc}] [-k {c,ct}]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| fuller_reg | Type of regression. Can be ‘c’,’ct’,’ctt’,’nc’ 'c' - Constant and t - trend order | c | False | c, ct, ctt, nc |
| kpss_reg | Type of regression. Can be ‘c’,’ct' | c | False | c, ct |


