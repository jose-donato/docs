---
title: dvcp
description: OpenBB Terminal Function
---

# OnChain

## dvcp

### Description: 

Display daily volume for given crypto pair [Source: https://graphql.bitquery.io/]

### Usage: 
```python
usage: dvcp -c COIN [-vs VS] [-d DAYS] [-s {date,exchange,base,quote,open,high,low,close,tradeAmount,trades}] [-r]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| coin | ERC20 token symbol or address. | None | True | None |
| vs | Quote currency | USDT | False | None |
| days | Number of days to display data for. | 10 | False | None |
| sortby | Sort by given column. | date | False | date, exchange, base, quote, open, high, low, close, tradeAmount, trades |
| reverse | Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed. | None | False | None |


