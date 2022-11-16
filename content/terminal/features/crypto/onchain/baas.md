---
title: baas
description: OpenBB Terminal Function
---

# OnChain

## baas

### Description: 

Display average bid, ask prices, spread for given crypto pair for chosen time period [Source: https://graphql.bitquery.io/]

### Usage: 
```python
usage: baas [-c COIN] [-vs VS] [-d DAYS] [-s {date,baseCurrency,quoteCurrency,dailySpread,averageBidPrice,averageAskPrice}] [-r]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| coin | ERC20 token symbol or address. | None | False | None |
| vs | Quote currency | USDT | False | None |
| days | Number of days to display data for. | 10 | False | None |
| sortby | Sort by given column. | date | False | date, baseCurrency, quoteCurrency, dailySpread, averageBidPrice, averageAskPrice |
| reverse | Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed. | None | False | None |


