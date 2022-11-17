---
title: pools
description: OpenBB Terminal Function
---

# DeFi

## pools

### Description: 

Display uniswap pools by volume. [Source: https://thegraph.com/en/]

### Usage: 
```python
usage: pairs [-l LIMIT] [-s {volumeUSD,token0.name,token0.symbol,token1.name,token1.symbol,volumeUSD,txCount}] [-r]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | Number of records to display | 10 | True | None |
| sortby | Sort by given column. Default: volumeUSD | volumeUSD | True | volumeUSD, token0.name, token0.symbol, token1.name, token1.symbol, volumeUSD, txCount |
| reverse | Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed. | False | True | None |


## Examples

```python
2022 Feb 15, 06:28 (✨) /crypto/defi/ $ pools
                                           Uniswap Pools
┌───────────────────────┬───────────────┬───────────────────┬───────────────┬───────────┬─────────┐
│ token0.name           │ token0.symbol │ token1.name       │ token1.symbol │ volumeUSD │ txCount │
├───────────────────────┼───────────────┼───────────────────┼───────────────┼───────────┼─────────┤
│ INFI                  │ INFI          │ Wrapped Ether     │ WETH          │ 99.5M     │ 41195   │
├───────────────────────┼───────────────┼───────────────────┼───────────────┼───────────┼─────────┤
│ UnFederalReserveToken │ eRSDL         │ Wrapped Ether     │ WETH          │ 994M      │ 148106  │
├───────────────────────┼───────────────┼───────────────────┼───────────────┼───────────┼─────────┤
│ Dinger Token          │ DINGER        │ Wrapped Ether     │ WETH          │ 99.4M     │ 27552   │
├───────────────────────┼───────────────┼───────────────────┼───────────────┼───────────┼─────────┤
│ CliffordInu           │ CLIFF         │ Wrapped Ether     │ WETH          │ 99.2M     │ 38398   │
├───────────────────────┼───────────────┼───────────────────┼───────────────┼───────────┼─────────┤
│ Wrapped Ether         │ WETH          │ Gen Shards        │ GS            │ 99M       │ 16773   │
├───────────────────────┼───────────────┼───────────────────┼───────────────┼───────────┼─────────┤
│ Wrapped Ether         │ WETH          │ 0x Protocol Token │ ZRX           │ 98.9M     │ 37163   │
├───────────────────────┼───────────────┼───────────────────┼───────────────┼───────────┼─────────┤
│ GET                   │ GET           │ Wrapped Ether     │ WETH          │ 98.9M     │ 21632   │
├───────────────────────┼───────────────┼───────────────────┼───────────────┼───────────┼─────────┤
│ AMPnet APX Token      │ AAPX          │ Wrapped Ether     │ WETH          │ 98.7M     │ 22957   │
├───────────────────────┼───────────────┼───────────────────┼───────────────┼───────────┼─────────┤
│ Wrapped Ether         │ WETH          │ RMPL              │ RMPL          │ 97.7M     │ 46404   │
├───────────────────────┼───────────────┼───────────────────┼───────────────┼───────────┼─────────┤
│ DSLA                  │ DSLA          │ Wrapped Ether     │ WETH          │ 97.5M     │ 37901   │
└───────────────────────┴───────────────┴───────────────────┴───────────────┴───────────┴─────────┘
```

