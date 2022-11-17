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
| fuller_reg | Type of regression. Can be ‘c’,’ct’,’ctt’,’nc’ 'c' - Constant and t - trend order | c | True | c, ct, ctt, nc |
| kpss_reg | Type of regression. Can be ‘c’,’ct' | c | True | c, ct |


## Examples

```python
2022 Feb 16, 11:16 (✨) /stocks/qa/ $ unitroot
         Unit Root Calculation
┏━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━┓
┃                ┃ ADF        ┃ KPSS   ┃
┡━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━┩
│ Test Statistic │ -28.9536   │ 0.2928 │
├────────────────┼────────────┼────────┤
│ P-Value        │ 0.0000     │ 0.1000 │
├────────────────┼────────────┼────────┤
│ NLags          │ 0.0000     │ 3      │
├────────────────┼────────────┼────────┤
│ Nobs           │ 759.0000   │        │
├────────────────┼────────────┼────────┤
│ ICBest         │ -3339.2013 │        │
└────────────────┴────────────┴────────┘
```

