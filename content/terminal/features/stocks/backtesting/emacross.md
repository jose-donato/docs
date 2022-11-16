---
title: emacross
description: OpenBB Terminal Function
---

# Backtesting

## emacross

### Description: 

Cross between a long and a short Exponential Moving Average.

### Usage: 
```python
usage: emacross [-l LONG] [-s SHORT] [--spy] [--no_bench] [--no_short]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| long | Long EMA period | 50 | False | None |
| short | Short EMA period | 20 | False | None |
| spy | Flag to add spy hold comparison | None | False | None |
| no_bench | Flag to not show buy and hold comparison | None | False | None |
| shortable | Flag that disables the short sell | True | False | None |


