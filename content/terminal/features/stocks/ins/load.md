---
title: load
description: OpenBB Terminal Function
---

# Insiders

## load

### Description: 

Load stock ticker to perform analysis on. When the data source is syf', an Indian ticker can be loaded by using '.NS' at the end, e.g. 'SBIN.NS'. See available market in https://help.yahoo.com/kb/exchanges-data-providers-yahoo-finance-sln2310.html.

### Usage: 
```python
usage: load -t TICKER [-s START] [-e END] [-i {1,5,15,30,60}] [-p] [-f FILEPATH] [-m] [-w] [-r {ytd,1y,2y,5y,6m}]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| ticker | Stock ticker | None | True | None |
| start | The starting date (format YYYY-MM-DD) of the stock | 2019-11-12 | False | None |
| end | The ending date (format YYYY-MM-DD) of the stock | 2022-11-16 | False | None |
| interval | Intraday stock minutes | 1440 | False | 1, 5, 15, 30, 60 |
| prepost | Pre/After market hours. Only works for 'yf' source, and intraday data | None | False | None |
| filepath | Path to load custom file. | None | False | None |
| monthly | Load monthly data | None | False | None |
| weekly | Load weekly data | None | False | None |
| iexrange | Range for using the iexcloud api. Longer range requires more tokens in account | ytd | False | ytd, 1y, 2y, 5y, 6m |


