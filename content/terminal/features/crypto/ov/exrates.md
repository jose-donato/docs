---
title: exrates
description: OpenBB Terminal Function
---

# Overview

## exrates

### Description: 

Shows list of crypto, fiats, commodity exchange rates from CoinGecko You can look on only N number of records with --limit, You can sort by Index, Name, Unit, Value, Type, and also use --reverse flag to sort descending.

### Usage: 
```python
usage: exrates [-l LIMIT] [-s {Index,Name,Unit,Value,Type}] [-r]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | display N number records | 15 | True | None |
| sortby | Sort by given column. Default: Index | Index | True | Index, Name, Unit, Value, Type |
| reverse | Data is sorted in ascending order by default. Reverse flag will sort it in an descending way. Only works when raw data is displayed. | False | True | None |


## Examples

```python

2022 Feb 15, 08:12 (✨) /crypto/ov/ $ exrates
                           Exchange Rates
┌───────┬─────────────────────────────┬──────┬────────────┬────────┐
│ Index │ Name                        │ Unit │ Value      │ Type   │
├───────┼─────────────────────────────┼──────┼────────────┼────────┤
│ 1     │ Bitcoin                     │ BTC  │ 1.00       │ crypto │
├───────┼─────────────────────────────┼──────┼────────────┼────────┤
│ 2     │ Ether                       │ ETH  │ 14.20      │ crypto │
├───────┼─────────────────────────────┼──────┼────────────┼────────┤
│ 3     │ Litecoin                    │ LTC  │ 337.43     │ crypto │
├───────┼─────────────────────────────┼──────┼────────────┼────────┤
│ 4     │ Bitcoin Cash                │ BCH  │ 130.59     │ crypto │
├───────┼─────────────────────────────┼──────┼────────────┼────────┤
│ 5     │ Binance Coin                │ BNB  │ 103.36     │ crypto │
├───────┼─────────────────────────────┼──────┼────────────┼────────┤
│ 6     │ EOS                         │ EOS  │ 17907.80   │ crypto │
├───────┼─────────────────────────────┼──────┼────────────┼────────┤
│ 7     │ XRP                         │ XRP  │ 53041.60   │ crypto │
├───────┼─────────────────────────────┼──────┼────────────┼────────┤
│ 8     │ Lumens                      │ XLM  │ 201835.99  │ crypto │
├───────┼─────────────────────────────┼──────┼────────────┼────────┤
│ 9     │ Chainlink                   │ LINK │ 2619.11    │ crypto │
├───────┼─────────────────────────────┼──────┼────────────┼────────┤
│ 10    │ Polkadot                    │ DOT  │ 2235.39    │ crypto │
├───────┼─────────────────────────────┼──────┼────────────┼────────┤
│ 11    │ Yearn.finance               │ YFI  │ 1.85       │ crypto │
├───────┼─────────────────────────────┼──────┼────────────┼────────┤
│ 12    │ US Dollar                   │ $    │ 44258.09   │ fiat   │
├───────┼─────────────────────────────┼──────┼────────────┼────────┤
│ 13    │ United Arab Emirates Dirham │ DH   │ 162560.27  │ fiat   │
├───────┼─────────────────────────────┼──────┼────────────┼────────┤
│ 14    │ Argentine Peso              │ $    │ 4711797.18 │ fiat   │
├───────┼─────────────────────────────┼──────┼────────────┼────────┤
│ 15    │ Australian Dollar           │ A$   │ 61998.28   │ fiat   │
└───────┴─────────────────────────────┴──────┴────────────┴────────┘

```

