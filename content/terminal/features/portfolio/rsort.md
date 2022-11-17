---
title: rsort
description: OpenBB Terminal Function
---

# Portfolio

## rsort

### Description: 

Show rolling sortino portfolio vs benchmark

### Usage: 
```python
usage: rsort [-p {mtd,qtd,ytd,all,3m,6m,1y,3y,5y,10y}] [-r RISK_FREE_RATE]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| period | Period to apply rolling window | 1y | True | mtd, qtd, ytd, all, 3m, 6m, 1y, 3y, 5y, 10y |
| risk_free_rate | Set risk free rate for calculations. | 0 | True | None |


