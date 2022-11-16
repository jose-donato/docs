---
title: create
description: OpenBB Terminal Function
---

# Degiro

## create

### Description: 



### Usage: 
```python
usage: create [-a {buy,sell}] (-prod PRODUCT | -sym SYMBOL) -p PRICE (-s SIZE | -up UP_TO) [-d {gtd,gtc}] [-t {limit,market,stop-limit,stop-loss}]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| action | Action wanted. | buy | False | dict_keys(['buy', 'sell']) |
| product | Id of the product wanted. | None | False | None |
| symbol | Symbol wanted. | None | False | None |
| price | Price wanted. | None | True | None |
| size | Price wanted. | None | False | None |
| up_to | Up to price. | None | False | None |
| duration | Duration of the Order. | gtd | False | dict_keys(['gtd', 'gtc']) |
| type | Type of the Order. | limit | False | dict_keys(['limit', 'market', 'stop-limit', 'stop-loss']) |


