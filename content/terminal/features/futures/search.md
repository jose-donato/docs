---
title: search
description: OpenBB Terminal Function
---

# Futures

## search

### Description: 

Search futures. [Source: YahooFinance]

### Usage: 
```python
usage: search [-e {NYB,CMX,CME,CBT,NYM}] [-c {metals,agriculture,index,hydrocarbon,bonds,currency}] [-d DESCRIPTION [DESCRIPTION ...]]
```

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| exchange | Select the exchange where the future exists | None | False | NYB, CMX, CME, CBT, NYM |
| category | Select the category where the future exists | None | False | metals, agriculture, index, hydrocarbon, bonds, currency |
| description | Select the description future you are interested in | None | False | None |


