---
title: es
description: OpenBB Terminal Function
---

# Quantitative Analysis

## es

### Description: 

Provides Expected Shortfall (short: ES) of the selected stock.

### Usage: 
```python
usage: es [-m] [-d {laplace,student_t,logistic,normal}] [-p PERCENTILE]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| use_mean | If one should use the mean of the stocks return | None | False | None |
| distributions | Distribution used for the calculations | normal | False | laplace, student_t, logistic, normal |
| percentile | Percentile used for ES calculations, for example input 99.9 equals a 99.9 Percent Expected Shortfall | 99.9 | False | None |


