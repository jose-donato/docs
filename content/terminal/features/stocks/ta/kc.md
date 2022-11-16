---
title: kc
description: OpenBB Terminal Function
---

# Technical Analysis

## kc

### Description: 

Keltner Channels are volatility-based bands that are placed on either side of an asset's price and can aid in determining the direction of a trend.The Keltner channel uses the average true range (ATR) or volatility, with breaks above or below the top and bottom barriers signaling a continuation.

### Usage: 
```python
usage: kc [-l N_LENGTH] [-s N_SCALAR] [-m {ema,sma,wma,hma,zlma}] [-o N_OFFSET]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| n_length | Window length | 20 | False | None |
| n_scalar | scalar | 2 | False | None |
| s_mamode | mamode | ema | False | ema, sma, wma, hma, zlma |
| n_offset | offset | None | False | None |


