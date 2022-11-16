---
title: oi
description: OpenBB Terminal Function
---

# Options

## oi

### Description: 

Plot open interest. Open interest represents the number of contracts that exist.

### Usage: 
```python
usage: oi [-m MIN] [-M MAX] [-c] [-p]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| min | Min strike to plot | -1 | False | None |
| max | Max strike to plot | -1 | False | None |
| calls | Flag to plot call options only | None | False | None |
| puts | Flag to plot put options only | None | False | None |


## Examples

```python

2022 Feb 16, 09:13 (✨) /stocks/options/ $ load SPY

2022 Feb 16, 09:14 (✨) /stocks/options/ $ exp 10
Expiration set to 2022-03-11

2022 Feb 16, 09:14 (✨) /stocks/options/ $ oi

```

![oi](https://user-images.githubusercontent.com/46355364/154282811-b8b7d36b-2e4e-44c0-8026-b244d97a8608.png)

