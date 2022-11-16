---
title: topsells
description: OpenBB Terminal Function
---

# Government

## topsells

### Description: 

Top sells for government trading. [Source: www.quiverquant.com]

### Usage: 
```python
usage: topsells [-g {congress,senate,house}] [-p PAST_TRANSACTIONS_MONTHS] [-l LIMIT] [--raw]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| gov |  | congress | False | congress, senate, house |
| past_transactions_months | Past transaction months | 6 | False | None |
| limit | Limit of top tickers to display | 10 | False | None |
| raw | Print raw data. | None | False | None |


