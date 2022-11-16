---
title: hma
description: OpenBB Terminal Function
---

# Technical Analysis

## hma

### Description: 

The Hull Moving Average solves the age old dilemma of making a moving average more responsive to current price activity whilst maintaining curve smoothness. In fact the HMA almost eliminates lag altogether and manages to improve smoothing at the same time.

### Usage: 
```python
usage: hma [-l N_LENGTH] [-o N_OFFSET]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| n_length | Window lengths. Multiple values indicated as comma separated values. | 10, 20 | False | None |
| n_offset | offset | None | False | None |


