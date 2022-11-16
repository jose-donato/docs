---
title: var
description: OpenBB Terminal Function
---

# Portfolio

## var

### Description: 

Provides value at risk (short: VaR) of the selected portfolio.

### Usage: 
```python
usage: var [-m] [-a] [-s] [-p PERCENTILE]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| use_mean | If one should use the mean of the portfolio return | True | False | None |
| adjusted | If the VaR should be adjusted for skew and kurtosis (Cornish-Fisher-Expansion) | None | False | None |
| student_t | If one should use the student-t distribution | None | False | None |
| percentile | Percentile used for VaR calculations, for example input 99.9 equals a 99.9 Percent VaR | 99.9 | False | None |


## Examples

```python

2022 Feb 25, 03:09 (✨) /portfolio/ $ var
       Portfolio Value at Risk
┏━━━━━━━┳━━━━━━━━━┳━━━━━━━━━━━━━━━━━┓
┃       ┃ VaR:    ┃ Historical VaR: ┃
┡━━━━━━━╇━━━━━━━━━╇━━━━━━━━━━━━━━━━━┩
│ 90.0% │ -0.0148 │ -0.0135         │
├───────┼─────────┼─────────────────┤
│ 95.0% │ -0.0189 │ -0.0197         │
├───────┼─────────┼─────────────────┤
│ 99.0% │ -0.0267 │ -0.0258         │
├───────┼─────────┼─────────────────┤
│ 99.9% │ -0.0353 │ -0.0276         │
└───────┴─────────┴─────────────────┘

```

