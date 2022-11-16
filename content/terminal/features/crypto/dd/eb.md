---
title: eb
description: OpenBB Terminal Function
---

# Due Diligence

## eb

### Description: 

Display active blockchain addresses over time [Source: https://glassnode.org] Note that free api keys only allow fetching data with a 1y lag

### Usage: 
```python
usage: eb [-p] [-e {aggregated,binance,bittrex,coinex,gate.io,gemini,huobi,kucoin,poloniex,bibox,bigone,bitfinex,hitbtc,kraken,okex,bithumb,zb.com,cobinhood,bitmex,bitstamp,coinbase,coincheck,luno}] [-s SINCE] [-u UNTIL]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| percentage | Show percentage instead of stacked value. Default: False | None | False | None |
| exchange | Exchange to check change. Default: aggregated | aggregated | False | aggregated, binance, bittrex, coinex, gate.io, gemini, huobi, kucoin, poloniex, bibox, bigone, bitfinex, hitbtc, kraken, okex, bithumb, zb.com, cobinhood, bitmex, bitstamp, coinbase, coincheck, luno |
| since | Initial date. Default: 2 years ago | 2020-11-16 | False | None |
| until | Final date. Default: 1 year ago | 2021-11-14 | False | None |


