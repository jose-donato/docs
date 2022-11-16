---
title: ols
description: OpenBB Terminal Function
---

# Econometrics

## ols

### Description: 

Performs an OLS regression on timeseries data.

### Usage: 
```python
usage: ols -d DEPENDENT -i INDEPENDENT [--no-output]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| dependent | The dependent variable on the regression you would like to perform | None | True | None |
| independent | The independent variables on the regression you would like to perform. E.g. historical.high,historical.low | None | True | None |
| no_output | Hide the output of the regression | None | False | None |


