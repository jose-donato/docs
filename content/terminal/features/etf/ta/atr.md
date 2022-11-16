---
title: atr
description: OpenBB Terminal Function
---

# Technical Analysis

## atr

### Description: 

Averge True Range is used to measure volatility, especially volatility caused by gaps or limit moves.

### Usage: 
```python
usage: atr [-l N_LENGTH] [-m {ema,sma,wma,hma,zlma}] [-o N_OFFSET]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| n_length | Window length | 14 | False | None |
| s_mamode | mamode | ema | False | ema, sma, wma, hma, zlma |
| n_offset | offset | None | False | None |


