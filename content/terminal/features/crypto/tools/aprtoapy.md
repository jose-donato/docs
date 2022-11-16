---
title: aprtoapy
description: OpenBB Terminal Function
---

# Tools

## aprtoapy

### Description: 

Tool to calculate APY from APR value. Compouding periods, i.e., the number of times compounded per year can be defined with -c argument.

### Usage: 
```python
usage: aprtoapy [--apr APR] [-c COMPOUNDING] [-n]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| apr | APR value in percentage to convert | 100 | False | None |
| compounding | Number of compounded periods in a year. 12 means compounding monthly | 12 | False | None |
| narrative | Flag to show narrative instead of dataframe | None | False | None |


