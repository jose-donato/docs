---
title: lt
description: OpenBB Terminal Function
---

# OnChain

## lt

### Description: 

Display Trades on Decentralized Exchanges aggregated by DEX or Month [Source: https://graphql.bitquery.io/]

### Usage: 
```python
usage: lt [-k {dex,time}] [-vs {ETH,USD,BTC,USDT}] [-l LIMIT] [-d DAYS] [-s {exchange,trades,tradeAmount}] [-r]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| kind | Aggregate trades by dex or time Default: dex | dex | False | dex, time |
| vs | Currency of displayed trade amount. | USD | False | ETH, USD, BTC, USDT |
| limit | display N number records | 10 | False | None |
| days | Number of days to display data for. | 90 | False | None |
| sortby | Sort by given column. Default: tradeAmount. For monthly trades date. | tradeAmount | False | exchange, trades, tradeAmount |
| reverse | Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed. | None | False | None |


