---
title: es
description: OpenBB Terminal Function
---

# Portfolio

## es

### Description: 

Provides Expected Shortfall (short: ES) of the selected portfolio.

### Usage: 
```python
usage: es [-m] [-d {laplace,student_t,logistic,normal}] [-p PERCENTILE]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| use_mean | If one should use the mean of the portfolios return | True | True | None |
| distribution | Distribution used for the calculations | normal | True | laplace, student_t, logistic, normal |
| percentile | Percentile used for ES calculations, for example input 99.9 equals a 99.9 Percent Expected Shortfall | 99.9 | True | None |


## Examples

```python

2022 Feb 25, 03:09 (✨) /portfolio/ $ es
    Portfolio Expected Shortfall
┏━━━━━━━┳━━━━━━━━━┳━━━━━━━━━━━━━━━━┓
┃       ┃ ES:     ┃ Historical ES: ┃
┡━━━━━━━╇━━━━━━━━━╇━━━━━━━━━━━━━━━━┩
│ 90.0% │ -0.0204 │ -0.0202        │
├───────┼─────────┼────────────────┤
│ 95.0% │ -0.0240 │ -0.0242        │
├───────┼─────────┼────────────────┤
│ 99.0% │ -0.0310 │ -0.0270        │
├───────┼─────────┼────────────────┤
│ 99.9% │ -0.0391 │ -0.0277        │
└───────┴─────────┴────────────────┘

```

