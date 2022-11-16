---
title: mt
description: OpenBB Terminal Function
---

# Due Diligence

## mt

### Description: 

Display messari timeseries [Source: https://messari.io]

### Usage: 
```python
usage: mt [--list] [-t TIMESERIES] [-i {5m,15m,30m,1h,1d,1w}] [-s START] [-end END] [--include-paid] [-q QUERY [QUERY ...]]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| list | Flag to show available timeseries | None | False | None |
| timeseries | Messari timeseries id | None | False | None |
| interval | Frequency interval | 1d | False | 5m, 15m, 30m, 1h, 1d, 1w |
| start | Initial date. Default: A year ago | 2021-11-16 | False | None |
| end | End date. Default: Today | 2022-11-16 | False | None |
| include_paid | Flag to show both paid and free sources | None | False | None |
| query | Query to search across all messari timeseries | None | False | None |


