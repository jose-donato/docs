---
title: topbuys
description: OpenBB Terminal Function
---

# Government

## topbuys

### Description: 

Top buys for government trading. [Source: www.quiverquant.com]

### Usage: 
```python
usage: topbuys [-g {congress,senate,house}] [-p PAST_TRANSACTIONS_MONTHS] [-l LIMIT] [--raw]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| gov |  | congress | False | congress, senate, house |
| past_transactions_months | Past transaction months | 6 | False | None |
| limit | Limit of top tickers to display | 10 | False | None |
| raw | Print raw data. | None | False | None |


