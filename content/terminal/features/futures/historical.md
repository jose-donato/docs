---
title: historical
description: OpenBB Terminal Function
---

# Futures

## historical

### Description: 

Display futures historical. [Source: YahooFinance]

### Usage: 
```python
usage: historical -t TICKER [-s START] [-e EXPIRY]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| ticker | Future ticker to display timeseries separated by comma when multiple, e.g.: BLK,QI | None | True | None |
| start | Initial date. Default: 3 years ago | 2019-11-17 12:46:00.896232 | False | None |
| expiry | Select future expiry date with format YYYY-MM | None | False | None |


