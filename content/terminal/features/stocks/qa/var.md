---
title: var
description: OpenBB Terminal Function
---

# Quantitative Analysis

## var

### Description: 

Provides value at risk (short: VaR) of the selected stock.

### Usage: 
```python
usage: var [-m] [-a] [-s] [-p PERCENTILE] [-d DATA_RANGE]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| use_mean | If one should use the mean of the stocks return | None | False | None |
| adjusted | If the VaR should be adjusted for skew and kurtosis (Cornish-Fisher-Expansion) | None | False | None |
| student_t | If one should use the student-t distribution | None | False | None |
| percentile | Percentile used for VaR calculations, for example input 99.9 equals a 99.9 Percent VaR | 99.9 | False | None |
| data_range | Number of rows you want to use VaR over, ex: if you are using days, 30 would show VaR for the last 30 TRADING days | None | False | None |


