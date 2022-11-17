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
| use_mean | If one should use the mean of the stocks return | False | True | None |
| distributions | Distribution used for the calculations | normal | True | laplace, student_t, logistic, normal |
| percentile | Percentile used for ES calculations, for example input 99.9 equals a 99.9 Percent Expected Shortfall | 99.9 | True | None |


## Examples

```python
2022 Feb 25, 06:50 (✨) /stocks/qa/ $ es
      TSLA Expected Shortfall
┏━━━━━━━┳━━━━━━━━━┳━━━━━━━━━━━━━━━━┓
┃       ┃ ES:     ┃ Historical ES: ┃
┡━━━━━━━╇━━━━━━━━━╇━━━━━━━━━━━━━━━━┩
│ 90.0% │ -0.0752 │ -0.0705        │
├───────┼─────────┼────────────────┤
│ 95.0% │ -0.0885 │ -0.0932        │
├───────┼─────────┼────────────────┤
│ 99.0% │ -0.1144 │ -0.1561        │
├───────┼─────────┼────────────────┤
│ 99.9% │ -0.1444 │ -0.2106        │
└───────┴─────────┴────────────────┘
```

