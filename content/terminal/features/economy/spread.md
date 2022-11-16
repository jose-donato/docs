---
title: spread
description: OpenBB Terminal Function
---

# Economy

## spread

### Description: 

Generate bond spread matrix.

### Usage: 
```python
usage: spread [-g {G7,PIIGS,EZ,AMERICAS,EUROPE,ME,APAC,AFRICA}] [-c COUNTRIES] [-m MATURITY] [--change CHANGE] [--color {rgb,binary,openbb}]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| group | Show bond spread matrix for group of countries. | G7 | False | G7, PIIGS, EZ, AMERICAS, EUROPE, ME, APAC, AFRICA |
| countries | Show bond spread matrix for explicit list of countries. | None | False | None |
| maturity | Specify maturity to compare rates. | 10Y | False | None |
| change | Get matrix of 1 day change in rates or spreads. | None | False | None |
| color | Set color palette on heatmap. | openbb | False | rgb, binary, openbb |


