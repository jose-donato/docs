---
title: baas
description: OpenBB Terminal Function
---

# baas

Display average bid, ask prices, spread for given crypto pair for chosen time period [Source: https://graphql.bitquery.io/]

### Usage 
```python
usage: baas [-c COIN] [-vs VS] [-l LIMIT] [-s {date,baseCurrency,quoteCurrency,dailySpread,averageBidPrice,averageAskPrice}] [-r]
```
---
## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| coin | ERC20 token symbol or address. | None | True | None |
| vs | Quote currency | USDT | True | None |
| limit | Number of days to display data for. | 10 | True | None |
| sortby | Sort by given column. | date | True | date, baseCurrency, quoteCurrency, dailySpread, averageBidPrice, averageAskPrice |
| reverse | Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed. | False | True | None |
---
