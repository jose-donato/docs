---
title: whales
description: OpenBB Terminal Function
---

# OnChain

## whales

### Description: 

Display crypto whales transactions. [Source: https://docs.whale-alert.io/]

### Usage: 
```python
usage: whales [-m MIN] [-l LIMIT] [-s {date,symbol,blockchain,amount,amount_usd,from,to}] [-r] [-a]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| min | Minimum value of transactions. | 1000000 | False | None |
| limit | display N number records | 10 | False | None |
| sortby | Sort by given column. Default: date | date | False | date, symbol, blockchain, amount, amount_usd, from, to |
| reverse | Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed. | None | False | None |
| address | Flag to show addresses of transaction | None | False | None |

