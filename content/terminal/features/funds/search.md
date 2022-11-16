---
title: search
description: OpenBB Terminal Function
---

# Mutual Funds

## search

### Description: 

Search mutual funds in selected country based on selected field.

### Usage: 
```python
usage: search [-b {name,issuer,isin,symbol}] --fund FUND [FUND ...] [-s {country,name,symbol,issuer,isin,asset_class,currency,underlying}] [-l LIMIT] [-r]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| by | Field to search by | name | False | name, issuer, isin, symbol |
| fund | Fund string to search for | None | True | None |
| sortby | Column to sort by | name | False | country, name, symbol, issuer, isin, asset_class, currency, underlying |
| limit | Number of search results to show | 10 | False | None |
| reverse | Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed. | None | False | None |


