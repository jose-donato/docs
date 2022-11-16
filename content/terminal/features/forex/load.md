---
title: load
description: OpenBB Terminal Function
---

# Forex

## load

### Description: 

Load historical exchange rate data.Available data sources are Alpha Advantage and YahooFinanceBy default main source used for analysis is YahooFinance (yf). To change it use --source av

### Usage: 
```python
usage: load [-t TICKER] [-r {i,d,w,m}] [-i {1min,5min,15min,30min,60min,90min,1hour,1day,5day,1week,1month,3month}] [-s START_DATE]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| ticker | Currency pair to load. | None | True | None |
| resolution | [Alphavantage only] Resolution of data. Can be intraday, daily, weekly or monthly | d | True | i, d, w, m |
| interval | Interval of intraday data. Options: [YahooFinance] 1min, 2min, 5min, 15min, 30min, 60min, 90min, 1hour, 1day, 5day, 1week, 1month, 3month. [AlphaVantage] 1min, 5min, 15min, 30min, 60min | 1day | True | 1min, 5min, 15min, 30min, 60min, 90min, 1hour, 1day, 5day, 1week, 1month, 3month |
| start_date | Start date of data. | 2021-11-16 16:02:51.548508 | True | None |


