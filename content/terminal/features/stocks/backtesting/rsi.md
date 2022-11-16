---
title: rsi
description: OpenBB Terminal Function
---

# Backtesting

## rsi

### Description: 

Strategy that buys when the stock is less than a threshold and shorts when it exceeds a threshold.

### Usage: 
```python
usage: rsi [-p PERIODS] [-u HIGH] [-l LOW] [--spy] [--no_bench] [--no_short]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| periods | Number of periods for RSI calculation | 14 | False | None |
| high | High (upper) RSI Level | 70 | False | None |
| low | Low RSI Level | 30 | False | None |
| spy | Flag to add spy hold comparison | None | False | None |
| no_bench | Flag to not show buy and hold comparison | None | False | None |
| shortable | Flag that disables the short sell | True | False | None |


